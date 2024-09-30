import { useContext, useEffect, useState } from "react";
import { ProductsData } from "../context/ProductsCont";
import { NavLink } from "react-router-dom";

function Search() {
  const { products, search } = useContext(ProductsData);
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredDatas = products.filter((item) =>
      item.name.toLowerCase().includes(search)
    );

    setData(filteredDatas.length > 0 ? filteredDatas : "not found");
    console.log(filteredDatas);
  }, [search, products]);

  return (
    <div className="pt-20">
      {data.length > 0 && data !== "not found" ? (
        <ul className="flex flex-wrap justify-center items-center gap-8">
          {data.map((item) => (
            <li
              className="border-[1px] border-[#BF3131] text-center w-full md:w-[40%] text-[20px] p-5"
              key={item.id}
            >
              <NavLink to={`/products/${item.id}`} className="flex justify-center">
                <img src={item.image} className="w-52" alt={item.name} />
              </NavLink>
              
              <p className="mt-2">{item.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Not found</h1>
      )}
    </div>
  );
}

export default Search;
