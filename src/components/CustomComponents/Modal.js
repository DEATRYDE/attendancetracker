import React, { useState } from "react";
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

function CustomModal(props) {
  const { buttonLabel } = props;

  const modalInitialValues = {
    firstname: "",
    lastname: "",
    gender: "",
    seatno: "",
    rollno: "",
    standard: "",
  };

  const [values, setValues] = useState({ ...modalInitialValues });

  const [modal, setModal] = useState(false);

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const toggle = () => setModal(!modal);

  return (
    <div className="modal__container">
      <Button className="btn-round" color="primary" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Student</ModalHeader>
        <ModalBody>
          <Form action="/tables" onSubmit={toggle}>
            <Row>
              <Col className="pr-1 pl-1" md="6">
                <FormGroup>
                  <label>First Name</label>
                  <Input
                    placeholder="Firstname"
                    type="text"
                    value={values.firstname}
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
                    value={values.lastname}
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
                    value={values.gender}
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
                    value={values.seatno}
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
                    value={values.rollno}
                    onChange={onChange}
                    name="rollno"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pl-1 pr-1" md="6">
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
              <Col className="pl-1 pr-1" md="6">
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
          </Form>
        </ModalBody>
        <ModalFooter>
          <tr>
            <td className="text-center">
              <Button
                type="submit"
                className="btn-round"
                color="primary"
                onClick={toggle}
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
    </div>
  );
}

export default CustomModal;
