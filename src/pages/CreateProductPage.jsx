import { useState } from "react";
import ProductForm from "../components/ProductForm";

function CreateProductPage() {
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
      })
      .catch((error) => console.error("Error creating product:", error));
  };

  return (
    <div className="flex flex-col flex-wrap justify-center items-center h-screen">
      <h1 className="text-3xl font-bold underline">Create Product</h1>
      <div>
        {success ? (
          <div>Product created successfully!</div>
        ) : (
          <ProductForm onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}

export default CreateProductPage;
