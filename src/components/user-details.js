import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

import {getUserDetails } from "../actions/index";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const UserDetails = ({ match }) => {
  const details = useSelector((state) => state.users.details);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const { push } = useHistory();

  useEffect(() => {
    dispatch(getUserDetails(match.params.id));
  }, []);

  if (details) {
    return (
      <>
        <Modal show={isOpen}>
          <Modal.Header>Deleting User</Modal.Header>
          <Modal.Body>
            <h1>Do You Want To Delete User {details.name}?</h1>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-primary"
              onClick={() => push(`/delete/${details._id}`)}
            >
              Delete
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
        <div
          className="container
"
        >
          <div className="row">

       
              <img className="col-sm-12 col-md-5 " src={details.img} alt={details.img} />
          
          <div className="col-sm-12 col-md-6 offset-1">
            <h1>Name: {details.name}</h1>
            <h1>Age: {details.age}</h1>
            <h1>Email: {details.email}</h1>
            <button
              className="btn btn-danger mt-5 "
              onClick={() => setIsOpen(true)}
              >
              Delete
            </button>
            <button
              className="btn btn-danger mx-3 mt-5"
              onClick={() => push(`/update/${details._id}`)}
              >
              Update
            </button>
          </div>
        </div>
              </div>
      </>
    );
  }
  return <>No Data.....</>;
};

export default UserDetails;
