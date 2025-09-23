import './styles.css'
import { Link } from "react-router-dom";

import { livros } from "../../data/ListaLivros";

export function Livro ({ capa, nome, className, livroId}) {

    const livro = livros.find((liv) => liv.id === livroId);

    if (!livro) {
        return <p>Livro não encontrado.</p>;
    }

    function Subir() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <Link className={`container-livro ${className || ''}`} to={`/livro/${livro.id}`} onClick={Subir()}>     
            <img src={capa} alt="" />
            <p>{nome}</p>
            <Link to={`/livro/${livro.id}`} className='ancoragem'>Saiba Mais</Link>
        </Link>
                   
    );
}

