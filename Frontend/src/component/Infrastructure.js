import React from "react";
import { EnvelopeFill, Facebook, GeoAltFill, Instagram, PhoneFill, Telephone, TelephoneFill, Twitter } from 'react-bootstrap-icons';
import './StudentList.css';

const Infrastructure = () => {
    return (
        <>
            <div className="main3">
                <h4>
                    DETAILS REGARDING INFRASTRUCUTRE AVAILIBILITY</h4>
                <table className="table table-bordered table-striped">
                    <thead class="thead-dark">
                        <th >SR NO.</th>
                        <th>ROOMS</th>
                        <th>NO. OF ROOMS</th>
                        <th>AREA</th>
                        <th>SEATING CAPACITY</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1.
                            </td>
                            <td>No. of Class Rooms (12+30+4)</td>
                            <td>46</td>
                            <td>508.00 sq.ft.</td>
                            <td>40 Students</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>31</td>
                            <td>642.2 sq.ft.</td>
                        </tr>
                        <tr>
                            <td>
                                2.
                            </td>
                            <td>Laboratories</td>
                            <td></td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>i. Physics</td>
                            <td>01</td>
                            <td>642.2 sq.ft.</td>
                            <td>23 Students.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>ii. Biology</td>
                            <td>01</td>
                            <td>642.2 sq.ft.</td>
                            <td>23 Students.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>iii. Chemistry</td>
                            <td>01</td>
                            <td>642.2 sq.ft.</td>
                            <td>23 Students.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>iv. Maths</td>
                            <td>01</td>
                            <td>642.2 sq.ft.</td>
                            <td>46 Students.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>v. Computer Science</td>
                            <td>01</td>
                            <td>642.2 sq.ft.</td>
                            <td>46 Students.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>vi. Jr. Science</td>
                            <td>02</td>
                            <td>642.2 sq.ft.</td>
                            <td>46 Students.</td>
                        </tr>
                        <tr>
                            <td>
                                3.
                            </td>
                            <td>Language Room (Marathi)</td>
                            <td>01</td>
                            <td>500.00 sq.ft .</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>
                                4.
                            </td>
                            <td>Activity Room (Bal Mandir )</td>
                            <td>02</td>
                            <td>642.2 sq.ft.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>
                                5.
                            </td>
                            <td>	Sports Room (indoor games)</td>
                            <td>02</td>
                            <td>500sq.ft each</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>
                                6.
                            </td>
                            <td>	Principal's room</td>
                            <td>01</td>
                            <td>	263.94 sq.ft.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>
                                7.
                            </td>
                            <td>Staff room</td>
                            <td>	04</td>
                            <td>431.64 sq.ft. each.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>
                                8.
                            </td>
                            <td>Office room</td>
                            <td>	01</td>
                            <td>	701.72 sq.ft.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>
                                9.
                            </td>
                            <td>Reading room</td>
                            <td>	01</td>
                            <td>	1300sq.ft.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>
                                10.
                            </td>
                            <td>Any other rooms</td>
                            <td>	</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>
                                i)
                            </td>
                            <td>Store room (Sanitation)</td>
                            <td>	01</td>
                            <td>	28.06 sq.ft.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>
                                ii)
                            </td>
                            <td>	Electrical PanelRoom (Ground Floor)</td>
                            <td>	01</td>
                            <td>	86.1 sq.ft.</td>
                            <td>-</td>
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

export default Infrastructure;
