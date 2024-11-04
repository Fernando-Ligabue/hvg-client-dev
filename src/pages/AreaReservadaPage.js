import React, { useState, useEffect } from "react";
import "./AreaReservadaPage.css";
import AnimaisTabela from "../components/AnimaisTabela";
import logo from "../assets/hvglogo.png";
import ml from "../assets/mustache-l.png";
import mr from "../assets/mustache-r.png";
import bg from "../assets/modal-bg.png";
import imageslide from "../assets/imageslide.png";
import titulotabela from "../assets/titulotabela.png";

import ClinicaGeral from "../components/ClinicaGeral";
import ConsultaEspecial from "../components/ConsultaEspecial";
import { LogOut, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { userDetails } from "../lib/constants";

const AreaReservadaPage = () => {
  const navigate = useNavigate();
  const [modalUser, setModalUser] = useState(false);

  const handleOpenModal = () => {
    setModalUser(!modalUser);
  };

  const user = userDetails;

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Sabias que...",
      text: "a saúde da pele e do pelo do seu animal é fundamental?",
      image: imageslide,
    },
    {
      title: "Sabias que...",
      text: "Os cuidados regulares com a higiene do seu animal podem prolongar a vida.",
      image: imageslide,
    },
    {
      title: "Sabias que...",
      text: "Os cuidados regulares com a higiene do seu animal podem prolongar a vida.",
      image: imageslide,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const [activeComponent, setActiveComponent] = useState("marcarConsulta");

  const showComponent = (component) => {
    setActiveComponent(component);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <main className="wrapper-area-reservada">
      <div className="container-area-reservada">
        <header className="header-area-reservada">
          <div className="header-area-reservada-lin1">
            <img src={logo} alt="Logotipo" className="logo" />
            <div className="user-info">
              <span className="welcome-message">
                Bem-vindo(a),{" "}
                <span className="user-name" onClick={handleOpenModal}>
                  {user.nome}
                </span>
              </span>
              <div className="user-options">
                <button className="client-area-button">Área de Cliente</button>
                <LogOut
                  className="logout-icon"
                  size={36}
                  onClick={handleLogout}
                />
              </div>
            </div>
          </div>
          <div className="header-area-reservada-lin2">
            <div className="slide">
              <div className="slide-row">
                <div className="slide-column">
                  <h3 className="slide-title">{slides[currentIndex].title}</h3>
                  <p className="slide-text">{slides[currentIndex].text}</p>
                </div>
                <div>
                  {slides[currentIndex].image && (
                    <img
                      src={slides[currentIndex].image}
                      alt="Pegadas"
                      className="paw-image"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </header>
        <img className="titulotabela" src={titulotabela} alt="HVG" />

        <AnimaisTabela />

        <div className="buttons-container">
          <button
            className={`action-button ${
              activeComponent === "clinicaGeral" ? "active" : ""
            }`}
            onClick={() => showComponent("clinicaGeral")}
          >
            Clínica Geral
          </button>

          <button
            className={`action-button ${
              activeComponent === "consulta-especial" ? "active" : ""
            }`}
            onClick={() => showComponent("consulta-especial")}
          >
            Consulta Especialização
          </button>
        </div>

        {/* Renderiza o componente ativo com base no estado */}
        {activeComponent === "clinicaGeral" && <ClinicaGeral />}
        {activeComponent === "consulta-especial" && <ConsultaEspecial />}

        {/* <div className="footer">
                Footer
            </div> */}
      </div>
      <footer className="footer-area-reservada"></footer>
      {modalUser && (
        <div className="user-modal">

          <div className="user-modal-content">
              <X size={24} className="close-modal" onClick={handleOpenModal} />

              <div className="content-right">
                <div className="wrapper-username">
                  <img src={ml} width="25" alt="Mustache" />
                  <h4>{user.nome}</h4>
                  <img src={mr} width="25" alt="Mustache" />
                </div>
                <div className="user-info-field">
                  <small>Email</small>
                  <p>{user.email.toUpperCase()}</p>
                </div>
                <div className="user-info-field">
                  <small>Telemóvel</small>
                  <p>{user.phone.toUpperCase()}</p>
                </div>
                <div className="user-info-field">
                  <small>Morada</small>
                  <p>{user.morada.toUpperCase()}</p>
                </div>
              </div>

              <div className="content-left">
                <img className="img-content-right" src={bg} alt="HVG" />
              </div>
            </div>

        </div>
      )}
    </main>
  );
};

export default AreaReservadaPage;
