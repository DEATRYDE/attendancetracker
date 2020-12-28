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
import React from "react";

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

class User extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5">Add Student</CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-1 pl-1" md="6">
                    <FormGroup>
                      <label>First Name</label>
                      <Input
                        defaultValue="Jon"
                        placeholder="Company"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1 pr-1" md="6">
                    <FormGroup>
                      <label>Last Name</label>
                      <Input
                        defaultValue="Doe"
                        placeholder="Last Name"
                        type="text"
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
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col className="pl-1 pr-1" md="4">
                    <FormGroup>
                      <label>Seat Number</label>
                      <Input placeholder="Seat Number" type="number" />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1 pr-1" md="4">
                    <FormGroup>
                      <label>Roll Number</label>
                      <Input placeholder="Roll Number" type="number" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-1 pr-1" md="4">
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" /> 11th Standard
                        Student
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" /> 12th Standard
                        Student
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button className="btn-round" color="primary" type="submit">
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
}

export default User;
