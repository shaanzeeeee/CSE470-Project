import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:3001/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                // Handle successful signup (e.g., redirect to login page)
                navigate('/login');
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Signup failed");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            setError("An error occurred during signup");
        }
    };
    


    return (
        <div>
            <link rel="stylesheet" type="text/css" href="/css/signup/styles.css" />

            <img
                className="logo-image-signup"
                src="/css/signup/images/logo-image.png"
                alt="Thikachi logo"
            />

            <img
                className="signup-image"
                src="/css/signup/images/signup-image.svg"
                alt="Thikachi signup image"
            />

            <div className="signup-container">
                <h2 className="title">Sign Up</h2>
                <form className="signup-form" onSubmit={handleSubmit} name="signup">
                    <div className="input-field-2">
                    <FontAwesomeIcon className="heart" icon={faHeart} />

                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div className="input-field-2">
                    <FontAwesomeIcon className="envelope" icon={faEnvelope} />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field-2">
                    <FontAwesomeIcon className="heart" icon={faHeart} />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className="signup-button" type="submit">
                        sign up
                    </button>
                    {error && <p className="error-message">{error}</p>}

                </form>
            </div>

            <div className="already-user">
                <h3>Already a user?</h3>
                <p>
                    Log in to your account by entering your registered email and password
                </p>
                <p>to access your profile and personalized content.</p>

                <Link to="/login">
                    <button className="signup-button" type="submit">
                        Login
                    </button>
                </Link>
                
            </div>
        </div>
    );
}

export default Signup;
