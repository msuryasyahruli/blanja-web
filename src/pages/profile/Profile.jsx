import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { updateUser } from "../../config/redux/actions/userAction";
import { useUser } from "../../config/redux/hooks/userHook";

// assets
import ProfilePic from "../../assets/image/fotoprofile110.png";

const Profile = () => {
  const [loading, setLoading] = useState(false);

  const { data: userData, id: userId } = useUser();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userData) {
      setValue("username", userData.username);
      setValue("user_email", userData.user_email);
      setValue("phone_number", userData.phone_number);
    }
  }, [userData, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    if (data.username !== userData.username) {
      formData.append("username", data.username);
    }
    // if (data.user_email !== userData.user_email) {
    //   formData.append("user_email", data.user_email);
    // }
    if (data.phone_number !== userData.phone_number) {
      formData.append("phone_number", data.phone_number);
    }
    // if (data.user_photo[0]) {
    //   formData.append("user_photo", data.user_photo);
    // }

    await updateUser(formData, userId)
      .then(() => {
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <>
      <div className="p-3 mt-md-3 border shadow-sm rounded bg-white h-100">
        <h4>My profile</h4>
        <p>Manage your profile information</p>
        <hr />
        <section className="row flex-lg-row-reverse">
          <div className="col-lg-4">
            <div className="d-flex flex-column align-items-center my-3">
              <img
                src={ProfilePic}
                alt="profile"
                className="rounded-circle mb-2"
                style={{
                  height: 110,
                  width: 110,
                  objectFit: "cover",
                }}
              />
              <button className="btn border rounded-pill px-4">
                Select image
              </button>
            </div>
          </div>
          <div className="col-lg-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label text-black-50" htmlFor="username">
                  Name
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  {...register("username", {
                    required: "Name cannot be empty",
                  })}
                />
                {errors.username && (
                  <small className="text-danger">
                    {errors.username.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label text-black-50" htmlFor="email">
                  Email
                </label>
                <input
                  readOnly
                  type="email"
                  id="email"
                  className="form-control"
                  {...register("user_email", {
                    required: "Email cannot be empty",
                  })}
                />
                {errors.user_email && (
                  <small className="text-danger">
                    {errors.user_email.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label text-black-50" htmlFor="phone">
                  Phone number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  {...register("phone_number")}
                />
              </div>
              {userData.role === "seller" ? (
                <div className="mb-3">
                  <label
                    className="form-label text-black-50"
                    htmlFor="description"
                  >
                    Store description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="5"
                    {...register("store_description")}
                  />
                </div>
              ) : (
                <>
                  <div className="mb-3">
                    <label className="form-label text-black-50">Gender</label>
                    <div>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        className="mr-1"
                        defaultChecked
                      />
                      <label htmlFor="male">Laki-laki</label>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        className="ml-3 mr-1"
                      />
                      <label htmlFor="female">Perempuan</label>
                    </div>
                  </div>
                  <div className="mb-3 ">
                    <label className="form-label text-black-50">
                      Date of birth
                    </label>
                    <div className="d-flex flex-wrap">
                      <select
                        className="form-select btn border mr-2"
                        defaultValue="1"
                      >
                        {Array.from({ length: 31 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                      <select
                        className="form-select btn border mr-2"
                        defaultValue="Januari"
                      >
                        {[
                          "Januari",
                          "Februari",
                          "Maret",
                          "April",
                          "Mei",
                          "Juni",
                          "Juli",
                          "Agustus",
                          "September",
                          "Oktober",
                          "November",
                          "Desember",
                        ].map((month) => (
                          <option key={month} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                      <select
                        className="form-select btn border"
                        defaultValue="1990"
                      >
                        {Array.from({ length: 50 }, (_, i) => (
                          <option key={1990 + i} value={1990 + i}>
                            {1990 + i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}
              <button
                type="submit"
                className="btn btn-danger rounded-pill px-4"
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : (
                  "Save"
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
