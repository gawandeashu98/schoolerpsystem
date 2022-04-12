import React from "react";
import 'bootstrap';
import './Home.css';
import { EnvelopeFill, Facebook, GeoAltFill, Instagram, PhoneFill, Telephone, TelephoneFill, Twitter } from 'react-bootstrap-icons';
import logo from './home-page-banner.jpg';
import logo1 from './about-2.jpg';
import logo2 from './about-us1.jpg';
import logo3 from './about-3.jpg';
import logo4 from './independence-dayRE.jpg';

const Home = () => {
    return (
        <div>
            <div >
                <img class="d-block w-100" src={logo} alt="home" />
            </div>
            <div style={{ width: "500px", float: "left", marginTop: "100px", position: "absolute", marginLeft: "250px",border:"3px solid rgb(250, 170, 22)" }}>
                <img class="d-block w-100" src={logo3} alt="hom2" />
            </div>
            <div style={{ width: "300px", float: "left", marginTop: "50px", position: "absolute", marginLeft: "100px",border:"3px solid rgb(250, 170, 22)" }}>
                <img class="d-block w-100" src={logo2} alt="hom2" />
            </div>

            <div style={{ width: "600px", float: "left", marginTop: "300px", marginLeft: "200px", position: "relative",border:"3px solid rgb(250, 170, 22)" }}>
                <img class="d-block w-100" src={logo1} alt="home1" />
                {/* <img class="d-block w-100" src={logo2} alt="hom2" style={{ width: "250px", float: "left", marginTop: "50px" }} /> */}
                <br></br><br></br>
            </div>

            <div class="" style={{ width: "400px", float: "left", marginTop: "150px", marginLeft: "50px" }}>
                <span class="content">BHAVANS INTERNATIONAL SCHOOL is one of the best-equipped schools in India with facilities that support excellence in all areas. The infrastructure has been suitably planned to accommodate learning and all round development of the child. Bhavans is perceived as a school apart; for it has a fine blend of academics, sports and culture. Jain International School provides the best possible education to its students. The main objective is to ensure that the youthful energies of all students are channelized towards holistic development.</span>
            </div>

            <div style={{ width: "700px", float: "left", marginLeft: "100px", textAlign: "left", marginTop: "50px",padding:"60px" }}>
                <h3><span style={{color:"rgb(250, 170, 22)"}}>Special</span> Special Attention for Every <span style={{color:"rgb(250, 170, 22)"}}>Child</span></h3>
                <hr></hr>
                <p>To us, every child is a flower ready to bloom. We focus on knowing your child’s interests and potential strengths to develop him or her into a well-rounded individual. Paying mindful attention to every child is our strength; as we know, how important it is for them to feel valued and appreciated. We specialize in paying special attention to every child and develop their individual talents while working on their education.</p>
            </div>
            <div style={{width:"400px",float:"right",marginTop:"50px",marginRight:"100px"}}>
                <img style={{borderRadius:"50%",border:"3px solid rgb(250, 170, 22)"}} class="d-block w-100" src="https://www.jaininternationalnagpur.edu.in/images/home/specialAttentionNEW.jpg" alt="home1" />
               
            </div>
            <div style={{ width: "400px", textAlign: "center" }}>              
                <h3>Recent Events</h3>              
            </div>

            <div>
                <br></br>
                <hr></hr>
                <div class="card-deck" style={{ width: "1200px", margin: "auto" }}>
                    <hr></hr>
                    <div class="card">
                        <img class="card-img-top" src={logo4} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Independence Day Celebrations at Bhavans International School</h5>
                            <p class="card-text">Bhavans International School celebrated the 73rd India’s Independence with patriotic fervour and a well coordinated programme.</p>
                            <p>The tri-colour was unfurled by the Chief Guests – Sgt. Naresh Sachan and Mrs. Shobhana Sachan (parents of 2018-19 academic session topper – Ayush Sachan), along with the Director of the school – Mr. Anuj Badjate and other members of the Management. A cultural programme was also organized .</p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://www.jaininternationalnagpur.edu.in/images/home/womens-workshopRE.jpg" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Teachers Workshop on Preventive Healthcare for Females</h5>
                            <p class="card-text">Bhavans International school , in keeping with its ideology to take care of the well being of all its members organized a Worshop for the female teachers on “Preventive Health care for Females”. The workshop was held on Friday , 16th August, 2019, Friday. Dr. Sumeet Baheti from Kingsway Hospital conducted this workshop.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://www.jaininternationalnagpur.edu.in/images/home/Alumni-MeetRE.jpg" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Alumni Meet</h5>
                            <p class="card-text">Bhavans International School Old Students Association (BOSA )MEET 2019 On 3rd August, 2019 Bhavans International School organized the BOSA Meet 2019. More than 100 students attended and shared their memories and thoughts about their school life. It was a great opportunity for all the ex-students to meet up with their friends, teachers and share experiences. An entertainment programme followed by dinner was organized for them by the Alumni Association of the school.</p>
                        </div>
                    </div>
                </div>
                <br></br>
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
        </div>
    );
}

export default Home;