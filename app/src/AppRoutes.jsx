import Navbar from "./Components/Navbar/Navbar";
import { Outlet, Route, Routes} from "react-router-dom";
import Shop from "./pages/Shop";
import "./App.css";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Search from "./pages/Search";
import Layout from "./Layout/Layout";
import Payment from "./pages/Payment";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/Contact";
import AdmineMainPage from "./Admine/AdminMainPage";
import AdmineActionPage from "./Admine/AdminActionPage";
import AdminUserActionPage from "./Admine/AdminUserActionPage";
import  { userData } from "./context/UserContext";
import { useContext } from "react";
import ProductAddPage from "./Admine/ProductAddPage";
import Orders from "./pages/Orders";

function AppRoutes() {
  const { isAdmin } = useContext(userData);
  return (
    <>
      <ToastContainer draggable />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Navbar /> <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/search" element={<Search />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
      <Route
            path="/admin"
            element={ isAdmin ? <AdmineMainPage /> : <NotFound />}
          />
      <Route
            path="/adminProducts/:id"
            element={ isAdmin ? <AdmineActionPage /> : <NotFound />}
          />
          <Route
            path="/adminUsers/:ID"
            element={ isAdmin ? <AdminUserActionPage /> : <NotFound />}
          />
          <Route
            path="/addproducts"
            element={ isAdmin ? <ProductAddPage /> : <NotFound />}
          />
      </Routes>
    </>
  );
}


export default AppRoutes;
