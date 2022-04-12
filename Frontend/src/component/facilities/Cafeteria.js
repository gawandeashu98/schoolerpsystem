import React from "react";
import { EnvelopeFill, Facebook, GeoAltFill, Instagram, PhoneFill, Telephone, TelephoneFill, Twitter } from 'react-bootstrap-icons';
import logo from '../canteen2.jpg';
import logo1 from '../canteen4.jpg';

const Cafeteria = () => {
    return (
        <>
            <div >
                <img class="d-block w-100" src={logo} alt="principal" />
            </div>
            <div style={{ width: "1100px", marginLeft: "150px", textAlign: "left", marginTop: "50px" }}>
                <p>The school has an organized system of dining throughout the year for the students. A well-balanced menu is designed in consultation with dieticians to ensure complete nourishment of the growing children.</p>
                <br></br>
                <p>The cafeteria offers a wide range of healthy snacks that also suit the tastes of young children. Unhealthy food is avoided at the cafeteria. At Bhavans, quality of the food and hygiene are top priorities and uncompromised on.</p>
            </div>
            <div style={{ width: "500px", float: "left", marginLeft: "100px", textAlign: "left", marginTop: "50px",backgroundColor:"rgb(219, 219, 219)",padding:"60px" }}>
                <h2>Varied choice</h2>
                <hr></hr>
                <h5>Healthy food is one of our highest priorities</h5><br></br>
                <p>A comprehensive and well-balanced menu is set for the week and shared with the parents at the beginning of each week. The menu is also based on the age of the students and their nutrition demands. It includes a variety of children’s favourite snacks in addition to whole meals.</p>
            </div>
            <div style={{ width: "600px", float: "left",marginTop:"250px"}}>
                <img class="d-block w-100" src={logo1} alt="principal" />
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

export default Cafeteria;