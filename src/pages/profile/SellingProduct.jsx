import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCategories } from "../../config/redux/hooks/categoryHook";
import { useUser } from "../../config/redux/hooks/userHook";
import { postProduct } from "../../config/redux/actions/productAction";

const SellingProduct = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id: userId } = useUser();
  const { data: category } = useCategories();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    } else {
      setImagePreview(null);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handlePost = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("product_name", data.product_name);
    formData.append("product_price", data.product_price);
    formData.append("product_stock", data.product_stock);
    formData.append("product_variants", data.product_variants);
    formData.append("product_description", data.product_description);
    formData.append("product_photo", data.product_photo[0]);
    formData.append("category_id", data.category_id);
    formData.append("user_id", userId);
    await postProduct(formData)
      .then(() => {
        reset();
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <>
      <form onSubmit={handleSubmit(handlePost)}>
        <section className="p-3 mt-md-3 border shadow-sm rounded bg-white">
          <h4>Invetory</h4>
          <hr />
          <div className="form-group col-lg-6 p-0">
            <label className="form-label text-black-50" htmlFor="productName">
              Name of goods
            </label>
            <input
              type="text"
              id="productName"
              className="form-control"
              {...register("product_name", {
                required: "Name cannot be empty",
              })}
            />
            {errors.product_name && (
              <small className="text-danger">
                {errors.product_name.message}
              </small>
            )}
          </div>
        </section>

        <section className="p-3 mt-3 border shadow-sm rounded bg-white">
          <h4>Item details</h4>
          <hr />
          <div className="form-group col-lg-6 p-0">
            <label className="form-label text-black-50" htmlFor="price">
              Unit price
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Rp</span>
              </div>
              <input
                type="number"
                id="price"
                className="form-control"
                {...register("product_price", {
                  required: "Price cannot be empty",
                })}
              />
              <div className="input-group-append">
                <span className="input-group-text">.00</span>
              </div>
            </div>
            {errors.product_price && (
              <small className="text-danger">
                {errors.product_price.message}
              </small>
            )}
          </div>

          <div className="form-group col-lg-6 p-0">
            <label className="form-label text-black-50" htmlFor="stock">
              Stock
            </label>
            <div className="input-group">
              <input
                type="number"
                id="stock"
                className="form-control"
                {...register("product_stock", {
                  required: "Stock cannot be empty",
                })}
              />
              <div className="input-group-append">
                <span className="input-group-text">pcs</span>
              </div>
            </div>
            {errors.product_stock && (
              <small className="text-danger">
                {errors.product_stock.message}
              </small>
            )}
          </div>

          <div className="form-group col-lg-6 p-0">
            <label className="form-label text-black-50" htmlFor="variant">
              Variants
            </label>
            <div className="input-group">
              <input
                type="text"
                id="variant"
                className="form-control"
                {...register("product_variants", {
                  required: "Variant cannot be empty",
                })}
              />
            </div>
            {errors.product_variants && (
              <small className="text-danger">
                {errors.product_variants.message}
              </small>
            )}
          </div>

          <div className="form-group col-lg-6 p-0">
            <label className="form-label text-black-50" htmlFor="category">
              Select category
            </label>
            <select
              className="form-control"
              id="category"
              {...register("category_id", {
                required: "Category cannot be empty",
              })}
            >
              <option value="">Choose</option>
              {category.map((data, index) => (
                <option key={index} value={data.category_id}>
                  {data.category_name}
                </option>
              ))}
            </select>
            {errors.category_id && (
              <small className="text-danger">
                {errors.category_id.message}
              </small>
            )}
          </div>

          <div className="form-group">
            <label className="form-label text-black-50">Condition</label>
            <div className="d-flex">
              <div className="form-check mr-3">
                <input
                  type="radio"
                  id="new"
                  name="condition"
                  className="form-check-input mr-1"
                  disabled
                />
                <label className="form-check-label" htmlFor="new">
                  New
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="second"
                  name="condition"
                  className="form-check-input mr-1"
                  disabled
                />
                <label className="form-check-label" htmlFor="second">
                  Second
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className="p-3 mt-3 border shadow-sm rounded bg-white">
          <h4>Photo of goods</h4>
          <hr />
          <div className="form-group col-lg-6 p-0">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="product"
                className="w-100"
                style={{ aspectRatio: 1 / 1 }}
              />
            )}
            <input
              type="file"
              id="image"
              className="form-control"
              {...register("product_photo", {
                required: "Photo cannot be empty",
                onChange: handleImageChange,
              })}
            />
            {errors.product_photo && (
              <small className="text-danger">
                {errors.product_photo.message}
              </small>
            )}
          </div>
        </section>

        <section className="p-3 mt-3 border shadow-sm rounded bg-white">
          <h4>Description</h4>
          <hr />
          <div className="form-group">
            <textarea
              type="text"
              id="description"
              className="form-control"
              rows="10"
              {...register("product_description", {
                required: "Description cannot be empty",
              })}
            />
            {errors.product_description && (
              <small className="text-danger">
                {errors.product_description.message}
              </small>
            )}
          </div>
        </section>

        <section className="mt-3">
          <button
            type="submit"
            className="btn btn-danger rounded-pill"
            disabled={loading}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              "Submit"
            )}
          </button>
        </section>
      </form>
    </>
  );
};

export default SellingProduct;
