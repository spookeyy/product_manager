import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

ProductList.propTypes = {
  search: PropTypes.string,
};

export default function ProductList({search}) {
  const [products, setProducts] = useState([]); //state to store products
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

let productList
  //filter products
if (products) {
  const filteredProducts = products.filter((product) => {
    return (
      product.category?.toLowerCase().includes(search?.toLowerCase()) &&
      product.name.toLowerCase().includes(search?.toLowerCase())
    );
  });

  productList = filteredProducts.map((product) => (
    <div key={product.id} className="">
      <div className="container mx-auto ml-3 py-8 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="p-8 rounded-t-lg"
          src={product.image}
          alt="product image"
        />
        <div className="px-5 pb-5">
          <a href="">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
            <h5 className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.description}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <Link
              to={`/products/${product.id}`}
              className="text-white bg-blue-700 hover:bg-blue-800
                          focus:ring-4 focus:outline-none focus:ring-blue-300
                          font-medium rounded-lg text-sm px-4 py-2.5 text-center
                          dark:bg-blue-600 dark:hover:bg-blue-700
                          dark:focus:ring-blue-800"
            >
              View product
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));
}
console.log(productList);
  return (
    <>
      <div className="container mx-auto py-8 ">
        {/* <h2 className="text-2xl font-bold mb-4">Product List</h2> */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
            {/* optional chaining  */}
            {products?.map((product) => {
              return (
                <div key={product.id} className="">
                  <div className="container mx-auto ml-3 py-8 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <img
                        className="p-8 rounded-t-lg"
                        src={product.image}
                        alt="product image"
                      />
                    <div className="px-5 pb-5">
                      <a href="">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                          {product.name}
                        </h5>
                        <h5 className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">
                          {product.description}
                        </h5>
                      </a>
                      <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        </div>
                        {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                          4.0
                        </span> */}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                          ${product.price}
                        </span>
                        <Link
                          to={`/products/${product.id}`}
                          className="text-white bg-blue-700 hover:bg-blue-800
                          focus:ring-4 focus:outline-none focus:ring-blue-300
                          font-medium rounded-lg text-sm px-3 py-2.5 text-center
                          dark:bg-blue-600 dark:hover:bg-blue-700
                          dark:focus:ring-blue-800"
                        >
                          {/* {product.name} */}
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {productList}
        </div>
      </div>
    </>
  );
}


//  ProductList;
