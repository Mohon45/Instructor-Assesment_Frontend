import axios from "axios";
import { Button } from "bootstrap";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Loader from "../../shared/Loader/Loader";

const Create = (props) => {
  //   const { showValue } = props;

  const showValue = props.show;
  console.log(showValue);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  console.log(show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = () => setShow(false);
  //   handleShow = (showvalue) => setShow(showvalue);
  const onSubmitHandler = (data) => {
    setLoading(true);
    axios
      .post("http://localhost:5000/api/add-billing", data, {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        console.log(res.status);
      })
      .catch((error) => {});
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Modal
            show={showValue}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Create a New Bill</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputName"
                    className="form-label fw-bold"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    {...register("fullName")}
                    placeholder="enter your Name"
                    className="form-control"
                    id="exampleInputName"
                    required
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
                    {...register("email")}
                    placeholder="enter your email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
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
                    {...register("phone")}
                    placeholder="enter your phone Number"
                    className="form-control"
                    id="exampleInputPhone"
                    required
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
                    {...register("paidAmount")}
                    placeholder="enter your Paid Amount"
                    className="form-control"
                    id="exampleInputPhone"
                    required
                  />
                </div>
                <div className="mb-3 text-center mt-5">
                  <Button variant="primary" onClick={handleClose}>
                    Close
                  </Button>
                  <button type="submit" className="btn btn-primary ms-4">
                    Create
                  </button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Create;
