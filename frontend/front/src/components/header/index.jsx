import Logo from '../../assets/img/logo-ls.svg';
import LogoP from "../../assets/img/logo-ls.png"
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Icon from '../../assets/img/icon-profile.svg';
import Search from '../../assets/img/search.svg';
import Filter from '../../assets/img/filter.svg'

import Swal from 'sweetalert2';

import './style.css';


export function Header () {

  const mostrarAlerta = () => {
      Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Essa funcionalidade está indisponível no momento. Estamos trabalhando para resolver isso",
    });
  };

  const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    setTimeout(() => {
      Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Essa funcionalidade está indisponível no momento. Estamos trabalhando para resolver isso",
      });
    }, 10); 
  }
};

  return (
    <header className='header'>
      <picture>
        <source media="(max-width: 768px)" srcSet={LogoP} />
        <source media="(min-width: 769px)" srcSet={Logo} />      
        <img src={Logo} alt="Logo Learn skills" />
      </picture>

      <div className='inputs'>
        <div className="input-search">
            <input type="text" placeholder='Pesquise por...' onKeyDown={handleKeyDown}/>
            <img src={Search} alt="" />
        </div>

        <div className='input-select'>
          <select name="" id="" defaultValue="">
              <option value="" disabled hidden></option>
              <option value="romance">Romance</option>
              <option value="fantasia">Fantasia</option>
              <option value="ficcao-cientifica">Ficção científica</option>
              <option value="misterio-suspense">Mistério / Suspense</option>
              <option value="terror-horror">Terror / Horror</option>
              <option value="contos">Contos</option>
          </select>
          <img src={Filter} alt="" />
        </div>

      </div>

      <div className="profile">
        <p><Link onClick={mostrarAlerta}>Entrar</Link> | <Link onClick={mostrarAlerta}>Cadastrar</Link></p>
        <img src={Icon} alt="" />
      </div>

        
    </header>
  );
}



/*

<div className="profile">
    <img src={Icon} alt="" />
    <p>Bem-vindo visitante, <br />  
          <Link onClick={mostrarAlerta}>Faça o Login</Link> ou <Link onClick={mostrarAlerta}>Cadastre-se!</Link>
    </p>
</div>

*/