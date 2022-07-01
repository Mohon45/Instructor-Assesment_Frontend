import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Edit = ({ setLoading, selectedId, handleClose }) => {
  const [rows, setRows] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/update-billing/${selectedId}`)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setRows(res.data);
        }
      })
      .catch((error) => {
        toast.error("Something went Wrong! Try to latter.");
      });
  }, []);

  const onSubmitHandler = (event) => {
    setLoading(true);
    event.preventDefault();

    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const paidAmount = event.target.paidAmount.value;

    const updateBill = { fullName, email, phone, paidAmount };

    fetch(`http://localhost:5000/api/update-billing/${selectedId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBill),
    })
      .then((res) => {
        setLoading(false);
        toast.success("Bill Updated SuccessFull!");
        handleClose();
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response);
      });
  };
  const { fullName, email, phone, paidAmount } = rows;
  return (
    <div>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label fw-bold">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              placeholder="enter your Name"
              className="form-control"
              id="exampleInputName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="enter your email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label fw-bold">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              value={phone}
              placeholder="enter your phone Number"
              className="form-control"
              id="exampleInputPhone"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label fw-bold">
              Paid Amount
            </label>
            <input
              type="text"
              name="paidAmount"
              value={paidAmount}
              placeholder="enter your Paid Amount"
              className="form-control"
              id="exampleInputPhone"
              required
            />
          </div>
          <div className="mb-3 text-center mt-5">
            <button type="submit" className="btn btn-primary px-5">
              Save Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
