import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menubar from "./component/Menubar";
import Home from "./component/Home";
import Aboutus from './component/Aboutus';
import Login from './component/Login';
import Adminlogin from './component/Adminlogin';
import Studentlogin from './component/Studentlogin';
import Signup from './component/Signup';
import AdminDashboard from './component/AdminDashboard';
import Infrastructure from './component/Infrastructure';
import Cafeteria from './component/facilities/Cafeteria';
import Hostel from './component/facilities/Hostel';
import Library from './component/facilities/Library';
import Medical from './component/facilities/Medical';
import Transport from './component/facilities/Transport';
import AddStudent from './component/AddStudent';
import StudentSection from './component/StudentSection';
import StudentList from './component/StudentList';
import StudentFind from './component/StudentFind';
import AdminSection from './component/AdminSection';
import AdminList from './component/AdminList';
import AdminFind from './component/AdminFind';
import DeleteStudent from './component/DeleteStudent';
import AdminEdit from './component/AdminEdit';
import StudentDashboard from './component/StudentDashboard';
import StudentEdit from './component/StudentEdit';
import Notice from './component/Notice';
import NoticeList from './component/NoticeList';
import NoticeEdit from './component/NoticeEdit';
import StudentNotice from './component/StudentNotice';
import FacultySection from './component/FacultySection';
import AddFaculty from './component/AddFaculty';
import FacultyList from './component/FacultyList';
import FacultyFind from './component/FacultyFind';
import TimetableSection from './component/TimetableSection';
import AddTimetable from './component/AddTimetable';
import TimetableList from './component/TimetableList';
import TimetableFind from './component/TimetableFind';
import TimetableEdit from './component/TimetableEdit';
import StudentTimetable from './component/StudentTimetable';
import StudentTimetableFind from './component/StudentTimetableFind';
import StudentPramote from './component/StudentPramote';
import StudentAttendance from './component/StudentAttendance';
import AddAttendance from './component/AddAttendance';
import AttendanceAdd from './component/AttendanceAdd';
import AttendanceList from './component/AttendanceList';
import AttendanceView from './component/AttendanceView';
import ViewStudentAttendance from './component/ViewStudentAttendance';
import FindStudentAttendance from './component/FindStudentAttendance';
import ResultSection from './component/ResultSection';
import AddResult from './component/AddResult';
import StudentResult from './component/StudentResult';
import ResultList from './component/ResultList';
import ResultView from './component/ResultView';
import FindStudentResult from './component/FindStudentResult';
import ViewStudentResult from './component/ViewStudentResult';
import ResultEdit from './component/ResultEdit';
import Contactus from './component/Contactus';
import ManagementCommittee from './component/administration/ManagementCommittee';
import PrincipalDetails from './component/administration/PrincipalDetails';
import StaffDetails from './component/administration/StaffDetails';
import StudentsEnrolled from './component/administration/StudentsEnrolled';
import Circular from './component/academics/Circular';
import Holiday from './component/academics/Holiday';
import Gallery from './component/gallery/Gallery';

function App() {
  return (
    <div>
      <Menubar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/infrastructure" component={Infrastructure} />
          <Route path="/cafeteria" component={Cafeteria} />
          <Route path="/hostel" component={Hostel} />
          <Route path="/library" component={Library} />
          <Route path="/medical" component={Medical} />
          <Route path="/transport" component={Transport} />
          <Route path="/login" component={Login} />
          <Route path="/admin-login" component={Adminlogin} />
          <Route path="/student-login" component={Studentlogin} />
          <Route path="/add-admin" component={Signup} />
          <Route path="/admin-dashboard" component={AdminDashboard} />
          <Route path="/add-student" component={AddStudent} />
          <Route path="/student-section" component={StudentSection} />
          <Route path="/student-list" component={StudentList} />
          <Route path="/student/find/:id" component={StudentFind} />
          <Route path="/admin-section" component={AdminSection} />
          <Route path="/admin-list" component={AdminList} />
          <Route path="/admin/find/:id" component={AdminFind} />
          <Route path="/student/delete/:id" component={DeleteStudent} />
          <Route path="/admin/edit/:id" component={AdminEdit} />
          <Route path="/student-dashboard" component={StudentDashboard} />
          <Route path="/student/edit/:id" component={StudentEdit} />
          <Route path="/noticeboard" component={Notice} />
          <Route path="/notice-list" component={NoticeList} />
          <Route path="/notice/edit/:id" component={NoticeEdit} />
          <Route path="/student-noticeboard" component={StudentNotice} />
          <Route path="/faculty-section" component={FacultySection} />
          <Route path="/add-faculty" component={AddFaculty} />
          <Route path="/faculty-list" component={FacultyList} />
          <Route path="/faculty/find/:id" component={FacultyFind} />
          <Route path="/timetable-section" component={TimetableSection} />
          <Route path="/add-timetable" component={AddTimetable} />
          <Route path="/timetable-list" component={TimetableList} />
          <Route path="/timetable/find/:date/:cls" component={TimetableFind} />
          <Route path="/timetable/edit/:id" component={TimetableEdit} />
          <Route path="/student-timetable" component={StudentTimetable} />
          <Route path="/student-timetable1/find/:date/:cls" component={StudentTimetableFind} />
          <Route path="/student-pramote" component={StudentPramote} />
          <Route path="/student-attendance" component={StudentAttendance} />
          <Route path="/add-attendance" component={AddAttendance} />
          <Route path="/attendance/add/:date/:cls/:subject" component={AttendanceAdd} />
          <Route path="/attendance-list" component={AttendanceList} />
          <Route path="/attendance/view/:date/:cls/:subject" component={AttendanceView} />
          <Route path="/viewstudent-attendance" component={ViewStudentAttendance} />
          <Route path="/student-attendance1/view/:rollno/:date" component={FindStudentAttendance} />
          <Route path="/result-section" component={ResultSection} />
          <Route path="/add-result" component={AddResult} />
          <Route path="/result/add/:date/:cls/:subject/:semester" component={StudentResult} />
          <Route path="/result-list" component={ResultList} />
          <Route path="/result/view/:semester/:cls/:subject" component={ResultView} />
          <Route path="/student-result" component={FindStudentResult} />
          <Route path="/student-result1/view/:rollno/:semester/:cls" component={ViewStudentResult} />
          <Route path="/result/edit/:id" component={ResultEdit} />
          <Route path="/contactus" component={Contactus} />
          <Route path="/managementcommittee" component={ManagementCommittee} />
          <Route path="/principaldetails" component={PrincipalDetails} />
          <Route path="/staffdetails" component={StaffDetails} />
          <Route path="/studentsenrolled" component={StudentsEnrolled} />
          <Route path="/circular" component={Circular} />
          <Route path="/holiday" component={Holiday} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
