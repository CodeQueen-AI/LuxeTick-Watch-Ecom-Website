// "use client";
// import { createContext, useState, useContext, ReactNode } from "react";
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number; 
// }

// interface CartContextType {
//   cartItems: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: number) => void;
//   updateItemQuantity: (id: number, quantity: number) => void; 
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// interface CartProviderProps {
//   children: ReactNode;
// }

// export const CartProvider = ({ children }: CartProviderProps) => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevItems, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (id: number) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const updateItemQuantity = (id: number, quantity: number) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
//       )
//     );
//   };
//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateItemQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };



// "use client";
// import { createContext, useState, useContext, ReactNode } from "react";

// interface Product {
//   id: string; // 🔥 IMPORTANT (string because _id MongoDB)
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// interface CartContextType {
//   cartItems: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: string) => void;
//   updateItemQuantity: (id: string, quantity: number) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// interface CartProviderProps {
//   children: ReactNode;
// }

// export const CartProvider = ({ children }: CartProviderProps) => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   // 🔥 ✅ FIXED ADD TO CART
//   const addToCart = (product: Product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find(
//         (item) => item.id === product.id
//       );

//       // ✅ If already exists → ADD FULL quantity
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? {
//                 ...item,
//                 quantity: item.quantity + product.quantity, // 🔥 MAIN FIX
//               }
//             : item
//         );
//       }

//       // ✅ New item → use passed quantity
//       return [
//         ...prevItems,
//         {
//           ...product,
//           quantity: product.quantity || 1, // safety
//         },
//       ];
//     });
//   };

//   // ✅ REMOVE
//   const removeFromCart = (id: string) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item.id !== id)
//     );
//   };

//   // ✅ UPDATE QUANTITY
//   const updateItemQuantity = (id: string, quantity: number) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? { ...item, quantity: Math.max(1, quantity) }
//           : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateItemQuantity,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };














"use client";
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface Product {
  id: string;  // MongoDB _id
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCartItems(JSON.parse(storedCart));
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateItemQuantity = (id: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateItemQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};