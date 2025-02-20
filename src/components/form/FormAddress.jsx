import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  postAddress,
  updateAddress,
} from "../../config/redux/actions/addressAction";

const FormAddress = ({ handleClose, addressData, type, onRefetchKey }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (addressData) {
      setValue("address_name", addressData.address_name);
      setValue("postal_code", addressData.postal_code);
      setValue("city", addressData.city);
      setValue("address_type", addressData.address_type);
      setValue("is_default", addressData.is_default);
    }
  }, [addressData, setValue]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();
      if (data.address_name !== addressData?.address_name) {
        formData.append("address_name", data.address_name);
      }
      if (data.postal_code !== addressData?.postal_code) {
        formData.append("postal_code", data.postal_code);
      }
      if (data.city !== addressData?.city) {
        formData.append("city", data.city);
      }
      if (data.address_type !== addressData?.address_type) {
        formData.append("address_type", data.address_type);
      }
      if (data.is_default !== addressData?.is_default) {
        formData.append("is_default", data.is_default);
      }

      if (type === "update") {
        await updateAddress(formData, addressData?.address_id);
      } else if (type === "add") {
        await postAddress(formData, addressData);
      }

      onRefetchKey();
      handleClose();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="text-black-50" htmlFor="addressType">
            Save address as (ex : home address, office address)
          </label>
          <input
            type="text"
            id="addressType"
            className="form-control"
            {...register("address_type", {
              required: "This form cannot be empty",
            })}
          />
          {errors.address_type && (
            <small className="text-danger">{errors.address_type.message}</small>
          )}
        </div>
        <div className="row mx-n2">
          <div className="form-group col-lg-6 px-2">
            <label className="text-black-50" htmlFor="recipientName">
              Recipient’s name
            </label>
            <input
              type="text"
              id="recipientName"
              className="form-control"
              {...register("recipient_name")}
            />
          </div>
          <div className="form-group col-lg-6 px-2">
            <label className="text-black-50" htmlFor="recipientNumber">
              Recipient's telephone number
            </label>
            <input
              type="text"
              id="recipientNumber"
              className="form-control"
              {...register("recipient_number")}
            />
          </div>
          <div className="form-group col-lg-6 px-2">
            <label className="text-black-50" htmlFor="address">
              Address
            </label>

            <input
              type="text"
              id="address"
              className="form-control"
              {...register("address_name", {
                required: "This form cannot be empty",
              })}
            />
            {errors.address_name && (
              <small className="text-danger">
                {errors.address_name.message}
              </small>
            )}
          </div>
          <div className="form-group col-lg-6 px-2">
            <label className="text-black-50" htmlFor="postalCode">
              Postal code
            </label>
            <input
              type="text"
              id="postalCode"
              className="form-control"
              {...register("postal_code", {
                required: "This form cannot be empty",
              })}
            />
            {errors.postal_code && (
              <small className="text-danger">
                {errors.postal_code.message}
              </small>
            )}
          </div>
          <div className="form-group col-lg-6 px-2">
            <label className="text-black-50" htmlFor="city">
              City or Subdistrict
            </label>

            <input
              type="text"
              id="city"
              className="form-control"
              {...register("city", { required: "This form cannot be empty" })}
            />
            {errors.city && (
              <small className="text-danger">{errors.city.message}</small>
            )}
          </div>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="isPrimary"
            {...register("is_default")}
          />
          <label className="form-check-label text-black-50" htmlFor="isPrimary">
            Make it the primary address
          </label>
        </div>
        <div className="d-flex justify-content-end col-lg-6 ml-auto">
          <button
            type="button"
            className="btn border rounded-pill w-50"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-danger rounded-pill w-50 ml-3"
            disabled={loading}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormAddress;
