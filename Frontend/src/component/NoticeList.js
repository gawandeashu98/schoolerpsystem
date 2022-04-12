import React from "react";
import 'bootstrap';
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service2";
import './StudentList.css';

const NoticeList = () => {
    const [id, setId] = useState('');
    const [notices, setNotices] = useState([]);

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

    const deleteNotice = (id) => {
        if (id) {
            //delete
            schoolService.remove(id)
                .then(response => {
                    console.log('Admin data deleted successfully', response.data);
                    init();
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <>
            <div class="container">
                <a href="/noticeboard" class="btn btn-primary" >Add New Notice</a><br></br><br></br>
                <a href="/notice-list" class="btn btn-primary active">View Notice</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary">Back</a>
            </div>
            <div className="main1">
                <h3 style={{ textAlign: "center" }}>Notice Board</h3>
                <hr />
                <div>
                    <table className="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Notice</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                notices.map(notice => (
                                    <tr key={notice.id}>
                                        <td>{notice.description}</td>
                                        <td><Link className="btn btn-info" to={`/notice/edit/${notice.id}`}>Update</Link></td>
                                        <td><button type="submit" onClick={() => deleteNotice(notice.id)} class="btn btn-danger">Delete</button></td>
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

export default NoticeList;