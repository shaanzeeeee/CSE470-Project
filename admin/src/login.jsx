import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'



function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                // Handle successful login (e.g., redirect to dashboard)
                navigate('/Home');
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("An error occurred during login");
        }
    };

    return (

        <div>
            <link rel="stylesheet" type="text/css" href="/css/login/styles.css" />



            <img
                className="logo-image-login"
                src="/css/login/images/logo-image.png"
                alt="Thikachi logo"
            />

            <img
                className="login-image"
                src="/css/login/images/login-image.svg"
                alt="Thikachi login image"
            />

            <div className="login-container">
                <h2 className="title">Sign in</h2>
                <form
                    className="login-form"
                    onSubmit={handleSubmit}
                    name="login"
                    id="login"
                >
                    <div className="input-field-1">
                        <FontAwesomeIcon className="envelope" icon={faEnvelope} />
                        <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleChange} required />
                    </div>

                    <div className="input-field-2">
                        <FontAwesomeIcon className="lock" icon={faLock} />

                        <input
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            id="password"
                            required
                        />
                    </div>

                    <button className="login-button" type="submit">
                        Login
                    </button>


                    {error && <p className="error-message">{error}</p>}


                </form>

            </div>

            <div className="new-here">
                <h3>New Here?</h3>
                <p>Create your account by filling out the form with your email and</p>
                <p>secure password to unlock all the features of our website.</p>

                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>

    );
}

export default Login;
