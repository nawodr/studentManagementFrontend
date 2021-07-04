import axios from "axios";
import React, { useState } from "react";

export default function AddStudent() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContact] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newStudent = {
      fName,
      lName,
      address,
      age,
      contactNumber,
      gender,
    };

    axios.post("http://localhost:3001/student/add", newStudent).then(()=>{
        alert("Student Added");
                
    }).catch((err)=> {
        alert(err);

    })
  }
  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="form-group">
          <label className="d-flex align-items-start" for="fName">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fName"
            onChange={(e) => {
              setfName(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label className="d-flex align-items-start" for="lName">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lName"
            onChange={(e) => {
              setlName(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label className="d-flex align-items-start" for="address">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label className="d-flex align-items-start" for="age">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label className="d-flex align-items-start" for="contactNumber">
            Contact Number
          </label>
          <input
            type="text"
            className="form-control"
            id="contactNumber"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label className="d-flex align-items-start" for="gender">
            Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
