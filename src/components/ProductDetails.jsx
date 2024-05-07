import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
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

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: KSH {product.price}</p>
      <p>Category: {product.category}</p>
      <div>
        <Link
          to={`/edit/${product.id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        >
          Edit
        </Link>
        <button
          className="bg-red-500 hover:bg-red-900 text-white font-bold py-1.5 px-4 ml-6 rounded"
          type="submit"
        >
          Delete
        </button>
      </div>
      {/* relevant details */}
    </div>
  );
}

export default ProductDetails;
