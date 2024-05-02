import "./LoginForm.css";
import { useState } from "react";
import { login } from "../../services/User.service";
import { FaUser, FaLock } from "react-icons/fa";
import { Navigate } from "react-router-dom";

export const LoginForm = () => {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });
  const [loginResponse, setLoginResponse] = useState(null);
  const [loginOk, setLoginOk] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      console.log("no enviar");
      return;
    }
    try {
      const res = await login(datos);
      console.log(res);
      setLoginResponse(res);
      if (res.data?.user?.check === true) {
        setLoginOk(true);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setLoginResponse({ data: { user: { check: false } } });
    }
  };

  if (loginOk) {
    return <Navigate to="/content" />;
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={datos.email}
            placeholder="E-mail"
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={datos.password}
            placeholder="Password"
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
