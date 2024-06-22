import React from "react";
import Nav from "./Nav";
import pr1 from './images/pr1.webp';

const Home = () =>{
    return(
        <>
        <Nav/>
       <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="info_wrapper">
                    <div className="info_box1">
                    <span>Hello,</span>
                        <h1>I am Vikrant</h1>
                        <h4>Frontend Developer</h4>
                        <p>Hello I am a frontend developer with ability translate the design into functional front-end</p>
                        <button type="button" className="hire_btn">Hire Me</button>
                    </div>
                    <div className="info_box2">
                        <img src={pr1} alt=""/>
                    </div>
                </div>
            </div>
        </div>
       </div>
        </>
    )
}

export default Home;