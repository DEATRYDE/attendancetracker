import React from "react";
import {
  ModalBody,
  FormGroup,
  Form,
  Input,
  Label,
  Row,
  Col,
  ModalFooter,
  Button,
  Modal,
  ModalHeader,
} from "reactstrap";

function StudentForm({
  loading,
  onSubmit,
  student,
  error,
  setStudent,
  toggle,
  modal,
  buttonLabel,
}) {
  const onChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Button className="btn-round" color="primary text-right" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Student</ModalHeader>
        <Form action="/tables" onSubmit={onSubmit}>
          <ModalBody className="mr-2 ml-2">
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
              <Col className="pl-1 pr-1" md="auto">
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
          </ModalBody>
          <ModalFooter>
            <div className="update ml-auto mr-2">
              <Button type="submit" color="primary" disabled={loading}>
                {loading ? "Please Wait" : "Save"}
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </div>
            {error && <p className="error">{error}</p>}
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
}

export default StudentForm;
