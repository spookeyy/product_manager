import { useState } from "react";
import ProductForm from "../components/ProductForm";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateProductPage() {
  const nav = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (formData) => {
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product created:", data);
        setSuccess(true);
        nav("/");
        toast.success("Product created successfully!");
      })
      .catch((error) => console.error("Error creating product:", error));
  };

  return (
    <div className="flex flex-col flex-wrap justify-center items-center h-screen">
      <h1 className="text-3xl font-bold underline">Create Product</h1>
      <div>
        {success ? (
          <div>
            {<p>test</p> }
          </div>
        ) : (
          <ProductForm onSubmit={handleSubmit} />
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default CreateProductPage;
