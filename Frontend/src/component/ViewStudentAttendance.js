import React from "react";
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service5";
import 'bootstrap';
import './AddStudent.css';

const ViewStudentAttendance = () => {
    const [date, setDate] = useState('');
    const [rollno, setRollno] = useState('');
    // const history = useHistory();

    // const viewAttendance = (e) => {
    //     const attendance1 = { date, rollno };
    //     console.log(attendance1);
    //     schoolService.findattendance(attendance1)
    //         .then(response => {
    //             console.log('Printing attendance data', response.data);
                
    //         })
    //         .catch(error => {
    //             console.log('Something went wrong', error);
    //         })
    // }


    useEffect(() => {
        // init();
    }, [])

    return (
        <>
            <div class="container">
                <a href="/student-dashboard" class="btn btn-primary">Back</a>
            </div>
            <h2 class="header">Attendance</h2>
            <br />
            <div className="main1">
                <form>
                    <table className="table table-bordered table-striped">
                        <thead class="thead-dark">
                            <th>Roll No</th>
                            <th>Date</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" value={localStorage.getItem('id')} readOnly
                                    onChange={(e) => setRollno(e.target.value)} class="form-control" id="rollno" placeholder="Roll No" /></td>
                                <td><input type="text" value={date}
                                    onChange={(e) => setDate(e.target.value)} class="form-control" id="date" placeholder="YYYY-mm-dd" /></td>
                                <td><Link type="submit" class="btn btn-info ml-2" to={`/student-attendance1/view/${localStorage.getItem('id')}/${date}`}>View</Link></td>
                                {/* <td><button type="submit" onClick={(e) => viewAttendance(e)} class="btn btn-primary">Add</button></td> */}
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
}

export default ViewStudentAttendance;