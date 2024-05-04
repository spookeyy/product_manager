import ProductList from "../components/ProductList";

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Welcome to the Product Management App
      </h1>
      <ProductList />
    </div>
  );
}

export default HomePage;
