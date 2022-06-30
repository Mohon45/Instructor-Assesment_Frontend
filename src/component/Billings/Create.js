import React from "react";

const Create = (props) => {
  const { toggle, target } = props;
  console.log(toggle, target);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#hi"
      >
        Add New Bill
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="hi"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Creare a New Bill
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputName"
                    className="form-label fw-bold"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    // {...register("email")}
                    placeholder="enter your Name"
                    className="form-control"
                    id="exampleInputName"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fw-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    // {...register("email")}
                    placeholder="enter your email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPhone"
                    className="form-label fw-bold"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    // {...register("password")}
                    placeholder="enter your phone Number"
                    className="form-control"
                    id="exampleInputPhone"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPhone"
                    className="form-label fw-bold"
                  >
                    Paid Amount
                  </label>
                  <input
                    type="text"
                    name="paidAmount"
                    // {...register("password")}
                    placeholder="enter your phone Number"
                    className="form-control"
                    id="exampleInputPhone"
                  />
                </div>
                <div className="mb-3 text-center mt-5">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary ms-4">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
