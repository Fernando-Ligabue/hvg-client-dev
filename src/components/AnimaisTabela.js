import React, { useState } from "react";
import "./AnimaisTabela.css"; 
import { mockAnimais } from "../lib/constants";
import { X } from "lucide-react";

const AnimaisTabela = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [showObservacoes, setShowObservacoes] = useState({});

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
    if (expandedRow === index) {
      setShowObservacoes({}); 
    } else {
      setShowObservacoes({ [index]: false }); 
    }
  };

  const toggleObservacoes = (index) => {
    setShowObservacoes((prev) => ({
      ...prev,
      [index]: !prev[index], 
    }));
  };

  return (
    <div className="animais-tabela-container">
      <table className="animais-tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>N.º do Chip</th>
            <th>Espécie</th>
            <th>Sexo</th>
            <th>Data de Nascimento</th>
            <th>Cor</th>
            <th>Histórico</th>
          </tr>
        </thead>
        <tbody>
          {mockAnimais.map((animal, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>{animal.nome}</td>
                <td>{animal.chip}</td>
                <td>{animal.especie}</td>
                <td>{animal.sexo}</td>
                <td>{animal.dataNascimento}</td>
                <td>{animal.cor}</td>
                <td className="actions">
                  <button
                    className={`ver-mais-button ${expandedRow === index ? "active" : ""}`}
                    onClick={() => toggleRow(index)}
                  >
                    {expandedRow === index ? "Voltar" : "Ver Mais"}
                  </button>
                </td>
              </tr>
              {expandedRow === index && (
                <tr>
                  <td colSpan="7" className="overlay">
                    <table className="more-information">
                      <thead>
                        <tr>
                          <th>Data</th>
                          <th>Serviço</th>
                          <th>Veterinário responsável</th>
                          <th>Observações</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p>{animal.historico.data}</p>
                          </td>
                          <td>
                            <p>{animal.historico.servico}</p>
                          </td>
                          <td>
                            <p>{animal.historico.veterinario}</p>
                          </td>
                          <td>
                            <span className={`saber-mais ${showObservacoes[index] ? "active-more" : ""}`} onClick={() => toggleObservacoes(index)}>
                             Saber mais
                            </span>
                          </td>
                        </tr>
                        {showObservacoes[index] && (
                          <tr>
                            <td colSpan="7">
                              <div className="container-infos">
                                <X size={24} className="close-info" onClick={() => toggleObservacoes(index)}/>
                                <p className="observations">Observações: {animal.historico.observacoes}</p>
                                </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimaisTabela;
