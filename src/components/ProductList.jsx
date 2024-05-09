import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchQuery } from "../utils/productUtils";
// import { toast } from "react-hot-toast";

function ProductList() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { searchQuery } = useSearchQuery();

  useEffect(() => {
    fetch("https://product-manager-uo3h.onrender.com/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setFilteredProducts(data); // Set initial value for filteredProducts
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
useEffect(() => {
  const filtered = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setFilteredProducts(filtered);
}, [allProducts, searchQuery]);
console.log("filtered products", filteredProducts);
console.log("all products", allProducts);
console.log("search query", searchQuery);

  const filteredProductList = filteredProducts.map((product) => (
    <div key={product.id} className="">
      <div className="container mx-auto ml-3 py-8 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="p-8 rounded-t-lg"
          src={product.image}
          alt="product image"
        />
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <h5 className="text-l tracking-tight text-gray-900 dark:text-white">
            {product.description}
          </h5>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <Link
              to={`/products/${product.id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container mx-auto py-8 ">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          {filteredProductList}
        </div>
      </div>
    </>
  );
}

export default ProductList;
