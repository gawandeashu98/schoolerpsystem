import React from "react";
import 'bootstrap';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service2";
import './StudentList.css';
import './AddStudent.css';

const Notice = () => {
    const [description, setDescription] = useState('');
    const history = useHistory();

    const addNotice = (e) => {
        e.preventDefault();

        const notice = { description };
        schoolService.addnotice(notice)
            .then(response => {
                console.log("notice added ", response.data);
                history.push("/notice-list");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
    }

    useEffect(() => {
    }, [])

    return (
        <div>
            <div class="container">
                <a href="/notice-list" class="btn btn-primary ">View Notice</a><br></br><br></br>
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
                            <td><button type="submit" onClick={(e) => addNotice(e)} class="btn btn-primary">Publish</button></td>
                        </tr>
                    </table>
                </form>
            </div>

        </div>

    );
}

export default Notice;