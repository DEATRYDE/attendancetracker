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
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Label,
  Row,
  Col,
  Table,
} from "reactstrap";
import firebase from "../firebase";

function Tables() {
  const [students, setStudents] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [seatno, setSeatno] = useState("");
  const [rollno, setRollno] = useState("");
  const [standard, setStandard] = useState("");

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

  function editStudent(updatedStudent) {
    ref
      .doc(updatedStudent.id)
      .update(updatedStudent)
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Edit Student</CardTitle>
          </CardHeader>
          <CardBody>
            <Form action="/tables">
              <Row>
                <Col className="pr-1 pl-1" md="6">
                  <FormGroup>
                    <label>First Name</label>
                    <Input
                      placeholder="Firstname"
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col className="pl-1 pr-1" md="6">
                  <FormGroup>
                    <label>Last Name</label>
                    <Input
                      placeholder="Last Name"
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pl-1 pr-1" md="4">
                  <FormGroup>
                    <label>Select Gender</label>
                    <Input
                      defaultValue="Select Gender"
                      placeholder="Select Gender"
                      type="select"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col className="pl-1 pr-1" md="4">
                  <FormGroup>
                    <label>Seat Number</label>
                    <Input
                      placeholder="Seat Number"
                      type="number"
                      value={seatno}
                      onChange={(e) => setSeatno(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col className="pl-1 pr-1" md="4">
                  <FormGroup>
                    <label>Roll Number</label>
                    <Input
                      placeholder="Roll Number"
                      type="number"
                      value={rollno}
                      onChange={(e) => setRollno(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pl-1 pr-1" md="4">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="radio1"
                        value="11th"
                        onChange={(e) => setStandard(e.target.value)}
                      />
                      11th Standard Student
                    </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="radio1"
                        value="12th"
                        onChange={(e) => setStandard(e.target.value)}
                      />
                      12th Standard Student
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              <Row></Row>
            </Form>
          </CardBody>
        </Card>

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
                      <th className="text-center">Edit Student</th>
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
                            onClick={() =>
                              editStudent({
                                firstname,
                                lastname,
                                seatno,
                                rollno,
                                gender,
                                standard,
                                id: student.id,
                              })
                            }
                          >
                            Edit
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button
                            className="btn-round"
                            color="danger"
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
