import React, { useState } from "react";
import {
  deleteProfilePicture,
  updateUser,
} from "../../config/redux/actions/userAction";

// assets
import ProfileIcon from "../../assets/image/fotoprofile.png";

const ProfilePicture = ({ userData, userId, onSetShow, onRefetch }) => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setImageFile(file);
    } else {
      setImagePreview(null);
      setImageFile(null);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("user_photo", imageFile);

    await updateUser(formData, userId)
      .then(() => {
        setLoading(false);
        onRefetch(Date.now());
        onSetShow();
        setImagePreview(null);
        setImageFile(null);
      })
      .catch(() => setLoading(false));
  };

  const handleDeletePicture = async () => {
    await deleteProfilePicture(userId);
    onSetShow(false);
    onRefetch(Date.now());
  };

  return (
    <form onSubmit={handleUpdate}>
      <div className="form-group">
        <div className="mx-auto w-50 mb-3">
          <img
            src={imagePreview || userData.user_photo || ProfileIcon}
            alt="userPicture"
            className="w-100 rounded-circle"
            style={{ aspectRatio: 1 / 1, objectFit: "cover" }}
          />
        </div>
        <input
          type="file"
          id="image"
          className="form-control"
          onChange={handleImageChange}
        />
      </div>
      <hr />
      <div className="d-flex mx-n2">
        <button
          className="mx-2 btn btn-light border rounded-pill w-100"
          onClick={handleDeletePicture}
          disabled={loading || !userData.user_photo}
        >
          {loading ? (
            <span className="spinner-border spinner-border-sm"></span>
          ) : (
            "Delete picture"
          )}
        </button>
        <button
          type="submit"
          className="mx-2 btn btn-danger rounded-pill w-100"
          disabled={!imagePreview || loading}
        >
          {loading ? (
            <span className="spinner-border spinner-border-sm"></span>
          ) : (
            "Upload"
          )}
        </button>
      </div>
    </form>
  );
};

export default ProfilePicture;
