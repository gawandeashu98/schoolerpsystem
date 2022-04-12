import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service1";
import 'bootstrap';
import './Studentlogin.css';
import showPwdImg from './lock.svg';
import hidePwdImg from './unlock.svg';

const Studentlogin = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errormsg, setErrormsg] = useState('');
    const [errormsg1, setErrormsg1] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const history = useHistory();

    const validateStudent = (e) => {
        e.preventDefault();

        const student = { userName, password };
        schoolService.loginstudent(student)
            .then(response => {
                console.log("student verified ", response.data);
                localStorage.setItem('name',response.data.fname);
                localStorage.setItem('lname',response.data.lname);
                localStorage.setItem('id',response.data.id);
                localStorage.setItem('username',response.data.userName);
                localStorage.setItem('class',response.data.cls);
                history.push("/student-dashboard");
            })
            .catch(error => {
                console.log('something went wrong', error);
                setErrormsg("There was a problem");
                setErrormsg1("We cannot find an account with that username and password");
            })
    }


    useEffect(() => {
    }, [])
    return (
        <div class="studentlogin">
            <form >
                <div >
                    <h4 style={{ color: "rgb(226, 23, 23)" }}>{errormsg}</h4>
                    <p>{errormsg1}</p>
                </div>
                <div class="form-group">
                    <label for="exampleInputUser"><h4>User Name</h4></label>
                    <input type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        class="form-control"
                        id="exampleInputUser"
                        aria-describedby="userHelp"
                        placeholder="Enter user name" />
                    <small id="userHelp" class="form-text text-muted">We'll never share your user name with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1"><h4>Password</h4></label>
                    <input type={isRevealPwd ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password" />
                    <img
                        title={isRevealPwd ? "Hide password" : "Show password"}
                        src={isRevealPwd ? hidePwdImg : showPwdImg}
                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                    />
                </div>
                <button type="submit" onClick={(e) => validateStudent(e)} class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Studentlogin;