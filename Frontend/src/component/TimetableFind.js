import React from "react";
import 'bootstrap';
import { useState } from "react";
import { Search } from 'react-bootstrap-icons';
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service4";
import './StudentList.css';
import './AddStudent.css';

const TimetableFind = () => {
    const [timetables, setTimetables] = useState([]);
    const { date } = useParams();
    const { cls } = useParams();
    //console.log(date, cls);

    // const { cls } = useParams();

    // const init = () => {
    //     schoolService.findtimetable(date, cls)
    //         .then(response => {
    //             console.log('Printing timetable data', response.data);
    //             setTimetables(response.data);
    //         })
    //         .catch(error => {
    //             console.log('Something went wrong', error);
    //         })
    // }

    const init = () => {
        const timetable = { date, cls };
        console.log(timetable);
        schoolService.findtimetable(timetable)
            .then(response => {
                console.log('Printing timetable data', response.data);
                setTimetables(response.data);
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
                <a href="/add-timetable" class="btn btn-primary " >Add Schedule</a><br></br><br></br>
                <a href="/timetable-list" class="btn btn-primary active">View Schedule</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary ">Back</a>
            </div>
            <div className="main2">
                <h3 style={{ textAlign: "center" }}>Time Table</h3>
                <hr />
                <div>
                    <table className="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Date</th>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Faculty First Name</th>
                                <th>Faculty Last Name</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                timetables.map(timetable => (
                                    <tr key={timetable.date}>
                                        <td>{timetable.date}</td>
                                        <td>{timetable.cls}</td>
                                        <td>{timetable.subject}</td>
                                        <td>{timetable.assignedFaculty.fname}</td>
                                        <td>{timetable.assignedFaculty.lname}</td>
                                        <td>{timetable.time}</td>
                                        <td><Link type="submit" class="btn btn-info ml-2" to={`/timetable/edit/${timetable.id}`}>Update</Link></td>
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

export default TimetableFind;