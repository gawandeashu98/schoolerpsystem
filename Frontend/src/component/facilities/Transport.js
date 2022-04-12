import React from "react";
import { EnvelopeFill, Facebook, GeoAltFill, Instagram, PhoneFill, Telephone, TelephoneFill, Twitter } from 'react-bootstrap-icons';
import logo from '../tarnsport.jpg';
import logo1 from '../bus1.png';
import logo2 from '../medical3.jpg';

const Transport = () => {
    return (
        <>
            <div >
                <img class="d-block w-100" src={logo} alt="transport" />
            </div>
            <div style={{ width: "1100px", marginLeft: "150px", textAlign: "left", marginTop: "50px" }}>
                <p>The school provides a well-organized and flexible transportation facility to students and staff members. The transportation is planned such that all sectors of the city are covered. Our buses weave an efficient network across the city.</p>
                <br></br>
                <p>The routes are clearly defined on main city roads and the focus is on the safety and security of our children. We ensure that students are brought to school and dropped back home under our vigilance safely. Parents are kept well-informed of the routes and timings.</p>
            </div>
            <div style={{ width: "500px", float: "left", marginLeft: "100px", textAlign: "left", marginTop: "50px", backgroundColor: "rgb(219, 219, 219)", padding: "60px" }}>
                <h2>Safe transport</h2>
                <hr></hr>
                <h5>Well-planned and safe travel to school</h5><br></br>
                <p>All the Bhavans school buses bus are equipped with a first -aid box and a drinking water keg. The buses are also fitted with fire extinguishers. The school tracks the movement of the buses.</p>
            </div>
            <div style={{ width: "600px", float: "left", marginTop: "200px" }}>
                <img class="d-block w-100" src={logo1} alt="bus" />
                <br></br><br></br>
            </div>



            <div style={{ width: "70%", padding: "30px", display: "inline-block" }}>
                <div style={{ float: "left", marginLeft: "200px" }}>
                    <h3>Quick Links</h3>
                    <a href="/#" class="item-has-icon icon-position-left" style={{ color: "black" }}><i style={{ paddingRight: "20px", fontSize: "20px" }}><Facebook /></i><span>Facebook</span></a><br></br>
                    <a href="/#" class="item-has-icon icon-position-left" style={{ color: "black" }}><i style={{ paddingRight: "20px", fontSize: "20px" }}><EnvelopeFill /></i><span>Gmail</span></a><br></br>
                    <a href="/#" class="item-has-icon icon-position-left" style={{ color: "black" }}><i style={{ paddingRight: "20px", fontSize: "20px" }}><Twitter /></i><span>Twitter</span></a><br></br>
                    <a href="/#" class="item-has-icon icon-position-left" style={{ color: "black" }}><i style={{ paddingRight: "20px", fontSize: "20px" }}><Instagram /></i><span>Instagram</span></a>
                </div>
                <div style={{ float: "left", marginLeft: "200px" }}>
                    <h3>Contact Us</h3>
                    <p><i style={{ paddingRight: "10px", fontSize: "20px" }}><GeoAltFill /></i><span>Address: Bhange Layout, Bhamti, Trimurti  </span></p>
                    <p style={{ paddingLeft: "30px" }}> Nagar, Nagpur-440022.</p>
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

export default Transport;