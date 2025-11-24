import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Livro } from "../components/livro";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";
import ScrollToTop from "../features/ScrollTop";
import { livros } from "../data/ListaLivros";

function EstanteVirtual() {
    return (
        <>
            <ScrollToTop />
            <div className="bg-[#F4F2EF] min-h-screen">
                <Header />
                <Navigation />

                <TitlePage title={"Estante Virtual"} />

                <div className="flex justify-center px-">
                    <section className="bg-white md:w-[90vw] w-full md:p-8 p-4 rounded-lg shadow-sm my-16">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 place-items-stretch">
                        {livros.map((livro) => (
                            <Livro key={livro.id} livroId={livro.id} />
                        ))}
                        </div>
                    </section>
                </div>


                <Footer />
            </div>
        </>
    );
}

export default EstanteVirtual;
