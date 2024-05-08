import { useState, useEffect } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditProductPage() {
  const nav = useNavigate();
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
        console.log("Product updated:", data)
        nav("/")
        // console.log(toast())
        setSuccess(true)
        toast.success("Product updated successfully!");
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold">Edit Product</h1>
      {success ? (
        <div>Product updated successfully!</div>
      ) : (
        <ProductForm
          product={product}
          onSubmit={handleSubmit}
          buttonText="Update Product"
        />
      )}

      <div className="bg-gray-100 text-lg container mx-auto min-h-[90vh]">
        {/* <ToastContainer /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default EditProductPage;
