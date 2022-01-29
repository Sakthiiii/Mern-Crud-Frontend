import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteUser } from "../actions";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";

const DeleteUser = ({ match }) => {
  const isDeleted = useSelector((state) => state.users.deleted);

  const { push } = useHistory();

  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const goBack = () => {
    push("/");
  };
  useEffect(() => {
    dispatch(deleteUser(match.params.id));
    if (isDeleted) {
      setMessage("Deleted");
    } else {
      setMessage("Not Deleted");
    }
  }, []);
  return (
    <>
      <Modal show={true}>
        <Modal.Header>Deleting User</Modal.Header>
        <Modal.Body>
          <h1>{message}</h1>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={goBack}>
            Done
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteUser;
