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
import React, { useEffect, useState } from "react";

// reactstrap components
import firebase from "firebase/app";
import StudentsTable from "./StudentTable";

function StudentList() {
  const [students, setStudents] = useState([]);

  const db = firebase.firestore();

  function getStudents() {
    (async () => {
      const snapshot = await db.collection("students").get();
      const studentsArray = [];
      snapshot.forEach((doc) => {
        studentsArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setStudents(studentsArray);
    })();
  }

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="content">
        <StudentsTable students={students} />
      </div>
    </>
  );
}

export default StudentList;
