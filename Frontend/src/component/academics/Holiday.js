import React from "react";
import { EnvelopeFill, Facebook, GeoAltFill, Instagram, PhoneFill, Telephone, TelephoneFill, Twitter } from 'react-bootstrap-icons';
import '../StudentList.css';

const Holiday = () => {
    return (
        <>
            <div className="main3">
                <h4 style={{ textAlign: "left" }}>
                    Holiday List</h4>
                <table className="table table-bordered table-striped">
                    <thead class="thead-dark">
                        <th >S.NO</th>
                        <th>NAME OF THE FESTIVAL</th>
                        <th>DATE</th>
                        <th>DAY</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>New Year (Office)</td>
                            <td>01/01/2022</td>
                            <td>	Saturday</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Makar Sankranti</td>
                            <td>14/01/2021</td>
                            <td>	Friday</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Republic Day</td>
                            <td>26/01/2022</td>
                            <td>Wednesday</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>	Chhatrapati Shivaji Jayanti</td>
                            <td>19/02/2022</td>
                            <td>	Saturday</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Mahashivaratri</td>
                            <td>01/03/2022</td>
                            <td>	Tuesday</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>	Dhuliwandan</td>
                            <td>	18/03/2022</td>
                            <td>Friday</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>		Gudipadwa</td>
                            <td>	02/04/2022</td>
                            <td>	Saturday</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Mahaveer Jayanti & Ambedkar Jayanti</td>
                            <td>	14/04/2022</td>
                            <td>Thursday</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>	Good Friday</td>
                            <td>l5/04/2022</td>
                            <td>	Friday</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>	Ramzan Id</td>
                            <td>02/05/2022</td>
                            <td>	Monday</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Buddha Purnima</td>
                            <td>	16/05/2022</td>
                            <td>	Monday</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ width: "1100px", float: "left", marginLeft: "100px", textAlign: "left", marginTop: "10px" }}>
                <h4>Vacations:</h4><br></br>
                <ol>
                    <li><b>Summer Vacation:</b></li><br></br>
                    <li><b>Std I To Std VII</b> 10th May 2022 to 19th June 2022</li><br></br>
                    <li><b>Std VII, IX, X & XII</b> 10th May 2022 to 12th June 2022</li><br></br>
                </ol>
            </div>
            <div style={{ width: "1100px", float: "left", marginLeft: "100px", textAlign: "left", marginTop: "10px" }}>
                <h4>Note</h4><br></br>
                <p>The following festivals fall on Second Saturday & Sunday. Hence am not declared as holidays</p>
                <p>Shr Ram Navami 10/04/2022 : Sunday</p>
                <p>Maharashtra Day 01/05/2022 : Sunday</p>
                <br></br> <br></br> <br></br>
            </div>
            <div style={{ width: "70%", adding: "20px", display: "inline-block" }}>
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
            </div>f
        </>
    );
}

export default Holiday;