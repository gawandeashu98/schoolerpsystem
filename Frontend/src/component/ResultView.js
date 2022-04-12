import React from "react";
import 'bootstrap';
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service6";
import './StudentList.css';

const ResultView = () => {
    const [results, setResults] = useState([]);
    const { semester } = useParams();
    const { cls } = useParams();
    const { subject } = useParams();

    const init = () => {
        var examid = parseInt(semester);
        const result = { examid, cls, subject };
        console.log(result);
        schoolService.findresult(result)
            .then(response => {
                console.log('Printing result data', response.data);
                setResults(response.data);
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
                <a href="/add-result" class="btn btn-primary " >Add Result</a><br></br><br></br>
                <a href="/result-list" class="btn btn-primary active">View Result</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary ">Back</a>
            </div>
            <div className="main2">
                <h3 style={{ textAlign: "center" }}>Result</h3>
                <hr />
                <div>
                    <table className="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Date</th>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Obtained Marks</th>
                                <th>Total Marks</th>
                                <th>Remark</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                results.map(result => (
                                    <tr key={result.id}>
                                        <td>{result.date}</td>
                                        <td>{result.cls}</td>
                                        <td>{result.subject}</td>
                                        <td>{result.rollNo.fname}</td>
                                        <td>{result.rollNo.lname}</td>
                                        <td>{result.obt_marks}</td>
                                        <td>{result.total}</td>
                                        <td>{result.remark}</td>
                                        <td><Link type="submit" class="btn btn-info ml-2" to={`/result/edit/${result.id}`}>Update</Link></td>
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

export default ResultView;