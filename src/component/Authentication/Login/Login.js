import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loader from "../../../shared/Loader/Loader";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginUser = (data) => {
    setLoading(true);
    axios
      .post("http://localhost:5000/api/login", data, {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Login SuccessFull!");
          setLoading(false);
          navigate("/billing-list");
        }
      })
      .catch((error) => {
        toast.error("Something Wrong! Try to Latter.");
        setLoading(false);
      });
  };

  const onSubmitHandler = (data) => {
    const userPassword = localStorage.getItem("userPassword");
    if (data.password === userPassword) {
      loginUser(data);
    } else {
      toast.error("Password did not match!");
    }
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
            <h2 className="text-center fw-bold">Login</h2>
            <div className="w-75 mx-auto mt-5">
              <form onSubmit={handleSubmit(onSubmitHandler)}>
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
                <Link style={{ textDecoration: "none" }} to="/registration">
                  New User? Please Register
                </Link>
                <div className="mb-3 text-center mt-5">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Login
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

export default Login;
