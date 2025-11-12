import './styles.css'
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

    return (
    
        <Link 
            className='flex flex-col justify-center items-center border rounded-2xl p-2 bg-white m-2 shadow-[0_0_10px_-1px_rgba(0,0,0,0.15)] duration-700 hover:scale-105 text-center' 
            to={`/livro/${livro.id}`} 
            onClick={Subir}
        >
            <img src={livro.capa} alt={`Capa do livro ${livro.titulo}`}  className='w-[80%] h-[80%] rounded-lg mb-5 border'/>

            <p className='text-xl'>{livro.titulo}</p>

            <span className='text-[#FFB363] text-lg'>Saiba Mais</span>
        </Link>
    );
}

/*
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-style: solid;
    border-width: 0.1px;
    border-color: rgba(158, 158, 158, 0.518);
    border-radius: 1vw;

    padding: 2%;

    width: 28%;
    height: auto;

    margin-bottom: 2vw;
    
    background: #ffffff;

    box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.15);
    -webkit-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.15);

    transition: 0.7s;

    text-decoration: none;
    color: black;
*/