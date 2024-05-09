import { useState, useEffect } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { toast } from "react-hot-toast";

function EditProductPage() {
  const nav = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(`https://product-manager-uo3h.onrender.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleSubmit = (formData) => {
    fetch(`https://product-manager-uo3h.onrender.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product updated:", data);
        nav("/");
        // console.log(toast())
        setSuccess(true);
        toast.success("Product updated successfully!");
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col flex-wrap justify-center items-center h-screen bg-blue-100">
      <h1 className="mb-10 ml-3 text-3xl font-bold underline">Edit Product</h1>
      <div className="flex flex-col flex-wrap justify-center ml-3 h-screen bg-blue-100">
        {success ? (
          <p>Product updated successfully!</p>
        ) : (
          <ProductForm
            product={product}
            onSubmit={handleSubmit}
            buttonText="Update Product"
          />
        )}
      </div>

      <div className="bg-gray-100 text-lg container mx-auto min-h-[90vh]">
        <Outlet />
      </div>
    </div>
  );
}

export default EditProductPage;
