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
                <div
                  className="justify-content-center d-flex align-items-center"
                  style={{
                    border: "1px solid",
                    borderRadius: 10,
                    height: "86px",
                    color: "#9B9B9B",
                    margin: "20px",
                  }}
                >
                  Add new address
                </div>
                <div
                  style={{
                    border: "1px solid",
                    borderRadius: 10,
                    padding: "20px",
                    color: "#DB3022",
                    margin: "20px",
                  }}
                >
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Name
                  </p>
                  <p
                    style={{
                      color: "#000",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                    Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok
                    c 16] Sokaraja, Kab. Banyumas, 53181
                  </p>
                  <h6 className="btn" data-toggle="modal" data-target="#myModal">
                    Change address
                  </h6>
                  <div
                    className="modal fade"
                    id="myModal"
                    style={{ color: "black" }}
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                          <h4 className="modal-title">Modal Heading</h4>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                          >
                            ×
                          </button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">Modal body..</div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ShippingAddress;
