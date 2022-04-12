import React from "react";
import 'bootstrap';
import './Login.css';

const Login = () => {
    return (
        <>
            <div class="login">
                <br></br>
                {/* <div class="admin">
                <div class="card text-white bg-info mb-3" style={{ maxWidth: "18rem" }}>
                    <div class="card-header"><h3>Admin Login</h3></div>
                    <div class="card-body">
                        <h5 class="card-title">Info card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/admin-login" class="btn btn-light">Login</a>
                        <a href="#" class="btn btn-light" style={{ marginLeft: "20px" }}>Sign Up</a>
                    </div>
                </div>
            </div> */}
                {/* <div class="student">
                <div class="card text-white bg-warning mb-3" style={{ maxWidth: "18rem" }}>
                    <div class="card-header"><h3>Student Login</h3></div>
                    <div class="card-body">
                        <h5 class="card-title">Warning card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/admin-login" class="btn btn-light">Login</a>
                        <a href="#" class="btn btn-light" style={{ marginLeft: "20px" }}>Sign Up</a>
                    </div>
                </div>
            </div> */}
                <div class="admin">
                    <div class="card" style={{ maxWidth: "18rem" }}>
                        <img class="card-img-top" src="https://st.depositphotos.com/2704315/3185/v/600/depositphotos_31854223-stock-illustration-vector-user-profile-avatar-man.jpg" alt="Card image cap" />
                        <div class="card-body">
                            <h4 class="card-title">Admin Login</h4>
                            <p class="card-text">For official use only</p>
                            <a href="/admin-login" class="btn btn-dark" style={{ width: "100%" }}>Login</a>
                        </div>
                    </div>
                </div>
                <div class="student">
                    <div class="card" style={{ maxWidth: "18rem" }}>
                        <img class="card-img-top" src="https://cdn.create.vista.com/api/media/small/132682182/stock-vector-student-graduation-uniform-icon" alt="Card image cap" />
                        <div class="card-body">
                            <h4 class="card-title">Student Login</h4>
                            <p class="card-text">Student section</p>
                            <a href="/student-login" class="btn btn-dark" style={{ width: "100%" }}>Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;