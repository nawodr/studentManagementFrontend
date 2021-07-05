import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./styles.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import updateStudent from "./updateStudent";

export default function ViewStudent() {
  const [students, setStudents] = useState([]);
  const [newStudents, setNewStudents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:3001/student/")
        .then((res) => {
          console.log(res.data);
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);

  function confirmationMessage(id) {
    confirmAlert({
      title: "Confirm",
      message: "Are you sure to delete this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteStudent(id);
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  }

  function deleteStudent(id) {
    axios.delete("http://localhost:3001/student/delete/" + id)
      .then(() => {
        alert("Student Deleted");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <h2>All Students</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Contact Number</th>
            <th>Gender</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((std, key) => {
            return (
              <tr>
                <td>{std.fName}</td>
                <td>{std.lName}</td>
                <td>{std.address}</td>
                <td>{std.age}</td>
                <td>{std.contactNumber}</td>
                <td>{std.gender}</td>
                {/* <button
                  className="btn btn-success mt-1"
                  onClick={() => {
                    updateStudent(std._id);
                  }}
                >
                  Edit
                </button> */}
                <Link to = {`/Update/${std._id}`} className="btn btn-success">Edit</Link>
                <button
                  className="btn btn-danger ml-3 mt-1"
                  onClick={() => {
                    confirmationMessage(std._id);
                  }}
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
