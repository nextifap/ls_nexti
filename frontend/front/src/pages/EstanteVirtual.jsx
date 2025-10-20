import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Livro } from "../components/livro";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";
import '../styles/EstanteVirtual.css'

import ScrollToTop from "../features/ScrollTop";

import { livros } from "../data/ListaLivros";

function EstanteVirtual() {
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
                            {livros.map((livro) => (
                                <Livro 
                                    key={livro.id} 
                                    className="pequeno" 
                                    livroId={livro.id} 
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default EstanteVirtual;
