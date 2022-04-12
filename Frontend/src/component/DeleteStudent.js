import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import 'bootstrap';
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service1";
import './StudentList.css';
import './AddStudent.css';

const DeleteStudent = () => {
    const { id } = useParams();
    const history = useHistory();

    const init = () => {
        if (id) {
            //update
            schoolService.remove(id)
                .then(response => {
                    console.log('Student data updated successfully', response.data);
                    history.push('/student-list');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }

    useEffect(() => {
        init();
      }, []);
    
    return (
        <h5></h5>
    );
}

export default DeleteStudent;