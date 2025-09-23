import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import '../styles/SobreNos.css'

import SobreNósIMG from '../assets/img/sobre-nos.svg'

import ScrollToTop from "../features/ScrollTop";

function SobreNos () {
    return (
        <div className="container-sobrenos">
            <ScrollToTop/>
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            <TitlePage title={"Sobre nós"} />
            <section className="sobreNosContent">
                <div  className="textos">
                    <h1>Quem somos</h1>
                    <p>
                        A <strong>Editora Learnskills</strong> nasceu da paixão por compartilhar conhecimento e do compromisso em impulsionar o desenvolvimento acadêmico e profissional. Fundada e liderada por <strong>Fabrício Carneiro Costa</strong> e <strong>Samyra Paula Lustoza Xavier</strong>, somos uma editora dedicada à publicação de obras científicas, acadêmicas e técnicas de alta qualidade.
                        <br /><br />
                        Nossa missão é ser uma ponte entre pesquisadores, acadêmicos e profissionais, facilitando a disseminação de conteúdos relevantes e inovadores. Acreditamos que o acesso ao conhecimento é um pilar fundamental para o progresso, e por isso, investimos em um rigoroso processo editorial, tecnologias de ponta e um modelo de publicação flexível que inclui e-books de acesso aberto, e-books comercializados e livros impressos sob demanda.
                        <br /><br />
                        Na Learnskills, valorizamos a originalidade, o rigor científico e a colaboração. Trabalhamos lado a lado com nossos autores, oferecendo suporte editorial completo e transparente, para que suas ideias e pesquisas alcancem o impacto que merecem. Junte-se a nós na construção de um futuro onde o conhecimento é a principal ferramenta de transformação.
                    </p>
                </div>

                <figure>
                    <img src={SobreNósIMG} alt="Pessoas conversando numa mesa" />
                </figure>
            </section>
            <Footer />
        </div>
    )
}

export default SobreNos;