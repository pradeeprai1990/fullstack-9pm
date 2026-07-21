import axios from "axios";
import React, { useContext,  useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import Loading from "../common/Loading";
import { Link } from "react-router";
import { cartContext } from "../../MainContext";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {

   let {count,setCount}=useContext(cartContext)
  let [categoryData, setCategoryData] = useState([]);
  let [brandData, setBrandData] = useState([]);

  let [loading, setLoading] = useState(false);

  let [priceFrom, setpricefrom] = useState("");
  let [priceto, setpriceto] = useState("");
  let [rating, setrating] = useState("");

  let [selectedcategories, setselectedcategories] = useState([]);

  let [sort, setsort] = useState("");

  let [products, setproducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, settotalpages] = useState("");

  let getCategory = async () => {
    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/categories.php`,
    );

    console.log(apiRes);

    let { data } = apiRes.data; //Object Des
    setCategoryData(data);
  };

  let getselectedcategory = (slug) => {
    if (selectedcategories.includes(slug)) {
      let data = selectedcategories.filter((v) => {
        if (v != slug) {
          return v;
        }
      });

      setselectedcategories(data);
    } else {
      let data = [...selectedcategories, slug];

      setselectedcategories(data);
    }
  };

  let getBrand = async () => {
    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/brands.php`,
    );
    let { data } = apiRes.data; //Object Des
    setBrandData(data);
  };

  let getPrice = (from, to) => {
    setpricefrom(from);
    setpriceto(to);
  };

  let getProduct = async () => {
    setLoading(true);

    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/products.php`,
      {
        params: {
          page: currentPage,
          sorting: sort,
          categories: selectedcategories.toString(),
          price_from: priceFrom,
          price_to: priceto,
          rating: rating,
          limit: 12,
        },
      },
    );

    let { data, total_pages } = apiRes.data; //Object Des
    settotalpages(total_pages);

    setproducts(data);
    setLoading(false);

    // axios.post( apiUrl,data )
  };

  useEffect(() => {
    getCategory();
    getBrand();
  }, []);

  useEffect(() => {
    getProduct();
  }, [sort, selectedcategories, priceFrom, priceto, rating, currentPage]);

  return (
    <section className="mt-10">
      <ToastContainer />
      <div className="max-w-[1320px] mx-auto grid grid-cols-[20%_auto] gap-5">
        <aside className="border-1">
          <h1 class="text-4xl p-3 font-bold tracking-tight text-gray-900">
            New Arrivals
            <button onClick={()=>setCount(count+1)}>Change Count</button>
          </h1>

          <div className="border-1 p-5 h-[300px] overflow-y-scroll">
            <span class="font-medium text-gray-900">Categories</span>

            <ul>
              {categoryData.map((obj, index) => {
                return (
                  <li className="flex gap-2 mt-2">
                    <input
                      onClick={() => getselectedcategory(obj.slug)}
                      id={obj.slug}
                      type="checkbox"
                      className="border-1"
                    />
                    <label htmlFor={obj.slug} class="text-sm text-gray-600">
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
          <div className="border-1 p-5 h-[300px] overflow-y-scroll">
            <span class="font-medium text-gray-900">Price</span>

            <ul>
              <li className="flex gap-2 mt-2">
                <input
                  type="radio"
                  name="price"
                  onClick={() => getPrice("0", "500")}
                  className="border-1"
                />
                <label for="beauty" class="text-sm text-gray-600">
                  Rs.0 - Rs.500
                </label>
              </li>
              <li className="flex gap-2 mt-2">
                <input
                  type="radio"
                  name="price"
                  onClick={() => getPrice("500", "1000")}
                  className="border-1"
                />
                <label for="beauty" class="text-sm text-gray-600">
                  Rs.501 - Rs.1000
                </label>
              </li>
              <li className="flex gap-2 mt-2">
                <input
                  type="radio"
                  name="price"
                  onClick={() => getPrice("1000", "1500")}
                  className="border-1"
                />
                <label for="beauty" class="text-sm text-gray-600">
                  Rs.1001 - Rs.1500
                </label>
              </li>
              <li className="flex gap-2 mt-2">
                <input
                  type="radio"
                  name="price"
                  onClick={() => getPrice("1500", "2500")}
                  className="border-1"
                />
                <label for="beauty" class="text-sm text-gray-600">
                  Rs.1501 - Rs.2500
                </label>
              </li>
              <li className="flex gap-2 mt-2">
                <input
                  type="radio"
                  name="price"
                  onClick={() => getPrice("2500", "")}
                  className="border-1"
                />
                <label for="beauty" class="text-sm text-gray-600">
                  Rs.2501 and more
                </label>
              </li>
            </ul>
          </div>
          <div className="border-1 p-5 h-[300px] overflow-y-scroll">
            <span class="font-medium text-gray-900">Rating</span>

            <ul>
              <li className="flex gap-2 mt-2">
                <input
                  type="radio"
                  name="rating"
                  onClick={() => setrating("1")}
                  className="border-1"
                />
                <label for="beauty" class="text-sm text-gray-600">
                  1 and more
                </label>
              </li>
              <li className="flex gap-2 mt-2">
                <input
                  type="radio"
                  name="rating"
                  onClick={() => setrating("2")}
                  className="border-1"
                />
                <label for="beauty" class="text-sm text-gray-600">
                  2 and more
                </label>
              </li>
              <li className="flex gap-2 mt-2">
                <input
                  type="radio"
                  name="rating"
                  onClick={() => setrating("3")}
                  className="border-1"
                />
                <label for="beauty" class="text-sm text-gray-600">
                  3 and more
                </label>
              </li>
              <li className="flex gap-2 mt-2">
                <input
                  type="radio"
                  name="rating"
                  onClick={() => setrating("4")}
                  className="border-1"
                />
                <label for="beauty" class="text-sm text-gray-600">
                  4 and more
                </label>
              </li>
            </ul>
          </div>
        </aside>
        <div className="border-1">
          <div className="flex justify-end ">
            <select
              name=""
              onChange={(e) => setsort(e.target.value)}
              className="border-1 p-2"
              id=""
            >
              <option value="">Sort By</option>
              <option value="1">Name A to Z</option>
              <option value="2">Name Z to A</option>
              <option value="3">Low to Hight</option>
              <option value="4"> High to Low</option>
            </select>
          </div>

          {loading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-3 gap-5">
              {products.map((v, i) => {
                return (
                  <>
                    <ProductCard data={v} />
                  </>
                );
              })}
            </div>
          )}

          <div className=" py-4">
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ data }) {
  let { image, id, name, price, rating, slug } = data;

  let { cart, setCart } = useContext(cartContext);

  let addtoCart = () => {
    let cartObj = {
      id,
      name,
      image,
      price,
      qty: 1,
    };
    //  console.log(cartObj);
    setCart([...cart, cartObj]);
    toast.success("Product Added To Cart");
  };

  let checkMyProductCart = cart.find((obj) => obj.id == id); //166

  return (
    <figure className="shadow-lg p-2">
      <Link to={`/product/${slug}`}>
        {id}
        <img src={image} alt="" />
        <div className="p-2">
          <h3 className="font-bold text-xl">{name}</h3>
          <p>Rs {price}</p>
          <p> {rating}</p>
        </div>
      </Link>
      {
      checkMyProductCart ? (
        <button className="p-2 bg-red-500">Delete Cart</button>
      ) : (
        <button onClick={addtoCart} className="bg-green-400 p-2 cursor-pointer">
          Add To Cart
        </button>
      )}
    </figure>
  );
}
