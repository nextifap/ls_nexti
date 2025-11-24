import { Link } from "react-router-dom";
import { livros } from "../../data/ListaLivros";

export function Livro({ livroId }) {
    const livro = livros.find((liv) => liv.id === livroId);

    if (!livro) {
        return <p>Livro não encontrado.</p>;
    }

    function Subir() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const tituloLimitado =
        livro.titulo.length > 30
            ? livro.titulo.slice(0, 30) + "..."
            : livro.titulo;

    return (
    
        <Link 
            className='flex flex-col justify-center items-center border rounded-lg p-2 bg-white shadow-[0_0_10px_-1px_rgba(0,0,0,0.15)] duration-700 hover:scale-105 text-center' 
            to={`/livro/${livro.id}`} 
            onClick={Subir}
        >
            <img src={livro.capa} alt={`Capa do livro ${livro.titulo}`}  className='w-[80%] h-[80%] rounded-lg mb-5 border'/>

            <p className='text-'>{tituloLimitado}</p>

            <span className='text-[#FFB363] text-lg'>Saiba Mais</span>
        </Link>
    );
}