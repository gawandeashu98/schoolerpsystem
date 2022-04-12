import React from "react";
import 'bootstrap';
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service4";
import './StudentList.css';

const TimetableList = () => {
    const [date, setDate] = useState('');
    const [cls, setClass] = useState('');
    const [timetables, setTimetables] = useState([]);

    const findTimetable = (e) => {
        e.preventDefault();

        const timetable = { date, cls };
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
    }, [])

    return (
        <>
            <div class="container">
                <a href="/add-timetable" class="btn btn-primary " >Add Schedule</a><br></br><br></br>
                <a href="/timetable-list" class="btn btn-primary active">View Schedule</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary ">Back</a>
            </div>
            <h2 class="header">Search Time Table</h2>
            <br />
            <div className="main2">
                <form>
                    <table className="table table-bordered table-striped">
                        <thead class="thead-dark">
                            <th>Date</th>
                            <th>Class</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" value={date}
                                    onChange={(e) => setDate(e.target.value)} class="form-control" id="date" placeholder="YYYY-mm-dd" /></td>
                                <td><select id="class" value={cls}
                                    onChange={(e) => setClass(e.target.value)} class="form-control">
                                    <option selected>Choose...</option>
                                    <option value="Std. I" >Std. I</option>
                                    <option value="Std. II" >Std. II</option>
                                    <option value="Std. III" >Std. III</option>
                                    <option value="Std. IV" >Std. IV</option>
                                    <option value="Std. V" >Std. V</option>
                                    <option value="Std. VI" >Std. VI</option>
                                    <option value="Std. VII" >Std. VII</option>
                                    <option value="Std. VIII" >Std. VIII</option>
                                    <option value="Std. IX" >Std. IX</option>
                                    <option value="Std. X" >Std. X</option>
                                </select></td>
                                <td><Link type="submit" class="btn btn-info ml-2" to={`/timetable/find/${date}/${cls}`}>Search</Link></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
}

export default TimetableList;