import React, { useState, useEffect } from "react";
import DisplayCard from "../components/CustomComponents/DisplayCard";
import firebase from "firebase/app";
import CustomDatePicker from "components/CustomComponents/DatePicker";

const DailyAttendance = () => {
  const [dates, setDates] = useState([]);

  const ref = firebase.firestore().collection("dates");

  function getDates() {
    ref.onSnapshot((querySnapshot) => {
      const dateArray = [];
      querySnapshot.forEach((doc) => {
        dateArray.push(doc.data());
      });
      console.log(dateArray);
      setDates(dateArray);
      return dateArray;
    });
  }

  useEffect(() => {
    getDates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="content">
      <CustomDatePicker />
      {dates.map((date) => (
        <div key={date.id}>
          <DisplayCard
            id={date.id}
            name={date.name}
            lectureColor={date.lecture}
            practicalColor={date.practical}
          ></DisplayCard>
        </div>
      ))}
    </div>
  );
};

export default DailyAttendance;
