"use client";
import CartProvider from "./contexts/cartContext";
import UserProvider from "./contexts/userContext";

const Contexts = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <UserProvider>{children}</UserProvider>
    </CartProvider>
  );
};

export default Contexts;
