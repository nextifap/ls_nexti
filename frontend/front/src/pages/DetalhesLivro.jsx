import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import { Footer } from "../components/footer/index";
import { Header } from "../components/header/index";
import { Navigation } from "../components/navigation/index";
import { TitlePage } from "../components/title-page/index";


import { livros } from "../data/ListaLivros";

import ScrollToTop from "../features/ScrollTop";


/*{ id: , titulo: , organizadores: [], DOI: , descricao: , capa: }*/

function DetalhesLivro() {
    const { id } = useParams();
    const livro = livros.find((liv) => liv.id === parseInt(id));

    if (!livro) {
        return <h2>Livro não encontrado!</h2>;
    }

    return (
        <div className="">
            <ScrollToTop />
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            <TitlePage title={"Estante Virtual"} />

            <div className="p-6">
                <div className="flex md:flex-row flex-col md:items-start items-center bg-blue-100 px-12 py-6 rounded-2xl">
                    <figure className="">
                        <img src={livro.capa} alt={livro.titulo} className="w-[20rem] rounded-lg"/>
                    </figure>

                    <div className="p-12 bg-red-50">
                        <h1 className="text-3xl">{livro.titulo}</h1>
                        <p>Autor: {livro.autor}</p>
                        <p>DOI: {livro.doi}</p>
                        <h2>Descrição:</h2>
                        <p className="w-[60vw]">{livro.descricao}</p>
   
                        <Link to={`/ler-online/${livro.id}`} >
                            <button>Ler Online</button>
                        </Link>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DetalhesLivro;