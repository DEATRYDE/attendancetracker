import React, { useState, useEffect } from "react";
import DisplayCard from "../components/CustomComponents/DisplayCard";
import firebase from "../firebase";

const DailyAttendance = () => {
  const [dates, setDates] = useState([]);

  const ref = firebase.firestore().collection("dates");

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
  });

  return (
    <div>
      <br />
      <br />
      <br />
      <div>
        {dates.map((date) => (
          <div>
            <DisplayCard
              id={date.id}
              name={date.name}
              lectureColor={date.lecture}
              practicalColor={date.practical}
            ></DisplayCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyAttendance;
