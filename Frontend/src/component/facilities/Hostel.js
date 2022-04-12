import React from "react";
import { EnvelopeFill, Facebook, GeoAltFill, Instagram, PhoneFill, Telephone, TelephoneFill, Twitter } from 'react-bootstrap-icons';
import logo from '../hostel4.jpg';
import logo1 from '../hostel2.png';

const Hostel = () => {
    return (
        <>
            <div >
                <img class="d-block w-100" src={logo} alt="hotel1" />
            </div>
            <div style={{ width: "1100px", marginLeft: "150px", textAlign: "left", marginTop: "50px" }}>
                <p>Our hostel focusses on providing homely care and personal attention to our students. Safety of students is our priority and we ensure that our Bhavans hostel is a safe haven for our students. Hostel life promotes camaraderie, independence and responsibility amongst the students.</p>
                <br></br>
                <p>Different accommodation facilities based on number of students sharing each room are available at the Jain International School hostel. Each child is provided with a cot, a study table & chair, and a cupboard. In addition there are dedicated study and recreation areas in the hostels. Laundry is taken care of regularly. Nourishing meals are served timely in the most hygienic conditions. Student health and welfare is of paramount importance at Bhavans.</p>
            </div>
            <div style={{ width: "600px", float: "left", marginTop: "50px", marginLeft: "150px"}}>
                <img class="d-block w-100" src={logo1} alt="hostel2" />
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
            <div style={{ width: "500px", float: "left",textAlign: "left", marginTop: "60px", backgroundColor: "rgb(219, 219, 219)", padding: "60px" }}>
                <h2>Homely care</h2>
                <hr></hr>
                <p>We ensure a huge emotional support to our students and make them feel at home in the hostel. We make every effort to empower our students with life skills that will stay with them forever and mould them into complete human beings. The hostel is replete with all facilities that the students may require in their daily routines so they don’t feel wanting for anything important. Ragging is severely punished and students are protected from emotional or physical misconduct.</p>
                
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

export default Hostel;