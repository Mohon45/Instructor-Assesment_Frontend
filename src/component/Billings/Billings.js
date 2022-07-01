import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import ConfirmationAlert from "../../shared/ConfirmationAlert/ConfirmationAlert";
import Loader from "../../shared/Loader/Loader";
import Pagination from "../../shared/Pagination/Pagination";
import Create from "./Create";
import Edit from "./Edit";

const Billings = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [rows, setRows] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [query, setQuery] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/billing-list")
      .then((res) => {
        if (res.status === 200) {
          //   setRows(res.data);
          setTotalRows(res.data.length);
          setLoading(false);

          let indexOfLastBill = currentPage * pageSize;
          let indexOfFirstBill = indexOfLastBill - pageSize;
          const currentBill = res.data.slice(indexOfFirstBill, indexOfLastBill);
          setRows(currentBill);
        }
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
      });
  }, []);

  const onSearchHandler = (event) => {
    setQuery(event.target.value.toLowerCase());

    const filterData = rows.filter(
      (data) =>
        data.fullName.toLowerCase().includes(query) ||
        data.email.toLowerCase().includes(query) ||
        data.phone.toLowerCase().includes(query)
    );

    setRows(filterData);
  };

  let sum = 0;
  rows.forEach((row) => {
    sum += parseInt(row.paidAmount);
  });

  const onEdit = (id) => {
    setSelectedId(id);
    setShow(true);
  };

  const onDeleteHandler = (id) => {
    ConfirmationAlert(() => handleDelete(id));
  };

  const handleDelete = (id) => {
    setLoading(true);
    fetch(`http://localhost:5000/api/delete-billing/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          const updateRows = [...rows];

          setRows(updateRows.filter((x) => x._id !== id));
          setLoading(false);
          toast.success("Bill Delete successfully Done!");
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Something Went Wrong! Try to latter.");
      });
  };

  const clickedPagedHandler = (event) => {
    setCurrentPage(event.selected + 1);
  };

  //   let indexOfLastBill = currentPage * pageSize;
  //   let indexOfFirstBill = indexOfLastBill - pageSize;
  //   const currentBill = rows.slice(indexOfFirstBill, indexOfLastBill);

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
                Paid Total: {sum}
              </p>
            </div>
          </div>
        </nav>
      </div>

      <div className="container mt-3">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <div className="row mx-0">
              <div className="card col-md-12 sort-header">
                <div className="d-flex justify-content-between">
                  <div className="d-flex w-50 justify-content-around align-items-center py-2">
                    <h3>Billings</h3>
                    <form className="w-50" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        onChange={(event) => onSearchHandler(event)}
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                  <div className="py-2">
                    <Button
                      onClick={handleShow}
                      className="btn btn-primary px-5"
                      type="submit"
                    >
                      Add New Bill
                    </Button>
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
                  {rows.map((item, index) => (
                    <tr key={index}>
                      <th className="text-center">{item._id}</th>
                      <td className="text-center">{item.fullName}</td>
                      <td className="text-center">{item.email}</td>
                      <td className="text-center">{item.phone}</td>
                      <td className="text-center">{item.paidAmount}</td>
                      <td className="text-center">
                        <span
                          className="hover-effect"
                          onClick={() => onEdit(item._id)}
                        >
                          Edit
                        </span>{" "}
                        &nbsp; | &nbsp;{" "}
                        <span
                          className="hover-effect"
                          onClick={() => onDeleteHandler(item._id)}
                        >
                          Delete
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mx-auto">
                <Pagination
                  clickedPaged={clickedPagedHandler}
                  pageCount={Math.ceil(totalRows / pageSize)}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        )}

        {/* modal */}
        <div>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedId ? <>Edit</> : <>Create a New Bill</>}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedId ? (
                <Edit
                  setLoading={setLoading}
                  selectedId={selectedId}
                  handleClose={handleClose}
                />
              ) : (
                <Create setLoading={setLoading} handleClose={handleClose} />
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Billings;
