import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]); //state to store products

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

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
                    <a href="#">
                      <img
                        className="p-8 rounded-t-lg"
                        src="data:image/jpeg;base64,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"
                        alt="product image"
                      />
                    </a>
                    <div className="px-5 pb-5">
                      <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                          {product.name}, <br/>
                          {product.description} 
                        </h5>
                      </a>
                      <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-gray-200 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                          4.0
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                          ${product.price}
                        </span>
                        <Link
                          to={`/products/${product.id}`}
                          className="text-white bg-blue-700 hover:bg-blue-800
                          focus:ring-4 focus:outline-none focus:ring-blue-300
                          font-medium rounded-lg text-sm px-5 py-2.5 text-center
                          dark:bg-blue-600 dark:hover:bg-blue-700
                          dark:focus:ring-blue-800"
                        >
                          {/* {product.name} */}
                          View product
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
