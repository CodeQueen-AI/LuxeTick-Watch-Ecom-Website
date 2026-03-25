import ClientWrapper from "../components/clientwrapper";
import ClientOnly from "../components/ClientOnly";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { CartProvider } from "./context/cartcontext";
import { WishlistProvider } from "./context/wishlistcontext";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientOnly>
      <ClientWrapper>
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </ClientWrapper>
    </ClientOnly>
  );
}