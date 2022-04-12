import React from "react";
import { EnvelopeFill, Facebook, GeoAltFill, Instagram, PhoneFill, Telephone, TelephoneFill, Twitter } from 'react-bootstrap-icons';

const Gallery = () => {
    return (
        <>
            <div style={{ width: "300px", float: "left", marginLeft: "150px" }}>
                <img class="d-block w-100" src="https://www.bvmtrmn.edu.in/images/school-at-glance/1.jpg" alt="1 img" />
            </div>
            <div style={{ width: "300px", float: "left", marginLeft: "60px" }}>
                <img class="d-block w-100" src="https://www.bvmtrmn.edu.in/images/school-at-glance/2.jpg" alt="2 img" />
            </div>
            <div style={{ width: "300px", float: "left", marginLeft: "60px" }}>
                <img class="d-block w-100" src="https://www.bvmtrmn.edu.in/images/school-at-glance/3.jpg" alt="3 img" />
            </div>
            <div style={{ width: "300px", float: "left", marginLeft: "150px",marginTop:"60px" }}>
                <img class="d-block w-100" src="https://www.bvmtrmn.edu.in/images/school-at-glance/22.jpg" alt="4 img" />
            </div>
            <div style={{ width: "300px", float: "left", marginLeft: "60px",marginTop:"60px" }}>
                <img class="d-block w-100" src="https://www.bvmtrmn.edu.in/images/school-at-glance/33.jpg" alt="5 img" />
            </div>
            <div style={{ width: "300px", float: "left", marginLeft: "60px",marginTop:"60px" }}>
                <img class="d-block w-100" src="https://www.bvmtrmn.edu.in/images/school-at-glance/6.jpg" alt="6 img" />
            </div>
            <div style={{ width: "300px", float: "left", marginLeft: "150px",marginTop:"60px" }}>
                <img class="d-block w-100" src="https://www.jaininternationalnagpur.edu.in/images/gallery/2019-2020/pre-primary/700_600/InternationalYogaDay.jpg" alt="7 img" />
            </div>
            <div style={{ width: "300px", float: "left", marginLeft: "60px",marginTop:"60px" }}>
                <img class="d-block w-100" src="https://www.jaininternationalnagpur.edu.in/images/gallery/2019-2020/secondary/700_600/TG1.jpg" alt="8 img" />
            </div>
            <div style={{ width: "300px", float: "left", marginLeft: "60px",marginTop:"60px" }}>
                <img class="d-block w-100" src="https://www.jaininternationalnagpur.edu.in/images/gallery/pre-primary/700_600/IamSpecialActivity3.jpg" alt="9 img" />
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

export default Gallery;