import Navbar from "./Components/Navbar/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
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
function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<> <Navbar /> <Outlet /> </> } >
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/search" element={<Search />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment/>} />
           <Route path="/login" element={<LoginPage/>}/>
           <Route path="/signup" element={<SignupPage/>}/> 
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Layout>
    </>
  );
}

export default App;
