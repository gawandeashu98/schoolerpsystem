import React from "react";
import { EnvelopeFill, Facebook, GeoAltFill, Instagram, PhoneFill, Telephone, TelephoneFill, Twitter } from 'react-bootstrap-icons';

const Aboutus = () => {
    return (
        <>
            <div style={{ width: "500px", float: "left", marginLeft: "100px" }}>
                <img class="d-block w-100" src="https://www.bvmtrmn.edu.in/images/S1.PNG" alt="First slide" />
            </div>
            <div style={{ width: "500px", float: "left", marginLeft: "50px", textAlign: "center", marginTop: "50px" }} >
                <span><h5>A vision to create CONDUCIVE ,COHERENT , ETHICAL learning environment and nurturing the IGNITED MINDS.</h5></span><br></br>
                <p>Founded in 1938 by Dr. K.M.Munshi, Bharatiya Vidya Bhavan is today an All India Intellectual, Cultural and Educational Movement dedicated to the twin task of interpreting the age old yet ageless message of our country, and of integrating our varied and vibrant culture with the changing needs of the present day world.</p>
            </div>
            <div style={{ width: "500px", float: "left", marginLeft: "100px", textAlign: "center", marginTop: "50px" }} >
                <p>Bharatiya Vidya Bhavan, Nagpur Kendra, established the first English Medium coeducational school in 1982 at Civil Lines, its second school in 1995 at Srikrishna Nagar, Wathoda and its third school in 2006 at Ashti, Nagpur.</p>
                <span><b>The fourth school established in July 2013 at Trimurti Nagar has now a strength of 2363 students and runs classes from Nursery to Std.X. The school has staff strength of 109 (Teaching and Non-teaching).</b></span>
            </div>
            <div style={{ width: "500px", float: "left", marginLeft: "50px", marginTop: "10px" }}>
                <img class="d-block w-100" src="https://www.bvmtrmn.edu.in/images/abt2.jpg" alt="First slide" />
            </div>
            <div style={{ width: "500px", float: "left", marginLeft: "100px", marginTop: "10px" }}>
                <img class="d-block w-100" src="https://www.bvmtrmn.edu.in/images/S2.PNG" alt="First slide" />
            </div>
            <div style={{ width: "500px", float: "left", marginLeft: "50px", textAlign: "center", marginTop: "50px" }} >
                <p>The performance of the school is worth appreciating as the school was applauded for its performance and contribution towards the community services, creating social awareness by their well planned co-curricular activities and was RANKED 2nd under the Secondary School Category and was also RANKED 9TH in the All India Cocurricular Activities by the Bharatiya Vidya Bhavan’s Shikshan Bharati among the 87 schoolsof Bharatiya Vidya Bhavan.</p>
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

export default Aboutus;