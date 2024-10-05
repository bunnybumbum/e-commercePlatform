import logo from "../Components/assets/StepPrimeLogo.png";
import { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductsData } from "../context/ProductsCont";
import { userData } from "../context/UserContext";
function Product() {
  const { id } = useParams();
  const { products, currency } = useContext(ProductsData);
  const { isLogged, addToCart } = useContext(userData);
  const [quantity, setQuantity] = useState(1);
  const findProduct = products.find((item) => item.id === id);

  return (
    <>
      {!products.length ? (
        <p>Loading...</p>
      ) : !findProduct ? (
        <p>product not found</p>
      ) : (
        <div className="flex flex-col md:flex-row justify-around px-4 py-6">
          <div className="left-section md:w-[40%] flex flex-col items-center">
            <img
              src={findProduct.image}
              className="w-[100%] max-w-[300px] mb-4"
              alt=""
            />
            <h4 className="text-[24px] text-center font-[700]">
              {findProduct.name}
            </h4>
            <h3 className="text-[20px] text-center font-[400]">{`Type: ${findProduct.type}`}</h3>
            <h3 className="text-[24px] text-center font-[700]">{`Price: ${findProduct.price}${currency}`}</h3>
          </div>
          <div className="right-section md:w-[50%] mt-4 md:mt-0 flex flex-col items-center justify-center">
            <img src={logo} className="h-[300px] mt-[-50px]" alt="" />
            <p className="text-[50px] font-[300] text-center text-sm md:text-base px-2 mt-[-20px]">
              {findProduct.description}
            </p>
            <h1 className="text-[20px] font-[600]">Quantity:</h1>
            <div className="flex gap-5 border-[4px] w-[30%] justify-between border-[#BF3131] my-5 ">
              <button
                className="text-[30px] bg-[#BF3131] hover:bg-[#800000] text-white w-[30%]"
                onClick={() =>
                  setQuantity((prevQuantity) =>
                    prevQuantity > 1 ? prevQuantity - 1 : 1
                  )
                }
              >
                -
              </button>
              <button className="text-[30px] font-[600]">{quantity}</button>
              <button
                className="text-[22px] bg-[#BF3131] hover:bg-[#800000] text-white w-[30%]"
                onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
              >
                +
              </button>
            </div>
            {isLogged === true ? (
              <NavLink to="/cart" onClick={() => addToCart(id, quantity)}>
                <button className="mt-8 w-[350px] h-[70px] rounded-md bg-[#BF3131] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#7D0A0A] focus:outline-none focus:ring-4 focus:ring-blue-300">
                  Add to Cart
                </button>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <button className="mt-8 w-[200px] h-[50px] rounded-md bg-[#333] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#7D0A0A] focus:outline-none focus:ring-4 focus:ring-blue-300">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
