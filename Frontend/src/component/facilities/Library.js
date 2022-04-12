import React from "react";
import { EnvelopeFill, Facebook, GeoAltFill, Instagram, PhoneFill, Telephone, TelephoneFill, Twitter } from 'react-bootstrap-icons';
import logo from '../library.jpg';
import logo1 from '../lib5.jpg';
import logo2 from '../library4.jpg';

const Library = () => {
    return (
        <>
            <div >
                <img class="d-block w-100" src={logo} alt="library" />
            </div>
            <div style={{ width: "1100px", marginLeft: "150px", textAlign: "left", marginTop: "50px" }}>
                <p>A school library is that magical space where ideas brew, knowledge is shared and strong foundations are made. The library at Bhavans, is a knowledge resource center where students access information through books as well as the internet.
                </p>
                <br></br>
                <p>The library houses a vast collection of books ranging from textbooks, informative books to fictional books. Books are available as print as well as electronic. Our library is a temple of learning that develops imagination and life-long learning skills.</p>
            </div>
            <div style={{ width: "500px", float: "left", marginLeft: "100px", textAlign: "left", marginTop: "50px",backgroundColor:"rgb(219, 219, 219)",padding:"60px" }}>
                <h2>Value learning</h2>
                <hr></hr>
                <h5>Building blocks for a strong foundation</h5><br></br>
                <p>Our library is designed to provide information and knowledge that are vital to coping in today’s fast-paced world in addition to regular learning. We ensure that information is accessible easily and there are multiple sources to same information. We have built our collection carefully by including good quality books . We also stock our library with reference material in the form of periodicals, journals and smart-learning multimedia CDs.</p>
            </div>
            <div style={{ width: "600px", float: "left",marginTop:"250px"}}>
                <img class="d-block w-100" src={logo1} alt="library1" />
                <br></br><br></br>
            </div>
            <div style={{ width: "600px", float: "left", marginTop: "50px", marginLeft: "150px"}}>
                <img class="d-block w-100" src={logo2} alt="library2" />
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
            <div style={{ width: "500px", float: "left",textAlign: "left", marginTop: "60px", backgroundColor: "rgb(219, 219, 219)", padding: "60px" }}>
                <h2>An extra mile</h2>
                <hr></hr>
                <p>The library is equipped with e-learning resources in addition to traditional books. Regular reading is encouraged in our curriculum. We push students to share ideas, get creative and evolve creatively. The library frequently conducts activities that inspire creativity and a yearning for better learning in young minds. The school library strives to equip students with skills that will help them throughout their lives and instill qualities of a responsible citizen into them.</p>
                
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

export default Library;