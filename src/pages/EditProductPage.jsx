import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";

function EditProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleSubmit = (formData) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product updated:", data);
        setSuccess(true);
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Product</h1>
      {success ? (
        <div>Product updated successfully!</div>
      ) : (
        <ProductForm product={product} onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default EditProductPage;
