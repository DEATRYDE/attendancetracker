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
import DailyAttendance from "views/DailyAttendance";
import Dashboard from "views/Dashboard.js";
import StudentList from "views/StudentList.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/daily",
    name: "Daily Attendance",
    icon: "nc-icon nc-badge",
    component: DailyAttendance,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Student List",
    icon: "nc-icon nc-tile-56",
    component: StudentList,
    layout: "/admin",
  },
];
export default routes;
