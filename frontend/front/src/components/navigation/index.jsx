import { Link } from 'react-router-dom';

export function Navigation () {
  return (
    <nav className='flex items-center justify-center bg-[#213E60] p-5'>

      <ul className='flex justify-around items-center w-full text-white text-lg'>

        <Link to={'/'}>
          <li className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-700 hover:after:w-full">Home</li>
        </Link>

        <Link to={'/sobre-nos'}>
          <li className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-700 hover:after:w-full">Institucional</li>
        </Link>

        <Link to={'/estante-virtual'}>
          <li className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-700 hover:after:w-full">Estante</li>
        </Link>

        <Link to={'/nossos-servicos'}>
          <li className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-700 hover:after:w-full">Serviços</li>
        </Link>

      </ul>

    </nav>
  );
}

