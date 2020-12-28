import React from "react";
import { Toast, ToastBody, ToastHeader, Button, Col } from "reactstrap";

const DisplayCard = (props) => {
  let lectureColor
  let practicalColor

  if (props.lectureColor === true) {
    lectureColor = "success";
  } else {
    lectureColor = "danger";
  }

  if (props.practicalColor === true) {
    practicalColor = "success";
  } else {
    practicalColor = "danger";
  }

  return (
    <>
      <div>
        <Col>
          <div className=" p-2  rounded bg-docs-transparent-grid center">
            <Toast
              style={{
                maxWidth: "250px",
              }}
            >
              <ToastHeader>
                {props.id} | {props.name}
              </ToastHeader>
              <ToastBody>
                <Button
                  style={{ maxWidth: "120px" }}
                  size="md"
                  color={lectureColor}
                >
                  Lecture
                </Button>

                <Button
                  style={{ maxWidth: "120px" }}
                  size="md"
                  color={practicalColor}
                >
                  Practical
                </Button>
              </ToastBody>
            </Toast>
          </div>
        </Col>
      </div>
    </>
  );
};

export default DisplayCard;
