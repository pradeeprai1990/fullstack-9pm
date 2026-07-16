import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  let [categoryData, setCategoryData] = useState([]);
  let [brandData, setBrandData] = useState([]);

  let getCategory = async () => {
    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/categories.php`,
    );

    console.log(apiRes);

    let { data } = apiRes.data; //Object Des
    setCategoryData(data);
  };
  let getBrand = async () => {
    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/brands.php`,
    );
    let { data } = apiRes.data; //Object Des
    setBrandData(data);
  };

  let getProduct = async () => {
    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/products.php`,
    );
    let { data } = apiRes.data; //Object Des

    // axios.post( apiUrl,data )
  };

  useEffect(() => {
    getProduct();
    getCategory();
    getBrand();
  }, []);

  return (
    <section className="mt-10">
      <div className="max-w-[1320px] mx-auto grid grid-cols-[20%_auto] gap-5">
        <aside className="border-1">
          <h1 class="text-4xl p-3 font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>

          <div className="border-1 p-5 h-[300px] overflow-y-scroll">
            <span class="font-medium text-gray-900">Categories</span>

            <ul>
              {categoryData.map((obj, index) => {
                return (
                  <li className="flex gap-2 mt-2">
                    <input type="checkbox" className="border-1" />
                    <label for="beauty" class="text-sm text-gray-600">
                      {obj.name}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border-1 p-5 h-[300px] overflow-y-scroll">
            <span class="font-medium text-gray-900">Brand</span>

            <ul>
              {brandData.map((obj, index) => {
                return (
                  <li className="flex gap-2 mt-2">
                    <input type="checkbox" className="border-1" />
                    <label for="beauty" class="text-sm text-gray-600">
                      {obj.name}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
        <div className="border-1">
          <div className="flex justify-end ">
            <select name="" className="border-1 p-2" id="">
              <option value="">Sort By</option>
              <option value="">Name A to Z</option>
              <option value="">Name Z to A</option>
              <option value="">Low to Hight</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard() {
  return (
    <figure className="shadow-lg">
      <img
        src="https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/thumbnail.png"
        alt=""
      />
      <div className="p-2">
        <h3 className="font-bold text-xl">Pacifica Touring</h3>
        <p>Rs 500</p>
      </div>
    </figure>
  );
}
