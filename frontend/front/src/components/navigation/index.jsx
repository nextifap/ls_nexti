import './style.css'

import { Link } from 'react-router-dom';

export function Navigation () {
  return (
    <nav>
      <ul>
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/sobre-nos'}>
          <li>Institucional</li>
        </Link>
        <Link to={'/estante-virtual'}>
          <li>Estante</li>
        </Link>
        <Link to={'/nossos-servicos'}>
          <li>Serviços</li>
        </Link>
      </ul>
    </nav>
  );
}
