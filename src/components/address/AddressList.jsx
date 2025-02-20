import React, { useState } from "react";
import LgModal from "../modal/LgModal";
import FormAddress from "../form/FormAddress";
import { useAddress } from "../../config/redux/hooks/addressHook";
import { useUser } from "../../config/redux/hooks/userHook";
import SmModal from "../modal/SmModal";
import { deleteAddress } from "../../config/redux/actions/addressAction";

const AddressList = () => {
  const [payload, setPayload] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [refetchKey, setRefetchKey] = useState(Date.now());
  const [loading, setLoading] = useState(false);

  const { data: userData, id: userId } = useUser();
  const { data: address, isLoading } = useAddress(userId, refetchKey);

  const handleUpdateShow = () => {
    setPayload({});
    setShowUpdate(false);
  };

  const handleDelete = async () => {
    setLoading(true);
    await deleteAddress(selectedId).then(() => {
      setRefetchKey(Date.now());
      setShowDelete(false);
      setLoading(false);
    });
  };

  return isLoading ? (
    <div className="text-center mt-5" role="status">
      <span className="spinner-border"></span>
    </div>
  ) : (
    <>
      <button
        className="btn text-black-50 w-100 rounded border py-4"
        onClick={() => setShowAdd(true)}
      >
        Add new address
      </button>
      {address.map((data, index) => (
        <section
          key={index}
          className={`shadow-sm rounded border mt-3 p-2 p-sm-3 ${
            data.is_default && "border-danger"
          }`}
        >
          <h5>{userData.username}</h5>
          <p>{`${data.address_name}, ${data.city}, ${data.postal_code}, ${data.address_type}`}</p>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-link text-danger p-0"
              onClick={() => {
                setShowUpdate(true);
                setPayload(data);
              }}
            >
              Change address
            </button>
            <button
              className="btn btn-danger rounded-pill py-1"
              onClick={() => {
                setShowDelete(true);
                setSelectedId(data.address_id);
              }}
            >
              Delete
            </button>
          </div>
        </section>
      ))}

      <LgModal
        title="Add new address"
        onShow={showAdd}
        handleClose={() => setShowAdd(false)}
      >
        <FormAddress
          handleClose={() => setShowAdd(false)}
          addressData={userId}
          type="add"
          onRefetchKey={() => setRefetchKey(Date.now())}
        />
      </LgModal>
      <LgModal
        title="Update address"
        onShow={showUpdate}
        handleClose={handleUpdateShow}
      >
        <FormAddress
          handleClose={handleUpdateShow}
          addressData={payload}
          type="update"
          onRefetchKey={() => setRefetchKey(Date.now())}
        />
      </LgModal>
      <SmModal
        title="Delete address"
        handleClose={() => setShowDelete(false)}
        onShow={showDelete}
      >
        <h5>Are you sure you want to delete this address?</h5>
        <hr />
        <div className="d-flex justify-content-end">
          <button
            className="btn border rounded-pill mr-2"
            onClick={() => setShowDelete(false)}
          >
            Cancel
          </button>
          <button
            className="btn btn-danger rounded-pill"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              "Confirm Delete"
            )}
          </button>
        </div>
      </SmModal>
    </>
  );
};

export default AddressList;
