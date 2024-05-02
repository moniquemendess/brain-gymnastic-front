import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RegisterUser } from "../../services/User.service";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log("Form Data Atualizado:", formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(
        "Dados do formulário que estão sendo enviados aqui:",
        formData
      );
      const response = await RegisterUser(formData);
      console.log(response); // Aqui você pode tratar a resposta do servidor
    } catch (error) {
      console.error("Ocorreu um erro ao tentar registrar o usuário:", error);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            name="userName"
            placeholder="Username"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="confirmpassword"
            placeholder="ConfirmPassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" required />I agree to the terms & conditions
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
