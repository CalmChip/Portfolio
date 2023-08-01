import React from "react";
import JBpic from "../images/JBpic.jpg";
import bannerProg from "../images/bannerProg.jpg";

const home = () => {
    return (
        <div>
            <div class="p-5 bg-primary text-white text-center">
                <h1>My Portoflio</h1>
                <p>Resize this responsive bootstrap page to see the effect.</p> 
            </div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link disabled">Disabled</button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-sm-4">
                        <h2>About Me</h2>
                        <h5>Photo of me:</h5>
                        <img src={JBpic} class="fakeimg" alt='logo' />
                        <p class="webDev">Web developer</p>
                        <p>Javascript, HTML, CSS, React</p>
                        <h3 class="mt-4">Some Links example</h3>
                        <p>Some links using bootstrap, they will lead you through some example. </p>
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Parralax</a>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link disabled">Disabled</button>
                            </li>
                        </ul>
                        <hr class="d-sm-none" />
                    </div>
                    <div class="col-sm-8">
                        <h2>Web languages</h2>
                        <img src={bannerProg} class="img2" alt='bannerProg' />
                        <p style={{fontWeight: "bolder"}}>Web developement</p>
                        <p style={{fontWeight: "bold"}}>AEC graduate at Collège Lionel-Groulx in web developement.
                            This collegial degree taught me how to develop a fullstack web application and much much more!
                            If you wish to learn more, please contact me on my phone number: 450-508-9133.
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-5 p-4 bg-dark text-white text-center">
                <p>Made by: Jean-Bernard Le Blanc</p>
            </div>
        </div>
    );
}; 


export default home;