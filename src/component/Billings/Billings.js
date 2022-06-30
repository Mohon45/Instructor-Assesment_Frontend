import React from "react";
import Pagination from "../../shared/Pagination/Pagination";
import Create from "./Create";

const Billings = () => {
  const onToggleHandler = () => {
    <Create />;
  };
  return (
    <div>
      <div>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <div className="container d-flex justify-content-between align-items-center">
              <a
                className="navbar-brand fw-bold"
                href="#"
                style={{ fontSize: "2rem" }}
              >
                Instructor Recruitment
              </a>
              <p className="pt-3" style={{ fontSize: "2rem" }}>
                Paid Total: 0
              </p>
            </div>
          </div>
        </nav>
      </div>

      <div className="container mt-3">
        <div className="row mx-0">
          <div className="card col-md-12 sort-header">
            <div className="d-flex justify-content-between">
              <div className="d-flex w-50 justify-content-around align-items-center py-2">
                <h3>Billings</h3>
                <form className="w-50" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="py-2">
                {/* <Create /> */}
                <button
                  onClick={onToggleHandler}
                  className="btn btn-primary px-5"
                  type="submit"
                >
                  Add New Bill
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-3">
          <table className="table table-bordered table-hover mt-4">
            <thead>
              <tr>
                <th className="text-center">Billing ID</th>
                <th className="text-center">Full Name</th>
                <th className="text-center">Email</th>
                <th className="text-center">Phone</th>
                <th className="text-center">Paid Amount</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-center">1</th>
                <td className="text-center">Mark</td>
                <td className="text-center">Otto</td>
                <td className="text-center">Otto</td>
                <td className="text-center">Otto</td>
                <td className="text-center">@mdo</td>
              </tr>
              <tr>
                <th className="text-center">1</th>
                <td className="text-center">Mark</td>
                <td className="text-center">Mark</td>
                <td className="text-center">Mark</td>
                <td className="text-center">Otto</td>
                <td className="text-center">@mdo</td>
              </tr>
              <tr>
                <th className="text-center">1</th>
                <td className="text-center">Mark</td>
                <td className="text-center">Mark</td>
                <td className="text-center">Mark</td>
                <td className="text-center">Otto</td>
                <td className="text-center">@mdo</td>
              </tr>
              <div>
                <Pagination />
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billings;
