import React from "react";
import 'bootstrap';
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service1";
import './StudentList.css';

const StudentPramote = () => {
    const [fromcls, setFromclass] = useState('');
    const [tocls, setToclass] = useState('');
    const history = useHistory();

    const promoteStudent = (e) => {
        e.preventDefault();

        const promote = { fromcls, tocls };
        console.log(promote);
        schoolService.promotestudent(promote)
            .then(response => {
                console.log('Printing timetable data', response.data);
                history.push('/student-section');
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
                <a href="/add-student" class="btn btn-primary " >Add New Student</a><br></br><br></br>
                <a href="/student-list" class="btn btn-primary ">List of Students</a><br></br><br></br>
                <a href="/student-pramote" class="btn btn-primary active">Promote Student</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary ">Back</a>
            </div>
            <h2 class="header">Pramote Student</h2>
            <br />
            <div className="main2">
                <form>

                    <table className="table table-bordered table-striped">
                        <thead class="thead-dark">
                            <th>From Class</th>
                            <th>To Class</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><select id="class" value={fromcls}
                                    onChange={(e) => setFromclass(e.target.value)} class="form-control">
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
                                <td><select id="class" value={tocls}
                                    onChange={(e) => setToclass(e.target.value)} class="form-control">
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
                                <td><button type="submit" onClick={(e) => promoteStudent(e)} class="btn btn-primary">Promote</button></td>

                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
}

export default StudentPramote;