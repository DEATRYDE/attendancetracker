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
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";
import firebase from "../firebase";

function Tables() {
  const [students, setStudents] = useState([]);

  const ref = firebase.firestore().collection("students");

  function getStudents() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setStudents(items);
    });
  }

  useEffect(() => {
    getStudents();
  });

  function deleteStudent(student) {
    ref
      .doc(student.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4" className="text-center">
                  All Students Table
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Seat Number</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Gender</th>
                      <th>Roll Number</th>
                      <th className="text-center">Remove Student</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr>
                        <td>{student.seatno}</td>
                        <td>{student.firstname}</td>
                        <td>{student.lastname}</td>
                        <td>{student.gender}</td>
                        <td>{student.rollno}</td>
                        <td className="text-center">
                          <Button
                            className="btn-round"
                            color="primary"
                            onClick={() => deleteStudent(student)}
                          >
                            Remove
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
