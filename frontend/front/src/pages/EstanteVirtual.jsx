import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Livro } from "../components/livro";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";
import '../styles/EstanteVirtual.css'

import ScrollToTop from "../features/ScrollTop";

import ImgLivro1 from "../assets/img/capasLivros/Coletânea_HQs.png"
import ImgLivro2 from "../assets/img/capasLivros/Ebook_Formação_em_Saúde_experiencias_docentes_e_discentes.png"
import ImgLivro3 from "../assets/img/capasLivros/GUIA_PESCE.png"
import ImgLivro4 from "../assets/img/capasLivros/Como_pensar_e_desenvolver_um_software_para_o_crescimento_sustentavel_e_escalavel.png"
import ImgLivro5 from "../assets/img/capasLivros/OK_Livro_FORMAÇAO EM ENFERMAGEM E EDUCA_EM_SAUDE.png"
import ImgLivro6 from "../assets/img/capasLivros/OK_Livro_SABERES_E_PRÁTICAS_DA_ENFERMAGEM_NA_ST.png"
import ImgLivro7 from "../assets/img/capasLivros/ASSISTENCIA_E_SAÚDE.png"


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

                            <Livro className="pequeno" capa={ImgLivro1} nome={'Minha vida saudável'} livroId={1}/>
                            

                            <Livro className="pequeno" capa={ImgLivro2} nome={'Formação em saúde'} livroId={2}/>
    

                            <Livro className="pequeno" capa={ImgLivro3} nome={'Guia de práticas educativas'} livroId={3}/>

                            <Livro className="pequeno" capa={ImgLivro4} nome={'Como pensar e desenvolver softwares para o crescimento sustentável e escalável'} livroId={4}/>

                            <Livro className="pequeno" capa={ImgLivro5} nome={'Formação em enfermagem e educação em saúde: Experiências exitosas'} livroId={5}/>

                            <Livro className="pequeno" capa={ImgLivro6} nome={'Saberes e práticas da enfermagem no contexto da programação da saúde do trabalhador'} livroId={6}/>

                             
                        </div>

                    </div>

                </section>
            </div>

            <Footer />
        </>
    )
}

export default EstanteVirtual;