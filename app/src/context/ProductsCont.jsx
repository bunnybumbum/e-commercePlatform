import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
export const ProductsData = createContext();

function ProductsCont({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState({});
  const [isLogged, setIsLogged] = useState(false);

 
  
  const getTotalCartAmount = () => {
    let total = 0;
    products.forEach((item) => {
      const quantity = cart[item.id];      
      if (quantity) {
        total += item.price * quantity;
      }
    });
    return total;
  };

  const cartItemNotify = ()=>{
    let totalNotify = 0;
    for (let i in cart){
      if(cart[i]>0){
        totalNotify += cart[i]
      }
    }
    return totalNotify
  }

  const isLoggedOrNot = ()=>{
    setIsLogged(!isLogged)
  }

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const resp = await axios.get("http://localhost:3000/newProducts");
         setProducts(resp.data);

         const storedCart = JSON.parse(localStorage.getItem("cart")) || {}
        let defaultCart = {};
        resp.data.forEach((item) => {
          defaultCart[item.id] = storedCart[item.id] || 0;
        });
        setCart(defaultCart);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductsData();
  }, []);

  useEffect(()=>{
    if(products.length>0){
      localStorage.setItem("cart",JSON.stringify(cart))
    }
    
  },[cart,products])

  const addToCart = (id) => {
    setCart((prev) => {
      const newCart = {
      ...prev,
      [id]: prev[id] + 1,
    };
    return newCart
  });
  };
  const removeFromCart = (id) => {
    setCart((prev) => {
      const cartNew = { ...prev };
      if (cartNew[id] > 0) {
        cartNew[id] -= 1;
      }
      return cartNew;
    });
  };
  const currency = "₹";
  const value = {
    currency,
    products,
    search,
    setSearch,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    cartItemNotify,
    isLogged,
    isLoggedOrNot
  };

  return (
    <div>
      <ProductsData.Provider value={value}>{children}</ProductsData.Provider>
    </div>
  );

}

export default ProductsCont;
