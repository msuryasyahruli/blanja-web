import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDetailProduct } from "../../config/redux/hooks/productHook";
import { fetchPatchProduct } from "../../config/redux/actions/productAction";

const FormProduct = ({ id, handleClose, onRefetchKey }) => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  const { data: product, isLoading } = useDetailProduct(id);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setImageUpload(file);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (product) {
      setValue("product_name", product.product_name);
      setValue("product_price", product.product_price);
      setValue("product_stock", product.product_stock);
      setValue("product_variants", product.product_variants);
      setValue("product_description", product.product_description);
    }
  }, [product, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    if (data.product_name !== product.product_name) {
      formData.append("product_name", data.product_name);
    }
    if (data.product_price !== product.product_price) {
      formData.append("product_price", data.product_price);
    }
    if (data.product_stock !== product.product_stock) {
      formData.append("product_stock", data.product_stock);
    }
    if (data.product_variants !== product.product_variants) {
      formData.append("product_variants", data.product_variants);
    }
    if (data.product_description !== product.product_description) {
      formData.append("product_description", data.product_description);
    }
    if (imageUpload !== null) {
      formData.append("product_thumbnail", imageUpload);
    }

    await fetchPatchProduct(formData, id)
      .then(() => {
        handleClose();
        onRefetchKey();
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return isLoading ? (
    <div className="text-center mt-5" role="status">
      <span className="spinner-border"></span>
    </div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group row">
        <div className="col-md-4">
          <img
            src={imagePreview || product.product_thumbnail}
            alt="product"
            className="w-100"
            style={{ aspectRatio: 1 / 1 }}
          />
        </div>
        <div className="col-md-8">
          <label className="text-black-50" htmlFor="image">
            Thumbnail
          </label>
          <input
            type="file"
            id="image"
            className="form-control"
            // {...register("product_thumbnail")}
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label className="text-black-50" htmlFor="product">
          Product
        </label>
        <input
          type="text"
          id="product"
          className="form-control"
          {...register("product_name", {
            required: "This form cannot be empty",
          })}
        />
        {errors.product_name && (
          <small className="text-danger">{errors.product_name.message}</small>
        )}
      </div>
      <div className="row mx-n2">
        <div className="form-group col-lg-6 p-2">
          <label className="text-black-50" htmlFor="price">
            Price
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Rp</span>
            </div>
            <input
              type="text"
              id="price"
              className="form-control"
              {...register("product_price", {
                required: "This form cannot be empty",
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
        <div className="form-group col-lg-6 p-2">
          <label className="text-black-50" htmlFor="stock">
            Stock
          </label>
          <div className="input-group">
            <input
              type="text"
              id="stock"
              className="form-control"
              {...register("product_stock", {
                required: "This form cannot be empty",
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
      </div>
      <div className="form-group">
        <label className="text-black-50" htmlFor="variant">
          Variant
        </label>
        <input
          type="text"
          id="variant"
          className="form-control"
          {...register("product_variants", {
            required: "This form cannot be empty",
          })}
        />
        {errors.product_variants && (
          <small className="text-danger">
            {errors.product_variants.message}
          </small>
        )}
      </div>
      <div className="form-group">
        <label className="text-black-50" htmlFor="description">
          Product description
        </label>
        <textarea
          type="text"
          id="description"
          className="form-control"
          rows="5"
          {...register("product_description", {
            required: "This form cannot be empty",
          })}
        />
        {errors.product_description && (
          <small className="text-danger">
            {errors.product_description.message}
          </small>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary rounded-pill"
        disabled={loading}
      >
        {loading ? (
          <span className="spinner-border spinner-border-sm"></span>
        ) : (
          "Confirm Update"
        )}
      </button>
    </form>
  );
};

export default FormProduct;
