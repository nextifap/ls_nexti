import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Livro } from "../components/livro";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";
import '../styles/EstanteVirtual.css'

import ScrollToTop from "../features/ScrollTop";

import ImgLivro1 from "../assets/img/capasLivros/algoritmos_dados.jpg"
import ImgLivro2 from "../assets/img/capasLivros/logicaProgramacao.png"
import ImgLivro3 from "../assets/img/capasLivros/Paradigmas_programacao.png"
import ImgLivro4 from "../assets/img/capasLivros/python_desenvolvedores.jpg"
import ImgLivro5 from "../assets/img/capasLivros/Algoritmos_programacao.png"
import ImgLivro6 from "../assets/img/capasLivros/Introducao_tecnologias.png"


function EstanteVirtual () {


    return (
        <>
            <ScrollToTop/>
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            <TitlePage title={"Estante Virtual"} />

            <div className="estanteContent">
                <section className="container-estante">

                    <div className="bigPicture">
                        <div className="line">

                            <Livro className="pequeno" capa={ImgLivro1} nome={'Algoritmos e Estrutura de Dados 1'} livroId={1}/>
                            

                            <Livro className="pequeno" capa={ImgLivro2} nome={'Lógica de Programação para Iniciantes'} livroId={2}/>
    

                            <Livro className="pequeno" capa={ImgLivro3} nome={'Paradigmas de programação: Uma introdução'} livroId={3}/>

                            <Livro className="pequeno" capa={ImgLivro4} nome={'Python para desenvolvedores'} livroId={4}/>

                            <Livro className="pequeno" capa={ImgLivro5} nome={'Algoritmos e Programação I'} livroId={5}/>

                            <Livro className="pequeno" capa={ImgLivro6} nome={'Introdução às Tecnologias da Informação'} livroId={6}/>

                             
                        </div>

                    </div>

                </section>
            </div>

            <Footer />
        </>
    )
}

export default EstanteVirtual;