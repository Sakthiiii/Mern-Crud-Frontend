import Modal from "react-bootstrap/Modal";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerUser } from "../actions";

const RegisterUser = () => {
  const { push } = useHistory();

  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [img, setImg] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [formValid, setFormValid] = useState("");

  const [emailError, setEmailError] = useState("");

  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  let nameValid = true;
  let ageValid = true;
  let emailValid = true;
  const updateName = (e) => {
    if (!e.target.value) {
      setNameError("Please Enter Employee Name");
      nameValid = false;
    } else if (e.target.value.length > 20 || e.target.value.length < 3) {
      setNameError("Name length must be between 3 and 20 characters");
      nameValid = false;
    } else {
      setNameError("");
      nameValid = true;
    }
    setName(e.target.value);
  };
  const updateAge = (e) => {
    if (!/^[0-9]{1,3}$/.test(e.target.value)) {
      setAgeError("you must Enter An Age");
      ageValid = false;
    } else if (e.target.value >= 13 && e.target.value <= 140) {
      setAgeError("Age Must be between 13 and 140");
      ageValid = false;
    } else ageValid = true;
    setAgeError("");
    setAge(e.target.value);
  };
  const updateEmail = (e) => {
    if (!e.target.value) {
      setEmailError("Please Enter Email ID");
      emailValid = false;
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e.target.value
      )
    ) {
      setEmailError("Invalid email address");
      emailValid = false;
    } else {
      emailValid = true;
      setEmailError("");
    }
    setEmail(e.target.value);
  };

  const updateImg = (e) => {
    const image = e.target.files[0];
    setImg(image);
  };
  const submitInfo = () => {
    if (nameValid && ageValid && emailValid) {
      let person = new FormData();
      person.append("name", name);
      person.append("age", age);
      person.append("email", email);
      person.append("img", img);
      dispatch(registerUser(person));
      setIsOpen({ isOpen: false });
      push("/");
    } else {
      setFormValid("Please Enter Valid Values To Proceed");
    }
  };
  const hideModal = () => {
    setIsOpen({ isOpen: false });
    push("/");
  };

  return (
    <>
      <h1 style={{ color: "navy", textAlign: "center" }}>Register Here</h1>
      <Modal show={isOpen}>
        <Modal.Header>
          {" "}
          <h1 className="d-block">Register</h1>
        </Modal.Header>
        <Modal.Body>
          <p className="text-danger">{formValid}</p>
          <form className="mb-3">
            <div className="input-group pmd-input-group pmd-input-group-icon mb-3">
              <div className="pmd-textfield pmd-textfield-floating-label w-100">
                <label htmlFor="inputError1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="basic-addon3"
                  value={name}
                  onChange={updateName}
                />
                <p className="text-danger">{nameError}</p>

                <span className="pmd-textfield-focused"></span>
              </div>

              <div className="pmd-textfield pmd-textfield-floating-label w-100">
                <label htmlFor="inputError1">Age</label>
                <input
                  type="number"
                  className="form-control"
                  aria-describedby="basic-addon3"
                  value={age}
                  onChange={updateAge}
                />
                <p className="text-danger">{ageError}</p>

                <span className="pmd-textfield-focused"></span>
              </div>
              <div className="pmd-textfield pmd-textfield-floating-label w-100">
                <label htmlFor="inputError1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="basic-addon3"
                  value={email}
                  onChange={updateEmail}
                />
                <p className="text-danger">{emailError}</p>

                <span className="pmd-textfield-focused"></span>
              </div>
              <div className="pmd-textfield pmd-textfield-floating-labe w-100">
                <label htmlFor="inputError1">Image</label>
                <input
                  type="file"
                  className="form-control"
                  aria-describedby="basic-addon3"
                  onChange={updateImg}
                />
                <span className="pmd-textfield-focused"></span>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={hideModal}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={submitInfo}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default RegisterUser;
