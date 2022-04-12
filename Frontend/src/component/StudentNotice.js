import React from "react";
import 'bootstrap';
import { useState } from "react";
import { Search } from 'react-bootstrap-icons';
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service2";
import './StudentList.css';
import './AddStudent.css';

const StudentNotice = () => {
    const [id, setId] = useState('');
    const [notices, setNotices] = useState([]);
    // const current = new Date();
    // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const init = () => {
        schoolService.getAll()
            .then(response => {
                console.log('Printing notice data', response.data);
                setNotices(response.data);
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
                <a href="/student-dashboard" class="btn btn-primary">Back</a>
            </div>
            <div className="main1">
                <h3 style={{ textAlign: "center" }}>Notice Board</h3>
                <hr />
                <div>
                    <table className="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Notice</th>
                                {/* <th>Date</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                notices.map(notice => (
                                    <tr key={notice.id}>
                                        <td>{notice.description}</td>
                                        {/* <td>{date}</td> */}
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

export default StudentNotice;