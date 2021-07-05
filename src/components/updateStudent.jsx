import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function UpdateStudent() {
  let id = useParams().id;

  const [students, setStudents] = useState([]);

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContact] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    function updateStudent() {
      axios
        .get("http://localhost:3001/student/get/" + id)
        .then((res) => {
          document.getElementById("fName").value = res.data.fName;
          document.getElementById("lName").value = res.data.lName;
          document.getElementById("address").value = res.data.address;
          document.getElementById("age").value = res.data.age;
          document.getElementById("contactNumber").value =
            res.data.contactNumber;
          document.getElementById("gender").value = res.data.gender;
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    updateStudent();
  }, []);

  function updateData(e) {
    e.preventDefault();

    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let address = document.getElementById("address").value;
    let age = document.getElementById("age").value;
    let contactNumber = document.getElementById("contactNumber").value;
    let gender = document.getElementById("gender").value;

    const updateStd = {
      fName,
      lName,
      address,
      age,
      contactNumber,
      gender,
    };

    axios
      .put(`http://localhost:3001/student/update/`+id, updateStd)
      .then(() => {
        console.log(updateStd);
        alert("Update Successfull");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div className="container">
      <form onSubmit={updateData}>
        <div className="form-group">
          <label className="d-flex align-items-start" for="fName">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fName"
            // onChange={(e) => {
            //   setfName(e.target.value);
            // }}
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
            // onChange={(e) => {
            //   setlName(e.target.value);
            // }}
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
            // onChange={(e) => {
            //   setAddress(e.target.value);
            // }}
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
            // onChange={(e) => {
            //   setAge(e.target.value);
            // }}
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
            // onChange={(e) => {
            //   setContact(e.target.value);
            // }}
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
            // onChange={(e) => {
            //   setGender(e.target.value);
            // }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
