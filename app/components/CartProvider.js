"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("lion-castle-cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("lion-castle-cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const value = useMemo(() => ({
    items,
    addItem(product) {
      setItems((current) => {
        const found = current.find((item) => item.id === product.id);
        if (found) {
          return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
        }
        return [...current, { ...product, quantity: 1 }];
      });
    },
    removeItem(id) {
      setItems((current) => current.filter((item) => item.id !== id));
    },
    changeQuantity(id, amount) {
      setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item));
    },
    clearCart() {
      setItems([]);
    },
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
