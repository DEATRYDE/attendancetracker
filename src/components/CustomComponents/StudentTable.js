import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Table } from "reactstrap";
import TableItem from "./TableItem";
import firebase from "firebase/app";

function StudentsTable() {
  const [students, setStudents] = useState([]);

  const db = firebase.firestore();

  function getStudents() {
    (async () => {
      const snapshot = await db.collection("students").orderBy("seatno").get();
      const studentsArray = [];
      snapshot.forEach((doc) => {
        studentsArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setStudents(studentsArray);
    })();
  }

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Card>
        <CardHeader tag="h3" className="text-center">
          <CardTitle>All Student Table</CardTitle>
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead className="text-primary">
              <tr>
                <th>Seat Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Roll No.</th>
                <th className="text-center">Edit Student</th>
                <th className="text-center">Remove Student</th>
              </tr>
            </thead>
            <tbody>
              {!students.length
                ? "Loading Students"
                : students.map((student) => (
                    <TableItem student={student} id={student.id}></TableItem>
                  ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

export default StudentsTable;
