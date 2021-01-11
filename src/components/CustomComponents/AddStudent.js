/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import firebase from "firebase/app";
import { ToasterContext } from "./ToasterContext";
import StudentForm from "./StudentForm";

function AddStudent() {
  const db = firebase.firestore();

  const initialValues = {
    firstname: "",
    lastname: "",
    gender: "",
    seatno: "",
    rollno: "",
    standard: "",
  };

  const [student, setStudent] = useState({ ...initialValues });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const onSubmit = async (addToast, e) => {
    e.preventDefault();
    console.log(student);
    setLoading(true);
    try {
      const docRef = await db.collection("students").add({
        ...student,
        seatno: parseInt(student.seatno),
        rollno: parseInt(student.rollno),
      });
      console.log(docRef.id);
      setStudent({ ...initialValues });
      toggle();
      addToast({ text: "Successfully created a new student", type: "success" });
    } catch (error) {
      setError("An error occured while trying to save the student");
    }
    setLoading(false);
  };

  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <>
          <StudentForm
            {...{ loading, student, setStudent, error, toggle, modal }}
            onSubmit={onSubmit.bind(this, addToast)}
            buttonLabel="Add Student"
          />
        </>
      )}
    </ToasterContext.Consumer>
  );
}

export default AddStudent;
