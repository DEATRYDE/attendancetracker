import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";
import CustomModal from "./Modal";

function StudentsTable({ students }) {
  return (
    <div>
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
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Roll Number</th>
                    <th>Seat Number</th>
                    <th className="text-center">Edit Student</th>
                    <th className="text-center">Remove Student</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr>
                      <td>{student.firstname}</td>
                      <td>{student.lastname}</td>
                      <td>{student.gender}</td>
                      <td>{student.rollno}</td>
                      <td>{student.seatno}</td>
                      <td className="text-center">
                        <CustomModal buttonLabel="Edit" />
                      </td>
                      <td className="text-center">
                        <Button className="btn-round" color="danger">
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
  );
}

export default StudentsTable;
