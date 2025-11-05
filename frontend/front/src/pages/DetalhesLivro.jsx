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
                <div className="flex md:flex-row flex-col md:items-start items-center px-12 py-6 rounded-2xl">
                    <figure className="">
                        <img src={livro.capa} alt={livro.titulo} className="w-[20rem] rounded-lg"/>
                    </figure>

                    <div className="p-12">
                        <h1 className="text-3xl">{livro.titulo}</h1>
                        <p>Autor: {livro.autor}</p>
                        <p>DOI: {livro.doi}</p>
                        <h2>Descrição:</h2>
                        <p className="w-[60vw]">{livro.descricao}</p>
   
                        <Link to={`/ler-online/${livro.id}`}>
                            <div className="relative overflow-hidden group w-fit">
                                <p className="relative bg-[#FFB363] text-[#2E2E2E] text-lg md:w-[25vw] w-full flex justify-center items-center p-5 rounded-[5rem] mt-5 border-[0.2rem] border-[#EB973E] hover:border-[#996228] font-medium overflow-hidden duration-300">
                                    <span className="relative z-10 transition-colors duration-1000 group-hover:text-white">
                                    Ler Online
                                    </span>

                                    {/* Quadrado laranja com transição da esquerda para a direita */}
                                    <span className="absolute top-0 left-[-100%] w-full h-full bg-[#fa9d3c] rounded-[5rem] z-0 transition-all duration-1000 group-hover:left-0"></span>
                                </p>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DetalhesLivro;