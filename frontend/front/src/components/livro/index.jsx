import './styles.css'
import { Link } from "react-router-dom";
import { livros } from "../../data/ListaLivros";

export function Livro({ className, livroId }) {
    const livro = livros.find((liv) => liv.id === livroId);

    if (!livro) {
        return <p>Livro não encontrado.</p>;
    }

    function Subir() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <Link 
            className={`container-livro ${className || ''}`} 
            to={`/livro/${livro.id}`} 
            onClick={Subir}
        >     
            <img src={livro.capa} alt={`Capa do livro ${livro.titulo}`} />
            <p>{livro.titulo}</p>
            <span className='ancoragem'>Saiba Mais</span>
        </Link>
    );
}