import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import Loader from "../../../shared/Loader/Loader";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerUser = (data) => {
    setLoading(true);
    axios
      .post("http://localhost:5000/api/registration", data, {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          toast.success("Registration Successfull!");
          setLoading(false);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("Something Went Wrong! Try to latter.");
        setLoading(false);
      });
  };

  const onSubmitHandler = (data) => {
    console.log(data);
    localStorage.setItem("userPassword", data.password);
    registerUser(data);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="card sign-in-box mx-auto mt-5"
          style={{ width: "35rem", height: "80vh" }}
        >
          <div className="card-body">
            <h2 className="text-center fw-bold">Registration</h2>
            <div className="w-75 mx-auto mt-5">
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputName"
                    className="form-label fw-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name")}
                    placeholder="enter your name"
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
                    {...register("email")}
                    placeholder="enter your email id"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label fw-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password")}
                    placeholder="enter your password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <Link style={{ textDecoration: "none" }} to="/">
                  Already Registered? Please Login
                </Link>
                <div className="mb-3 text-center mt-5">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
