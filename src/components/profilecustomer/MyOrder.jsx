import React from "react";

const MyOrder = () => {
  return (
    <>
      <div
        className="tab-pane fade"
        id="v-pills-Order"
        role="tabpanel"
        aria-labelledby="v-pills-messages-tab"
        style={{ padding: "50px 0" }}
      >
        <form>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 5,
            }}
          >
            <section>
              <div className="p-3">
                <h4>My order</h4>
                <hr />
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#home"
                    >
                      All items
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu1">
                      Not yet paid
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu2">
                      Packed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu3">
                      Sent
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu4">
                      Completed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu5">
                      Order cancel
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane container active" id="home">
                    All items
                  </div>
                  <div className="tab-pane container fade" id="menu1">
                    Not yet paid
                  </div>
                  <div className="tab-pane container fade" id="menu2">
                    Packed
                  </div>
                  <div className="tab-pane container fade" id="menu3">
                    Sent
                  </div>
                  <div className="tab-pane container fade" id="menu4">
                    Completed
                  </div>
                  <div className="tab-pane container fade" id="menu5">
                    Order cancel
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyOrder;
