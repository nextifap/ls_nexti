import React, { useState } from "react";
import "../styles/CadastroDeLivro.css";
import logo from "../assets/img/logo3.svg";

function CadastroDeLivro() {
  const [autores, setAutores] = useState([""]);
  const [isPublic, setIsPublic] = useState(true);

  const addAutor = () => {
    setAutores([...autores, ""]);
  };

  const handleAutorChange = (index, value) => {
    const newAutores = [...autores];
    newAutores[index] = value;
    setAutores(newAutores);
  };

  const togglePublic = () => {
    setIsPublic(!isPublic);
  };

  return (
    <div className="container-cadastro">
      <div className="form-box">
        <img src={logo} alt="Learn Skills" className="logo" />
        <h2>Cadastre um livro</h2>

        <form>
          <label>Link da Amazon</label>
          <input
            type="text"
            placeholder="https://www.amazon.com.br/exemplo-do-livro"
          />

          <label>Título</label>
          <input type="text" placeholder="Digite o título do livro" />

          <label>Autor</label>
          <div className="autores-container">
            {autores.map((autor, index) => (
              <div key={index} className="autor-group">
                <input
                  type="text"
                  placeholder={`Autor ${index + 1}`}
                  value={autor}
                  onChange={(e) => handleAutorChange(index, e.target.value)}
                />
                {index === autores.length - 1 && (
                  <button
                    type="button"
                    className="add-autor"
                    onClick={addAutor}
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          <label>DOI</label>
          <input type="text" placeholder="Digite o DOI" />

          <label>Número de páginas</label>
          <input type="number" placeholder="Ex: 250" />

          <label>Categorias</label>
          <input type="text" placeholder="Ex: Programação, Java, Tecnologia" />

          <label>Descrição</label>
          <textarea
            placeholder="Explorando o Universo Java: Novas Fronteiras e Tendências"
          ></textarea>

          <label>Tipo de Documento</label>
          <select>
            <option value="">Selecione o tipo</option>
            <option value="ebook">eBook</option>
            <option value="livro">Livro</option>
            <option value="artigo">Artigo</option>
            <option value="outro">Outro</option>
          </select>

          <label>Visibilidade</label>
          <div className="toggle-container">
            <span className="toggle-label">
              {isPublic ? "Público" : "Privado"}
            </span>
            <div
              className={`toggle-switch ${isPublic ? "on" : "off"}`}
              onClick={togglePublic}
            >
              <div className="toggle-circle"></div>
            </div>
          </div>

          <div className="buttons">
            <button type="button" className="voltar">
              Voltar
            </button>
            <button type="button" className="enviar">
              Enviar para análise
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroDeLivro;
