import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import { Footer } from "../../src/components/footer/index";
import { Header } from "../../src/components/header/index";
import { Navigation } from "../../src/components/navigation/index";
import { TitlePage } from "../../src/components/title-page/index";

import { livros } from "../data/ListaLivros";

import ScrollToTop from "../features/ScrollTop";

import "../styles/LerOnline.css"



/*{ id: , titulo: , organizadores: [], DOI: , descricao: , capa: }*/

function LerOnline() {
    const { id } = useParams();
    const livro = livros.find((liv) => liv.id === parseInt(id));

    if (!livro) {
        return <h2>Livro não encontrado!</h2>;
    }

    return (
        <div className="container-LerOnline">
            <ScrollToTop />
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            <TitlePage title={"Estante Virtual"} />

            <div className="lerOnlineContent">

                <iframe src={`${livro.pdf}#zoom=50`} allowFullScreen>
                    <embed src={livro.pdf} type="application/pdf" />
                </iframe>
                
            </div>
             

            <Footer />
        </div>
    );
}

export default LerOnline;



{/*
---------------------------------------------------------------------------------------------


function Detalhestest() {
    

    return (
        <div className="container-DetalhesLivro">
            <Header />
            <Navigation />
            <TitlePage title={"Estante Virtual"} />

            <div className="detalhesLivroContent">
                <div className="visaoGeral">
                    <figure>
                        <img src={livro.capa} alt="" />
                    </figure>

                    <div className="dados">
                        <h1>{livro.titulo}</h1>
                        <p>DOI: {livro.doi}</p>
                        <h2>Descrição</h2>
                        <p>{livro.descricao}</p>

                        
                        <Link to={`/ler-online/${livro.id}`} >
                            <button>Saiba Mais</button>
                        </Link>
                        

                    </div>

                </div>

                <div className="conteudoLivro">
                    <hr />

                    <h2>Organizadores</h2>
                    <p>{livro.autor}</p>

                    <h2>Conteudo</h2>

                    <h3>Capitulo 1:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sit, modi corporis nemo quisquam fuga perferendis officiis aliquam aspernatur suscipit debitis. Ad voluptas aliquam odio alias optio quibusdam qui minima?</p>

                    <h3>Capitulo 2:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugiat! Eaque vel nulla, dignissimos placeat dolorem in esse numquam enim at. Quas, autem! Officiis veniam autem inventore laborum corrupti odio!</p>
                    
                </div>

            </div>
             

            <Footer />
        </div>
    );
}

export default Detalhestest;
     
*/}


