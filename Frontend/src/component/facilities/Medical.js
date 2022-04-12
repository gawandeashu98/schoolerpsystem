import React from "react";
import { EnvelopeFill, Facebook, GeoAltFill, Instagram, PhoneFill, Telephone, TelephoneFill, Twitter } from 'react-bootstrap-icons';
import logo from '../medical5.jpg';
import logo1 from '../medical4.jpg';
import logo2 from '../medical3.jpg';

const Medical = () => {
    return (
        <>
            <div >
                <img class="d-block w-100" src={logo} alt="medical" />
            </div>
            <div style={{ width: "1100px", marginLeft: "150px", textAlign: "left", marginTop: "50px" }}>
                <p>The school is equipped with medical facilities and qualified medical staff to take care of medical emergencies. Our resident medical staff is available 24x7 to take care of the health care needs and routine ailments of our students proficiently. Any medical issues, small or big, are immediately communicated to the Principal and parents of the student.</p>

            </div>
            <div style={{ width: "500px", float: "left", marginLeft: "100px", textAlign: "left", marginTop: "50px", backgroundColor: "rgb(219, 219, 219)", padding: "60px" }}>
                <h2>Health first</h2>
                <hr></hr>
                <h5>Caring for the ailing child</h5><br></br>
                <p>At Bhavans, trained nurses are on duty to administer to medical emergencies any time of the day. Our staff nurse is skilled in delivering first aid and caring for children’s and day to day problems. There is a comfortable medical room on the ground floor with basic medical facilities and a wheelchair. In case of a medical emergency, the principal and parents of the student are informed immediately and the child is shifted to either the medical room or to the nearest hospital, St. Joseph’s Hospital, 3kms away. A school vehicle is always stationed in school to shift a child to</p>
            </div>
            <div style={{ width: "600px", float: "left", marginTop: "250px" }}>
                <img class="d-block w-100" src={logo1} alt="medical1" />
                <br></br><br></br>
            </div>
            <div style={{ width: "600px", float: "left", marginTop: "50px", marginLeft: "100px" }}>
                <img class="d-block w-100" src={logo2} alt="medical2" />
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
            <div style={{ width: "500px", float: "left", textAlign: "left", marginTop: "60px", backgroundColor: "rgb(219, 219, 219)", padding: "60px" }}>
                <h2>Health education</h2>
                <hr></hr>
                <h5>"Healthy isn't a goal. It is a way of living."</h5><br></br>
                <p>School is the right place and time to inculcate good health practices and positive health care. At JIS, we ensure that right health education is imparted to the students and a regular health regime is followed. We take special lectures on hygiene and health routinely to introduce children to good health practices. We also conduct health checkups including oral health examinations to keep track of our students’ oral and general health.</p>
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

export default Medical;