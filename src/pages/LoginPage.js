import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components-form/TextInput";
import logo from "../assets/hvglogo.png";
import animaisloginfooter from "../assets/animaisloginfooter.png";
import "./LoginPage.css"; // Importa o CSS correspondente para estilos específicos
import { useEffect } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // Here you would add authentication logic
    console.log("Login Data:", loginData);
    navigate("/areareservada");
  };
  return (
    <div className="content-wrapper">
      <header className="header">
        <img className="logo" src={logo} alt="Logotipo" />
        <button className="client-area">Área de Cliente</button>
      </header>
      <div className="wrapper-bordered-container">
        <div className="bordered-container">
          <h2 className="login-title">Login</h2>
          <TextInput
            type="email"
            label="Email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
          <TextInput
            type="password"
            label="Palavra-passe"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
          <div className="container-login-button">
            <button className="login-button" onClick={handleLogin}>
              Entrar
            </button>
          </div>
        </div>
      </div>
      <footer>
        <div className="animais-wrapper">
          <img src={animaisloginfooter} alt="Animais" />
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
