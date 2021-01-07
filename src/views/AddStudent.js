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
import firebase from "firebase/app";

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

  const onChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
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
    } catch (error) {
      console.error("An error has occured", error);
      setError("An error occured while trying to save the student");
    }
    setLoading(false);
  };

  return (
    <div className="content">
      <Card className="card-user">
        <CardHeader>
          <CardTitle tag="h5">Add Student</CardTitle>
        </CardHeader>
        <CardBody>
          <Form action="/tables" onSubmit={onSubmit}>
            <Row>
              <Col className="pr-1 pl-1" md="6">
                <FormGroup>
                  <label>First Name</label>
                  <Input
                    placeholder="Firstname"
                    type="text"
                    value={student.firstname}
                    onChange={onChange}
                    name="firstname"
                  />
                </FormGroup>
              </Col>
              <Col className="pl-1 pr-1" md="6">
                <FormGroup>
                  <label>Last Name</label>
                  <Input
                    placeholder="Last Name"
                    type="text"
                    value={student.lastname}
                    onChange={onChange}
                    name="lastname"
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
                    value={student.gender}
                    onChange={onChange}
                    name="gender"
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
                    value={student.seatno}
                    onChange={onChange}
                    name="seatno"
                  />
                </FormGroup>
              </Col>
              <Col className="pl-1 pr-1" md="4">
                <FormGroup>
                  <label>Roll Number</label>
                  <Input
                    placeholder="Roll Number"
                    type="number"
                    value={student.rollno}
                    onChange={onChange}
                    name="rollno"
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
                      name="standard"
                      value="11th"
                      onChange={onChange}
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
                      name="standard"
                      value="12th"
                      onChange={onChange}
                    />
                    12th Standard Student
                  </Label>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <div className="update ml-auto mr-auto">
                <Button
                  type="submit"
                  className="btn-round"
                  color="primary"
                  disabled={loading}
                >
                  {loading ? "Please Wait" : "Add Student"}
                </Button>
              </div>
            </Row>
            {error && <p className="error">{error}</p>}
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default AddStudent;
