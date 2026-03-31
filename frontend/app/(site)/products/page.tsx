"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiFilter, FiPlus, FiX, FiMinus, FiHeart } from "react-icons/fi";
import { AiOutlineCheckCircle, AiOutlineProduct } from "react-icons/ai";
import { useCart } from "../../(site)/context/cartcontext";
import { useWishlist } from "../../(site)/context/wishlistcontext";

export default function ProductsPage() {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [tagFilters, setTagFilters] = useState({ discount: false, newArrival: false, outOfStock: false });
  const [expanded, setExpanded] = useState({});
  const [toast, setToast] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(err => console.error(err));
  }, []);

  const filterOptions = {
    Brands: [...new Set(products.map(p => p.brand))],
    Colors: [...new Set(products.map(p => p.color))],
    "Strap Type": [...new Set(products.map(p => p.strap))],
    "Category / Style": [...new Set(products.map(p => p.category))],
    Gender: [...new Set(products.map(p => p.gender))],
    Price: ["$100–$200", "$201–$350", "$351–$500", "$501+"],
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const toggleTagFilter = (tag) => setTagFilters(prev => ({ ...prev, [tag]: !prev[tag] }));
  const toggleExpand = (category) => {
    setExpanded(prev => {
      const newExpanded = {};
      Object.keys(filterOptions).forEach(cat => newExpanded[cat] = false);
      newExpanded[category] = !prev[category];
      return newExpanded;
    });
  };
  const toggleFilter = (category, value) => {
    let updatedFilters = [...selectedFilters];
    const exists = updatedFilters.find(f => f.category === category && f.value === value);
    if (exists) updatedFilters = updatedFilters.filter(f => f !== exists);
    else updatedFilters = [...updatedFilters.filter(f => f.category !== category), { category, value }];
    setSelectedFilters(updatedFilters);
  };
  const removeFilter = (filter) => setSelectedFilters(selectedFilters.filter(f => f !== filter));
  const clearAllFilters = () => {
    setSelectedFilters([]);
    setTagFilters({ discount: false, newArrival: false, outOfStock: false });
    setFilteredProducts(products);
    setCurrentPage(1);
  };

  const applyFilters = () => {
    let filtered = products;
    if (tagFilters.discount) filtered = filtered.filter(p => p.discount);
    if (tagFilters.newArrival) filtered = filtered.filter(p => p["new"]);
    if (tagFilters.outOfStock) filtered = filtered.filter(p => p.outofstock);

    selectedFilters.forEach(f => {
      switch(f.category){
        case "Brands": filtered = filtered.filter(p => p.brand === f.value); break;
        case "Colors": filtered = filtered.filter(p => p.color === f.value); break;
        case "Price":
          switch(f.value){
            case "$100–$200": filtered = filtered.filter(p => p.price >= 100 && p.price <= 200); break;
            case "$201–$350": filtered = filtered.filter(p => p.price >= 201 && p.price <= 350); break;
            case "$351–$500": filtered = filtered.filter(p => p.price >= 351 && p.price <= 500); break;
            case "$501+": filtered = filtered.filter(p => p.price >= 501); break;
          }
          break;
        case "Strap Type": filtered = filtered.filter(p => p.strap === f.value); break;
        case "Category / Style": filtered = filtered.filter(p => p.category === f.value); break;
        case "Gender": filtered = filtered.filter(p => p.gender === f.value); break;
      }
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
    if (filtered.length === 0) setOpenFilter(false);
  };

  const handleAddCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    setToast(`${product.name} Added To Cart!`);
    setTimeout(() => setToast(""), 2500);
  };
  const handleWishlist = (product) => {
    if (wishlistItems.find(item => item.id === product.id)) {
      removeFromWishlist(product.id);
      setToast(`${product.name} Removed From Wishlist!`);
    } else {
      addToWishlist(product);
      setToast(`${product.name} Added To Wishlist!`);
    }
    setTimeout(() => setToast(""), 2500);
  };

  return (
    <section className="w-full min-h-screen px-12 py-12 poppins relative">
      {toast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 animate-slideIn z-50">
          <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          <p className="text-sm">{toast}</p>
        </div>
      )}

      <h1 className="text-7xl font-extralight text-center mb-12 allura">Our Products</h1>

      <div onClick={() => setOpenFilter(!openFilter)} className="flex items-center gap-2 cursor-pointer mb-10">
        <span className="text-lg font-semibold">Filters</span>
        <FiFilter size={22} />
      </div>

      <div className="flex gap-10">
        {/* Filter Sidebar */}
        <div className={`transition-all duration-500 overflow-hidden ${openFilter ? "w-80" : "w-0"}`}>
          <div className={`border p-6 bg-white relative ${openFilter ? "max-h-[1200px]" : "max-h-0"} transition-all duration-500`}>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-400 cursor-pointer hover:underline" onClick={clearAllFilters}>Clear All Filters</p>
              <button onClick={() => setOpenFilter(false)} className="text-gray-500"><FiX size={20} /></button>
            </div>

            {/* Tags */}
            <div className="flex gap-2 mb-4 flex-wrap">
              <span onClick={() => toggleTagFilter("discount")} className={`cursor-pointer px-2 py-1 text-[11px] rounded-full font-medium transition shadow-sm ${tagFilters.discount ? "bg-red-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-red-200"}`}>Discount</span>
              <span onClick={() => toggleTagFilter("newArrival")} className={`cursor-pointer px-2 py-1 text-[11px] rounded-full font-medium transition shadow-sm ${tagFilters.newArrival ? "bg-green-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-green-200"}`}>New Arrival</span>
              <span onClick={() => toggleTagFilter("outOfStock")} className={`cursor-pointer px-2 py-1 text-[11px] rounded-full font-medium transition shadow-sm ${tagFilters.outOfStock ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-700 hover:text-white"}`}>Out of Stock</span>
            </div>

            {/* Selected Filters */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedFilters.map((f, idx) => (
                <div key={idx} className="flex items-center bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {f.value}
                  <FiX className="ml-1 cursor-pointer" onClick={() => removeFilter(f)} />
                </div>
              ))}
            </div>

            {/* Expandable Filters */}
            {Object.keys(filterOptions).map((category, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-center cursor-pointer py-2" onClick={() => toggleExpand(category)}>
                  <span className="font-medium">{category}</span>
                  {expanded[category] ? <FiMinus /> : <FiPlus />}
                </div>
                <div className={`transition-all duration-300 overflow-hidden ${expanded[category] ? "max-h-64 mt-2" : "max-h-0"}`}>
                  {category === "Price" ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {filterOptions.Price.map((range, idx) => {
                        const selected = selectedFilters.some(f => f.category === "Price" && f.value === range);
                        return (
                          <div key={idx} onClick={() => toggleFilter("Price", range)} className={`cursor-pointer px-3 py-1 rounded-full border ${selected ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-300"} hover:bg-gray-900 hover:text-white transition text-[12px]`}>{range}</div>
                        );
                      })}
                    </div>
                  ) : (
                    filterOptions[category].map((option, idx2) => {
                      const selected = selectedFilters.some(f => f.category === category && f.value === option);
                      const disabled = selectedFilters.some(f => f.category === category) && !selected;
                      return (
                        <div key={idx2} className={`flex items-center gap-2 cursor-pointer text-[12px] py-1 ${disabled ? "opacity-40 pointer-events-none" : ""}`} onClick={() => toggleFilter(category, option)}>
                          <div className={`w-4 h-4 border rounded-full flex-shrink-0 flex items-center justify-center ${selected ? "bg-black" : "bg-white"}`}></div>
                          <span>{option}</span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            ))}

            <button className="w-full bg-black text-white py-3 mt-4 cursor-pointer" onClick={applyFilters}>APPLY</button>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col justify-center items-center flex-1 py-40 gap-4">
            <AiOutlineProduct size={60} />
            <p className="text-xl font-medium">No Product Found</p>
          </div>
        ) : (
          <div className={`grid gap-8 flex-1 transition-all duration-500 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}>
            {currentProducts.map((product) => (
              <div key={product.id} className={`border p-5 hover:shadow-lg transition relative flex flex-col justify-between ${product.outofstock ? "opacity-50 pointer-events-none" : ""}`}>
                <div className="relative h-64 w-full bg-gray-100 group cursor-pointer overflow-hidden">
                  {/* Tags */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1 z-50">
                    {product.outofstock && <span className="text-[10px] font-medium px-2 py-[2px] rounded-full bg-gray-800 text-white shadow-sm uppercase tracking-wide">Out Of Stock</span>}
                    {product.discount && <span className="text-[10px] font-medium px-2 py-[2px] rounded-full bg-red-500 text-white shadow-sm uppercase tracking-wide">{product.discount}% OFF</span>}
                    {product["new"] && <span className="text-[10px] font-medium px-2 py-[2px] rounded-full bg-green-500 text-white shadow-sm uppercase tracking-wide">New</span>}
                  </div>

                  <Link href={`/products/${product.id}`} className={product.outofstock ? "pointer-events-none" : ""}>
                    <Image src={product.image} alt={product.name} fill className="object-contain" />
                  </Link>

                  {/* Wishlist & Cart */}
                  <div className={`absolute top-2 right-2 flex flex-col gap-2 transition ${product.outofstock ? "opacity-0" : "opacity-0 group-hover:opacity-100"}`}>
                    <button onClick={() => handleWishlist(product)} className="bg-white p-3 rounded-full shadow hover:bg-gray-200 transition cursor-pointer">
                      <FiHeart className={`text-xl ${wishlistItems.find(item => item.id === product.id) ? "text-red-500" : "text-gray-500"}`} />
                    </button>
                    <button onClick={() => handleAddCart(product)} className="bg-white p-3 rounded-full shadow hover:bg-gray-200 transition cursor-pointer">
                      <AiOutlineCheckCircle className="text-xl text-gray-700" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <p className="font-medium text-sm">{product.name}</p>
                  <div className="flex justify-between items-center">
                    <Link href={`/products/{product.id}`} className="bg-black text-white px-3 py-1 text-xs rounded hover:bg-gray-800">View</Link>
                    <p className="font-semibold text-sm">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredProducts.length > productsPerPage && (
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 border ${currentPage === i + 1 ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-300"}`}>{i + 1}</button>
          ))}
        </div>
      )}
    </section>
  );
}