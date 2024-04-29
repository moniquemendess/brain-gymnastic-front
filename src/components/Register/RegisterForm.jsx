import React from "react";
import "./RegisterForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const RegisterForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="E-mail" required />
          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="ConfirmPassword" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />I agree to the terms & conditions
          </label>
        </div>

        <button type="submit">Register</button>
        <div className="register-link">
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};
