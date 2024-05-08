import { useState } from "react";
//ESLint required prop-validations
import PropTypes from "prop-types";

//defining prop-types outside component function.
//expected shape of the product prop, which is an object
ProductForm.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    buttonText: PropTypes.string,
    image: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired, //onSubmit prop is a required function
  buttonText: PropTypes.string,  //not to be included as a property
  search: PropTypes.string,
};

function ProductForm({ product, onSubmit, buttonText }) {
  const [formData, setFormData] = useState({
    name: product ? product.name : "",
    image: product ? product.image : "",
    description: product ? product.description : "",
    price: product ? product.price : "",
    category: product ? product.category : "",
    // any more relevant fields to be created
  });

  const handleChange = (event) => {
    setFormData({
      //spread operator
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="url"
            id="image"
            name="image"
            placeholder="image link address"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="desc"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        {/* Add more form fields */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
