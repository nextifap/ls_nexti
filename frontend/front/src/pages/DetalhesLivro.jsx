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
            <Header />
            <Navigation />
            <TitlePage title={"Estante Virtual"} />

            <div className="p-6">
                <div className="flex md:flex-row flex-col md:items-start items-center px-12 py-6 rounded-2xl bg-white shadow-[0_0_10px_-1px_rgba(0,0,0,0.15)]">
                    <figure className="">
                        <img src={livro.capa} alt={livro.titulo} className="w-[20rem] rounded-lg"/>
                    </figure>

                    <div className="px-12 text-left md:mt-0 mt-5">
                        <h1 className="md:text-5xl text-3xl mb-3 md:text-left text-center">{livro.titulo}</h1>
                        <p className="text-2xl"><span className="text-[#213E60]">Autor(res): </span>{livro.autor}</p>
                        <p>DOI: {livro.doi}</p>
                        <h2 className="text-left my-5 text-3xl">Descrição:</h2>
                        <p className="w-[60vw]">{livro.descricao}</p>
   
                        <Link to={`/ler-online/${livro.id}`}>
                            <div className="relative overflow-hidden group w-full">
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