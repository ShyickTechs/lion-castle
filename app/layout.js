import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import CartProvider from "./components/CartProvider";

export const metadata = {
  title: "Lion Castle | Wine & Liquor Shop",
  description: "Lion Castle Wine/Liquor Shop and wholesale beverage store in Ghana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
