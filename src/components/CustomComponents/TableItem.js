import React, { useState } from "react";
import EditStudent from "./EditStudent";
import { Button } from "reactstrap";
import firebase from "firebase/app";
import { ToasterContext } from "./ToasterContext";

function TableItems({ student }) {
  const [loading, setLoading] = useState(false);

  const db = firebase.firestore();

  const deleteStudent = async (addToast, e) => {
    e.preventDefault();
    console.log(student);
    setLoading(true);
    try {
      await db.collection("students").doc(student.id).delete();
      addToast({ text: "Deleted Student", type: "success" });
    } catch (error) {}
    setLoading(false);
  };

  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <>
          <tr>
            <th scope="row">{student.seatno}</th>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.gender}</td>
            <td>{student.rollno}</td>
            <td className="text-center">
              <EditStudent key={student.id} id={student.id} />
            </td>
            <td className="text-center">
              <Button
                className="btn-round"
                color="danger"
                onClick={deleteStudent.bind(this, addToast)}
                disabled={loading}
              >
                {loading ? "Removing" : "Remove"}
              </Button>
            </td>
          </tr>
        </>
      )}
    </ToasterContext.Consumer>
  );
}

export default TableItems;
