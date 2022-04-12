import React from "react";
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service5";
import 'bootstrap';
import './AddStudent.css';

const FindStudentAttendance = () => {
    const [attendances, setAttendances] = useState([]);
    const { rollno } = useParams();
    const { date } = useParams();

    const init = () => {
        var myrollno=parseInt(rollno)
        const attendance1 = { myrollno, date };
        console.log(attendance1);
        schoolService.getattendance(attendance1)
            .then(response => {
                console.log('Printing attendance data', response.data);
                setAttendances(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <>
            <div class="container">
                <a href="/viewstudent-attendance" class="btn btn-primary">Search Attendance</a><br></br><br></br>
                <a href="/student-dashboard" class="btn btn-primary">Back</a>
            </div>
            <div className="main1">
                <h3 style={{ textAlign: "center" }}>Attendance</h3>
                <hr />
                <div>
                    <table className="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Date</th>
                                {/* <th>Class</th> */}
                                <th>Subject</th>
                                <th>Remark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                attendances.map(attendance => (
                                    <tr key={attendance.date}>
                                        <td>{attendance.date}</td>
                                        {/* <td>{attendance.cls}</td> */}
                                        <td>{attendance.subject}</td>
                                        <td>{attendance.remark}</td>
                                        {/* <td><Link type="submit" class="btn btn-info ml-2" to={`/timetable/edit/${timetable.id}`}>Update</Link></td> */}
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}

export default FindStudentAttendance;