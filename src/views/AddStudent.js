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
} from "reactstrap";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";

function AddUser() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [seatno, setSeatno] = useState("");
  const [rollno, setRollno] = useState("");
  const [standard, setStandard] = useState("");

  let history = useHistory();

  const redirect = () => {
    history.push("/admin/tables");
  };

  const ref = firebase.firestore().collection("students");

  function addStudent(newStudent) {
    ref
      .doc(newStudent.id)
      .set(newStudent)
      .then(redirect)
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Add Student</CardTitle>
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
                      />{" "}
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
                      />{" "}
                      12th Standard Student
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto">
                  <Button
                    className="btn-round"
                    color="primary"
                    onClick={() =>
                      addStudent({
                        firstname,
                        lastname,
                        seatno,
                        gender,
                        rollno,
                        standard,
                        id: uuidv4(),
                      })
                    }
                  >
                    Add Student
                  </Button>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default AddUser;
