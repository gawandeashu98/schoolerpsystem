import React from "react";
import { EnvelopeFill, Facebook, GeoAltFill, Instagram, PhoneFill, Telephone, TelephoneFill, Twitter } from 'react-bootstrap-icons';
import '../StudentList.css';

const ManagementCommittee = () => {
    return (
        <>
            <div className="main3">
                <h4 style={{textAlign:"center"}}>
                List of School Managing Committee</h4>
                <table className="table table-bordered table-striped">
                    <thead class="thead-dark">
                        <th >MEMBER NAME</th>
                        <th>DESIGNATION IN SMC</th>
                        <th>OCCUPATION WITH ADDRESS</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Prof. Q. H. Jeevaji</b></td>
                            <td>	Member</td>
                            <td>	Educationist & Management Expert</td>
                        </tr>
                        <tr>
                            <td><b>Dr. Sunanda Sonarikar</b></td>
                            <td>	Member (SMC)</td>
                            <td>Educationist & Social Worker</td>
                        </tr>
                        <tr>
                            <td><b>Shri. Rajendra Purohitr</b></td>
                            <td>	Member (SMC)</td>
                            <td>Managing Partner & General Manager, ‘The Hitavada’, English Daily</td>
                        </tr> 
                        <tr>
                            <td><b>Dr. A.K. Mukherjee</b></td>
                            <td>	Member (SMC)</td>
                            <td>	Medical Practitioner</td>
                        </tr> 
                        <tr>
                            <td><b>Dr. Rajendra Chandak</b></td>
                            <td>	Member (SMC)</td>
                            <td>	Medical Practitioner</td>
                        </tr> 
                        <tr>
                            <td><b>Smt. Padmini Jog</b></td>
                            <td>	Member (SMC)</td>
                            <td>	Social Worker, Pranayam & Yoga Expert</td>
                        </tr> 
                        <tr>
                            <td><b>Smt. A. Shastri</b></td>
                            <td>	Member (SMC)</td>
                            <td>	Director, Bharatiya Vidya Bhavan, Nagpur Kendra, Nagpur.</td>
                        </tr>
                        <tr>
                            <td><b>Dr. M. B. Chandak</b></td>
                            <td>	Member (SMC)</td>
                            <td>H.O. D. Computer Science Dept., Ramdeobaba College of Engg. and Mgt. Nagpur.</td>
                        </tr>
                        <tr>
                            <td><b>Shri Pramod Parate</b></td>
                            <td>Principal of other CBSE School</td>
                            <td>Principal, Kendriya Vidyalaya, CRPF School, Hingna Road, Nagpur.</td>
                        </tr>
                        <tr>
                            <td><b>Shri. Arvind Kumar</b></td>
                            <td>Principal of other CBSE School</td>
                            <td>Principal, Kendriya Vidyalaya, Vayusena Nagar, Nagpur -440007.</td>
                        </tr>
                        <tr>
                            <td><b>Dr. Atul Pathak</b></td>
                            <td>Parent Representative</td>
                            <td>	Associate Professor – Indian Institute of Management, Nagpur.</td>
                        </tr>
                        <tr>
                            <td><b>Dr. Prajakta Kaduskar</b></td>
                            <td>Parent Representative</td>
                            <td>Consultant Child & Adolescent Health and Psychologist.</td>
                        </tr>
                        <tr>
                            <td><b>Smt. Manisha Baheti</b></td>
                            <td>	Teacher Representative</td>
                            <td>	Primary Teacher – Hindi, Bhavan’s B. P. Vidya Mandir, Trimurti Nagar, Nagpur-22.</td>
                        </tr>
                        <tr>
                            <td><b>Smt. Charanjit Kaur Khaira</b></td>
                            <td>	Teacher Representative</td>
                            <td>Pre-Primary Teacher, Bhavan’s B. P. Vidya Mandir, Trimurti Nagar, Nagpur-22.</td>
                        </tr>
                        <tr>
                            <td><b>Smt. Parwati G. Iyer</b></td>
                            <td>Member Secretary (SMC)</td>
                            <td>	Principal, Bhavan’s B. P. Vidya Mandir, Trimurti Nagar, Nagpur-22</td>
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

export default ManagementCommittee;