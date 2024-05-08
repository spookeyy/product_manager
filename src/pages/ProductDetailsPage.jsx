import ProductDetails from "../components/ProductDetails";

function ProductDetailsPage() {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center h-screen bg-blue-100">
      <h1 className="mb-10 ml-3 text-3xl items-center font-bold text-center underline">
        Product Details
      </h1>
      <div className="flex flex-col flex-wrap justify-center items-center h-screen bg-blue-100">
        <ProductDetails />
      </div>
    </div>
  );
}

export default ProductDetailsPage;
