import React from "react";
import { useForm } from "react-hook-form";
import { createProduct } from "../../api/product";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const OnSubmitting = async (formData) => {
    try {
      const response = await createProduct(formData);
      console.log(response.data);

      reset()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Add New Product
        </h1>
        <p className="text-gray-500 text-sm">
          Fill in the details to create a new product
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-xl shadow p-6">
        <form
          noValidate
          onSubmit={handleSubmit(OnSubmitting)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Title
            </label>
            <input
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product title"
              {...register("title", {
                required: "Product title is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Price
            </label>
            <input
              type="number"
              step="0.01"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Must be greater than 0" },
              })}
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* Description (Full Width) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              rows={4}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Product description"
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "At least 10 characters",
                },
              })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Category
            </label>
            <select
              defaultValue=""
              className="w-full border rounded-lg p-2 bg-white focus:ring-2 focus:ring-blue-500"
              {...register("category", {
                required: "Category is required",
              })}
            >
              <option value="" disabled>
                -- Select category --
              </option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Books</option>
              <option>Home</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Image URL
            </label>
            <input
              type="url"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
              {...register("image", {
                required: "Image URL is required",
              })}
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="md:col-span-2 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => reset()}
              className="px-6 py-2 border rounded-lg hover:bg-gray-100"
            >
              Reset
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-60"
            >
              {isSubmitting ? "Saving..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
