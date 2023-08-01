import React from "react";

const login = () => {
    return (
        <div>
            <div class="fullScreen">
                <div class="loginContain">
                    <h1 class="title">Welcome</h1>
                    <form class="formulaire">
                        <div class="input success">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" />
                            <span class="mess">Valid email</span>
                        </div>
                        <div class="input error">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" />
                            <span class="mess">Incorrect password</span>
                        </div>
                        <div class="button">
                            <button type="submit" class="loginButton">Login</button>
                            <button type="reset" class="loginButton">Reset</button>
                        </div>
                        <a href="/" class="loginButton2">Home</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default login;