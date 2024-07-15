import "./LoginForm.css";
import { useState } from "react";
import { login } from "../../services/User.service";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });
  const [loginResponse, setLoginResponse] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      console.log("Formulário inválido");
      return;
    }
    try {
      const res = await login(datos);
      console.log("Resposta do servidor:", res);

      if (res.data?.user?.check === true) {
        console.log("Login bem-sucedido! Redirecionando para /contentPage");
        navigate("/contentPage");
      } else {
        console.log("Login falhou: Usuário não verificado");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

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
