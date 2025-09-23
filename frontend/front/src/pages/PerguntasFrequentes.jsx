import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import '../styles/PerguntasFrequentes.css'

import IMGFrequentes1 from '../assets/img/img-perguntas.svg'
import IMGFrequentes2 from '../assets/img/img-perguntas2.svg'

import ScrollToTop from "../features/ScrollTop";

import FAQ from "../components/FAQ/FAQ";

function PerguntasFrequentes () {
    return (
        <div>
            <ScrollToTop/>
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            <TitlePage title={"Perguntas Frequentes"} />
            <section >
                <FAQ />
            </section>
            

            
            <br /><br />
            <Footer />
        </div>
    )
}

export default PerguntasFrequentes;