import React, { useState } from "react";
import JBpic from "../images/JBpic.jpg";

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
                            <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
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
                        <h3 class="mt-4">Some Links</h3>
                        <p>Some links using bootstrap</p>
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <hr class="d-sm-none" />
                    </div>
                    <div class="col-sm-8">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Dec 7, 2020</h5>
                        <div class="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <h2 class="mt-5">TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2020</h5>
                        <div class="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
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