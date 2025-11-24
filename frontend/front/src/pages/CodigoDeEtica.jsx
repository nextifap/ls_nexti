import { Aviso } from "../components/aviso";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import ScrollToTop from "../features/ScrollTop";

function CodigoDeEtica () {
    return (
        <>
            <ScrollToTop/>
            <Header />
            <Navigation />
            <TitlePage title={"Código de Ética"} />

            <section className="container-codigo p-6 pt-16">
                <div className="w-[100%] justify-center flex mb-5">
                    <Aviso text='Na Editora Learnskills, a integridade, a transparência e a responsabilidade são os pilares de todas as nossas operações. Nosso Código de Ética reflete o compromisso inabalável com os mais altos padrões de conduta profissional e editorial, garantindo um ambiente justo e respeitoso para autores, leitores, colaboradores e toda a comunidade acadêmica.' />
                </div>

                <div className="p-6">
                    <h2 className="text-[#213E60] md:text-5xl text-4xl break-words text-center">Nossos Princípios Fundamentais:</h2>
                
                    <h3 className="md:text-2xl text-xl text-left font-semibold">Integridade e Transparência:</h3>
                    <p className="md:text-2xl">Atuamos com honestidade e clareza em todas as interações. Nossas políticas e processos são comunicados de forma aberta, e somos transparentes quanto às decisões editoriais e financeiras.</p>
                    <br />

                    <h3 className="md:text-2xl text-xl text-left font-semibold">Qualidade e Rigor Científico:</h3>
                    <p className="md:text-2xl">Comprometemo-nos a publicar apenas obras que apresentem excelência, originalidade e rigor metodológico. Nosso processo de avaliação por pares é imparcial e busca garantir a qualidade e a relevância do conteúdo.</p>
                    <br />

                    <h3 className="md:text-2xl text-xl text-left font-semibold">Imparcialidade e Equidade:</h3>
                    <p className="md:text-2xl">Tratamos todos os autores, avaliadores e colaboradores com justiça e sem preconceitos, independentemente de origem, gênero, etnia, crença ou qualquer outra característica pessoal. As decisões editoriais são baseadas exclusivamente no mérito da obra.</p>
                    <br />

                    <h3 className="md:text-2xl text-xl text-left font-semibold">Respeito à Propriedade Intelectual:</h3>
                    <p className="md:text-2xl">Reconhecemos e protegemos os direitos autorais e a propriedade intelectual de todos os envolvidos. O plágio e a apropriação indevida de ideias são veementemente condenados e passíveis de sanções.</p>
                    <br />

                    <h3 className="md:text-2xl text-xl text-left font-semibold">Confidencialidade:</h3>
                    <p className="md:text-2xl">Garantimos a confidencialidade das informações de manuscritos submetidos, dados de autores e avaliadores, antes, durante e após o processo editorial, conforme nossas políticas de privacidade.</p>
                    <br />

                    <h3 className="md:text-2xl text-xl text-left font-semibold">Responsabilidade Social e Ambiental:</h3>
                    <p className="md:text-2xl">Buscamos operar de forma sustentável, considerando o impacto de nossas ações na sociedade e no meio ambiente, e promovendo a diversidade e a inclusão.</p>
                    <br />

                    <h3 className="md:text-2xl text-xl text-left font-semibold">Conflito de Interesses:</h3>
                    <p className="md:text-2xl">Exigimos que todos os envolvidos no processo editorial (editores, avaliadores, autores) declarem quaisquer conflitos de interesse que possam comprometer a imparcialidade das decisões ou a integridade da publicação.</p>
                    <br />



                    <p className="font-semibold md:text-2xl">Este Código de Ética serve como guia para todas as nossas ações e decisões, reforçando nosso compromisso com uma publicação responsável e confiável.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CodigoDeEtica;

/*
.aviso {
    width: 100%;
    justify-content: center;
    display: flex;

    border-radius: 48px;

    margin-bottom: 50px;
}

.container-codigo{
    padding: 50px 50px;
}

.container-codigo h2{
    color: #213E60;
    font-size: 4vw;
}

.container-codigo p {
    font-size: 1.3vw;
}
.container-codigo ul li {
    font-size: 1.5vw;
    font-weight: 500;
    color: #565A61;

}

@media (max-width: 480px) {

    .container-codigo h2{
        font-size: 4.8vw;
    }

    .container-codigo p {
        font-size: 3.2vw;
    }

    .container-codigo ul li {
        font-size: 3.4vw;
    }

}

@media (min-width: 481px) and (max-width: 768px) {

    .container-codigo h2{
        font-size: 4.8vw;
    }

    .container-codigo p {
        font-size: 3.2vw;
    }

    .container-codigo ul li {
        font-size: 3.4vw;
    }
}
*/

/*
<h2>Editora</h2>
<p> Comprometemo-nos a conduzir todas as operações com integridade e transparência, mantendo altos padrões éticos em todas as interações. Buscamos manter os mais altos padrões de qualidade em todas as publicações, assegurando a precisão, originalidade e relevância de cada obra</p>
<p>Assumimos a responsabilidade social e ambiental, buscando minimizar nosso impacto no meio ambiente e contribuir positivamente para as comunidades em que operamos. Respeitamos a confidencialidade das informações dos autores, assegurando a segurança de seus dados e tratando todos com respeito e dignidade. Evitamos conflitos de interesses e agimos de forma imparcial em todas as nossas decisões e atividades.</p>

<h2>Autores</h2>
<p>Comprometem-se a fornecer trabalhos originais e autênticos, garantindo que todo o conteúdo submetido seja de sua autoria e não viole os direitos autorais de terceiros. Respeitam os padrões éticos e legais na condução da pesquisa, garantindo a veracidade e integridade dos dados apresentados. Garantem a atribuição adequada de crédito a todas as fontes utilizadas e colaboradores envolvidos na criação da obra. Colaboram de forma construtiva com a editora, respondendo prontamente às solicitações e oferecendo feedback para melhorar o processo editorial.</p>
*/