"use client";
import { createContext, useContext, useState, ReactNode } from "react";
interface WishlistContextType {
  wishlistItems: any[];
  addToWishlist: (product: any) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
  isInWishlist: (id: number) => boolean; 
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);

  const addToWishlist = (product: any) => setWishlistItems(prev => [...prev, product]);
  const removeFromWishlist = (id: number) => setWishlistItems(prev => prev.filter(p => p.id !== id));
  const clearWishlist = () => setWishlistItems([]);

  const isInWishlist = (id: number) => wishlistItems.some(p => p.id === id);

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, clearWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within a WishlistProvider");
  return context;
};