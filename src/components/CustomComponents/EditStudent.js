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

function EditStudent(props) {
  const db = firebase.firestore();

  const [student, setStudent] = useState({
    firstname: props.student.firstname,
    lastname: props.student.lastname,
    gender: props.student.gender,
    seatno: props.student.seatno,
    rollno: props.student.rollno,
    standard: props.student.standard,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const onSubmit = async (addToast, e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await db
        .collection("students")
        .doc(props.id)
        .set(
          {
            ...student,
            seatno: parseInt(student.seatno),
            rollno: parseInt(student.rollno),
          },
          { merge: true }
        );
      toggle();
      addToast({ text: "Successfully updated the student", type: "success" });
    } catch (error) {
      setError("An error occured while trying to update the student");
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
            buttonLabel="Edit"
          />
        </>
      )}
    </ToasterContext.Consumer>
  );
}

export default EditStudent;
