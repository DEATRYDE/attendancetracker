import React, { useState, useEffect } from "react";
import DisplayCard from "../components/CustomComponents/DisplayCard";
import { Row } from "reactstrap";
import firebase from "../firebase";

const DailyAttendance = () => {
  const [dates, setDates] = useState([]);

  const ref = firebase.firestore().collection("Dates");

  function getDates() {
    ref.onSnapshot((querySnapshot) => {
      const students = [];
      querySnapshot.forEach((doc) => {
        students.push(doc.data());
      });
      setDates(students);
      return students;
    });
  }

  useEffect(() => {
    getDates();
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <div>
        {dates.map((date) => (
          <div>
            <DisplayCard
              id={date["student1"]["id"]}
              name={date["student1"]["name"]}
              lectureColor={date["student1"]["lecture"]}
              practicalColor={date["student1"]["practical"]}
            ></DisplayCard>
          </div>
        ))}
      </div>
      {/* <Row>
        <DisplayCard
          id="01"
          name="Bhavneet Singh "
          lectureColor="success"
          practicalColor="danger"
        ></DisplayCard>
        <DisplayCard
          id="02"
          name="Parmeet Singh"
          lectureColor="success"
          practicalColor="danger"
        ></DisplayCard>
        <DisplayCard
          id="03"
          name="Rahul Dogra"
          lectureColor="success"
          practicalColor="danger"
        ></DisplayCard>
        <DisplayCard
          id="04"
          name="Deepu"
          lectureColor="success"
          practicalColor="danger"
        ></DisplayCard>
        <DisplayCard
          id="05"
          name="Navneet"
          lectureColor="success"
          practicalColor="danger"
        ></DisplayCard>
      </Row> */}
    </div>
  );
};

export default DailyAttendance;
