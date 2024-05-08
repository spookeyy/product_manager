import ProductList from "../components/ProductList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {
  return (
    <div className="bg-gray-200">
      {/* <h1 className="text-3xl font-bold">
        Welcome to the Product Management App
      </h1> */}
      <div className="relative bg-cover bg-center h-screen bg-no-repeat[url('https://thumbs.dreamstime.com/z/product-management-businessman-working-holographic-interface-motion-high-quality-hologram-product-management-businessman-99397209.jpg?w=992')]">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            We invest in the world’s potential
          </h1>
          <p className="text-lg">
            Here at Gina we focus on markets where every product can unlock
            long-term value and drive economic growth.
          </p>
        </div>
      </div>
      {/* {<ProductList /> ? <ProductList /> : <p>Server Loading...</p>} */}
      <ProductList />

      <div className="bg-gray-100 text-lg container mx-auto min-h-[90vh]">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
}

export default HomePage;
