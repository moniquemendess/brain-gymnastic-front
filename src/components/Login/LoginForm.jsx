import "./LoginForm.css";
import { useState } from "react";
import { login } from "../../services/User.service";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(formData);

      if (data.token) {
        console.log("welcome to Brain Gynmastic");

        // Armazenar token no localStorage para persistência entre sessões
        localStorage.setItem("token", data.token);

        // Atualizar o estado do usuário no contexto de autenticação
        setUser({ token: data.token });

        // Redirecionar usuário para a página de conteúdo
        navigate("/contentPage");
      } else {
        setError("Login falhou: Usuário não verificado");
        console.log("Resposta completa:", data);
      }
    } catch (error) {
      setError("Erro ao fazer login: Verifique suas credenciais.");
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
            value={formData.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            required
          />

          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            required
          />
          <FaLock className="icon" />
        </div>
        {error && <div className="error-message">{error}</div>}

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
