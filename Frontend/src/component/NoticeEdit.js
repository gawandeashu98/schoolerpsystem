import React from "react";
import 'bootstrap';
import { useState } from "react";
import { Search } from 'react-bootstrap-icons';
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service2";
import './StudentList.css';
import './AddStudent.css';

const NoticeEdit = () => {
    const [description, setDescription] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const saveNotice = (e) => {
        e.preventDefault();

        const notice = { id, description };
        if (id) {
            //update
            schoolService.update(notice)
                .then(response => {
                    console.log('Notice updated successfully', response.data);
                    history.push('/notice-list');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }

    useEffect(() => {
        if (id) {
            schoolService.findnotice(id)
                .then(notice => {
                    setDescription(notice.data.description);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return (
        <>
            <div class="container">
                <a href="/noticeboard" class="btn btn-primary" >Add New Notice</a><br></br><br></br>
                <a href="/notice-list" class="btn btn-primary active">View Notice</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary">Back</a>
            </div>
            <h2 class="header">Notice Board</h2>
            <div class="main1">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Notice Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="7"></textarea>
                    </div>
                    <table>
                        <tr>
                            <td><button type="submit" onClick={(e) => saveNotice(e)} class="btn btn-primary">Save</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        </>
    );
}

export default NoticeEdit;