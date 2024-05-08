import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function ProductDetails() {
  const nav = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const deleteProduct = () => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        nav("/");
        console.log(data);
      })

      .catch((error) => console.error("Error deleting product:", error));

    // window.location.reload();
  };

  return (
    <div>
      {product && (
        <div key={product.id} className="">
          <div
            key={product.id}
            className="container mx-auto ml-3 py-8 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="">
              <img
                className="p-8 rounded-t-lg"
                src={product.image}
                alt="product image"
              />
            </a>
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
                {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                          4.0
                        </span> */}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
              </div>
            </div>
            <div>
              <Link
                to={`/edit/${product.id}`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
              >
                Edit
              </Link>
              <button
                className="bg-red-500 hover:bg-red-800 text-white font-bold py-1.5 px-4 ml-6 rounded"
                type="submit"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {/* relevant details */}
    </div>
  );
}

export default ProductDetails;
