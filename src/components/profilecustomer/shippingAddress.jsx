import ModalCreateAddress from "../address/ModalCreateAddress";
import Addresss from "../modalProfile/addresss";

const ShippingAddress = () => {
  return (
    <>
      <div
        className="tab-pane fade"
        id="v-pills-Product"
        role="tabpanel"
        aria-labelledby="v-pills-profile-tab"
        style={{ padding: "50px 0" }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          <section>
            <div className="p-3">
              <h4>Choose another address</h4>
              <p>Manage your shipping address</p>
              <hr />
              <div>
                <ModalCreateAddress />
                <Addresss />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ShippingAddress;
