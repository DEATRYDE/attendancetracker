import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import firebase from "firebase/app";
import { ToasterContext } from "./ToasterContext";

function EditStudent(id) {
  const [student, setStudent] = useState([]);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const docRef = await firebase
          .firestore()
          .collection("students")
          .doc(id);
        const doc = await docRef.get();
        console.log(doc);
        setStudent(doc.data());
      } catch (e) {
        console.error(e);
      }
    })();
  });

  // const onChange = (e) => {
  //   setStudent({
  //     ...student,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const toggle = () => setModal(!modal);

  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <>
          <Button className="btn-round" color="primary" onClick={toggle}>
            Edit
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit Student</ModalHeader>
            <ModalBody>
              <Form action="/tables" onSubmit={toggle}>
                <Row>
                  <Col className="pr-1 pl-1" md="6">
                    <FormGroup>
                      <label>{student.firstname}</label>
                      <Input
                        placeholder="Firstname"
                        type="text"
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
                        name="rollno"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-1 pr-1" md="6">
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="standard" value="11th" />
                        11th Standard Student
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col className="pl-1 pr-1" md="6">
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="standard" value="12th" />
                        12th Standard Student
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </ModalBody>
            <ModalFooter>
              <tr>
                <td className="text-center">
                  <Button
                    type="submit"
                    className="btn-round"
                    color="primary"
                    onClick={() => addToast("Toast")}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
              <Button className="btn-round" color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </>
      )}
    </ToasterContext.Consumer>
  );
}

export default EditStudent;
