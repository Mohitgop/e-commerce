import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./Components/About/About";
import Footer from "./pages/Footer";
import Contact from "./Components/Contact/Contact";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Shop from "./Components/Shop/Shop";
import PlaceOrder from "./pages/Place_order";
import NotFound from "./pages/NotFound";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { UserProvider } from "./Context/UserContext";
import { ProductProvider } from "./Context/ProductContext";
import { CartProvider } from "./Context/CartContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <UserProvider>
          <ProductProvider>
            <CartProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                {/* Add more routes as needed */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </CartProvider>
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
