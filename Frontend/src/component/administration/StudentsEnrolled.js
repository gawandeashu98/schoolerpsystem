import React from "react";
import { EnvelopeFill, Facebook, GeoAltFill, Instagram, PhoneFill, Telephone, TelephoneFill, Twitter } from 'react-bootstrap-icons';
import '../StudentList.css';

const StudentsEnrolled = () => {
    return (
        <>
            <div className="main3">
                <h4 style={{ textAlign: "center" }}>
                    Students Enrolled</h4>
                <table className="table table-bordered table-striped">
                    <thead class="thead-dark">
                        <th >CLASS</th>
                        <th>	NO. OF SECTIONS</th>
                        <th>TOTAL NO. OF STUDENTS</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>PRIMARY</b></td>
                            <td>	10</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Std.I</td>
                            <td>	2</td>
                            <td>92</td>
                        </tr>
                        <tr>
                            <td>Std.II</td>
                            <td>	2</td>
                            <td>91</td>
                        </tr>
                        <tr>
                            <td>Std.III</td>
                            <td>	2</td>
                            <td>92</td>
                        </tr>
                        <tr>
                            <td>Std.IV</td>
                            <td>	2</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>Std.V</td>
                            <td>	2</td>
                            <td>97</td>
                        </tr>
                        <tr>
                            <td><b>SECONDARY</b></td>
                            <td>	10</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Std.VI</td>
                            <td>	2</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Std.VII</td>
                            <td>	2</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Std.VIII</td>
                            <td>	2</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Std.IX</td>
                            <td>	2</td>
                            <td>88</td>
                        </tr>
                        <tr>
                            <td>Std.X</td>
                            <td>	2</td>
                            <td>86</td>
                        </tr>
                        <tr>
                            <td><b>TOTAL STRENGTH</b></td>
                            <td>	</td>
                            <td>910</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ width: "70%", padding: "20px", display: "inline-block" }}>
                <div style={{ float: "left", marginLeft: "200px" }}>
                    <h3>Quick Links</h3>
                    <a href="/#" class="item-has-icon icon-position-left" style={{ color: "black" }}><i style={{ paddingRight: "20px", fontSize: "20px" }}><Facebook /></i><span>Facebook</span></a><br></br>
                    <a href="/#" class="item-has-icon icon-position-left" style={{ color: "black" }}><i style={{ paddingRight: "20px", fontSize: "20px" }}><EnvelopeFill /></i><span>Gmail</span></a><br></br>
                    <a href="/#" class="item-has-icon icon-position-left" style={{ color: "black" }}><i style={{ paddingRight: "20px", fontSize: "20px" }}><Twitter /></i><span>Twitter</span></a><br></br>
                    <a href="/#" class="item-has-icon icon-position-left" style={{ color: "black" }}><i style={{ paddingRight: "20px", fontSize: "20px" }}><Instagram /></i><span>Instagram</span></a>
                </div>
                <div style={{ float: "left", marginLeft: "200px" }}>
                    <h3>Contact Us</h3>
                    <p><i style={{ paddingRight: "10px", fontSize: "20px" }}><GeoAltFill /></i><span>Address:   AddressBhange Layout, Bhamti,  </span></p>
                    <p style={{ paddingLeft: "30px" }}>Trimurti Nagar, Nagpur-440022.</p>
                    <p><i style={{ paddingRight: "10px", fontSize: "20px" }}><TelephoneFill /></i><span>Landline: 0712-2230142, 0712-2230145</span></p>
                    <p><i style={{ paddingRight: "10px", fontSize: "20px" }}><PhoneFill /></i><span>Mobile: 2658754215</span></p>
                    <p><i style={{ paddingRight: "10px", fontSize: "20px" }}><EnvelopeFill /></i><span>Gmail: eschool@gmail.com</span></p>
                </div>
            </div><br></br>
            <div class="card text-center" style={{ padding: "1rem" }}>
                <div class="card-footer text-muted" style={{ textAlign: "center" }}>
                    <p>&copy; Copyrights 2022. Institute for Advanced Computing & Software Development,Akurdi</p>
                </div>
            </div>
        </>
    );
}

export default StudentsEnrolled;