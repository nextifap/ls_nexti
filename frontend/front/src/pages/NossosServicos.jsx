import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import '../styles/NossosServicos.css'

import ScrollToTop from "../features/ScrollTop";

function NossosServicos () {
    return (
        <>
            <ScrollToTop/>

            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            <TitlePage title={"Conheça nossos serviços"} />

            <section className="container-servicos">

                <h1 className="title">Serviços de Publicação da Editora Learnskills</h1>
                <p >
                    Na Editora Learnskills, nosso compromisso é oferecer um suporte completo aos autores, desde a concepção até a distribuição de suas obras. Compreendemos que cada projeto é único, e por isso, disponibilizamos uma variedade de formatos e serviços para atender às suas necessidades e objetivos.
                </p>

                <ul className="ulExterno">
                    <li><strong>E-books (Acesso Aberto e Comercializados):</strong></li>
                    <ul className="ulInterno">
                        <li>
                            E-books de Acesso Aberto: Alinhados à filosofia da ciência aberta, disponibilizamos e-books gratuitamente para download em nosso site. Essa modalidade maximiza a visibilidade e o impacto de sua pesquisa, garantindo que o conhecimento alcance o maior número de leitores sem barreiras.
                        </li>
                        <br />
                        <li>
                            E-books Comercializados: Para autores que buscam retorno financeiro e uma distribuição ampliada, oferecemos a publicação de e-books para venda em diversas plataformas online. Cuidamos de toda a gestão de direitos e distribuição, permitindo que sua obra monetizada alcance um público global.
                        </li>
                        <br />
                    </ul>
                    <li><strong>Livros Impressos (Físicos):</strong></li>
                    <ul className="ulInterno">
                        <li>
                            Impressão Sob Demanda (Print on Demand - POD): A Learnskills oferece a opção de publicação de livros físicos através do inovador sistema de impressão sob demanda. . Essa modalidade é ideal para autores que desejam a versão física de suas obras sem os riscos de um grande estoque. Seus livros estarão disponíveis para compra em nosso site e em plataformas de parceiros, sendo impressos e enviados diretamente ao leitor após a confirmação da compra.
                        </li>
                        <br />
                    </ul>
                    <li><strong>Serviços Editoriais Complementares:</strong>
                         Para garantir a excelência e o profissionalismo de cada publicação, a Learnskills oferece, opcionalmente, uma série de serviços editoriais que podem ser contratados pelos autores para aprimorar ainda mais seus materiais:
                    </li>
                    <ul className="ulInterno">
                        <li>
                            Revisão Textual (Ortografia e Gramática): Garantimos que sua obra esteja impecável, livre de erros gramaticais e ortográficos, com total fluidez de leitura
                        </li>
                        <br />
                        <li>
                            Copidesque e Preparação de Texto: Para um aprimoramento mais profundo do conteúdo, coerência e estilo, nossa equipe de copidesque refina o texto, tornando-o mais claro, conciso e impactante.
                        </li>
                        <br />
                        <li>
                            Diagramação e Projeto Gráfico: Criamos layouts profissionais e atraentes para o miolo de sua obra, assegurando uma experiência de leitura agradável tanto em formato digital quanto impresso.
                        </li>
                        <br />
                        <li>
                            Design de Capa Personalizado: Uma capa impactante é essencial para o sucesso de uma obra. Nossos designers desenvolvem capas exclusivas que refletem a essência do seu material e atraem o público-alvo.
                        </li>
                        <br />
                        <li>
                            Registro de ISBN e Ficha Catalográfica: Realizamos o registro internacional da sua obra (ISBN) com ou sem código de barras e a elaboração da ficha catalográfica, itens essenciais para a identificação e catalogação do seu livro em bibliotecas e livrarias.
                        </li>
                        <br />
                        <li>
                            DOI (Digital Object Identifier) para Capítulos/Artigos: Para obras que contenham capítulos ou artigos científicos, oferecemos o registro de DOI individual, aumentando a rastreabilidade e a visibilidade da pesquisa.
                        </li>
                        <br />
                    </ul>
                    <p>
                        Normalização de Referências (ABNT, APA, Vancouver, etc.): Adaptamos as referências e citações da sua obra às normas técnicas exigidas (ABNT, APA, Vancouver, entre outras), garantindo a padronização e o rigor acadêmico.
                    </p>
                </ul>
                <h1>
                O Processo Editorial na Learnskills
                </h1>
                <p>Na Editora Learnskills, nosso processo editorial é rigoroso e transparente, garantindo a qualidade e a relevância de todas as nossas publicações. Entendemos que cada obra é única, e nosso fluxo de trabalho é desenhado para apoiar os autores em todas as etapas, desde a submissão até a publicação final.
                </p>
                <p><strong>Etapas do Processo Editorial para E-books e Livros Impressos:</strong></p>
                <ol className="olProcesso">
                    <li>
                    Submissão: O processo inicia-se com a submissão do seu manuscrito (detalhes sobre como submeter logo abaixo).
                    </li>
                    <br />

                    <li>
                    Avaliação Preliminar: A equipe editorial realiza uma análise inicial para verificar a adequação do material à linha editorial da Learnskills e aos requisitos básicos de formatação e qualidade.
                    </li>
                    <br />

                    <li>Parecer de Pares (Peer Review): O manuscrito é enviado a especialistas na área (avaliadores cegos ou duplamente cegos, conforme a política da obra) para uma avaliação aprofundada de seu conteúdo, originalidade, metodologia e relevância. Esta etapa é crucial para aprimorar a obra.
                    </li>
                    <br />

                    <li>Decisão Editorial: Com base nos pareceres dos avaliadores, os Editores Chefes, Fabrício Carneiro Costa e Samyra Paula Lustoza Xavier, juntamente com o Comitê Executivo, tomam a decisão sobre a aceitação, revisão ou recusa do manuscrito.
                    </li>
                    <br />

                    <li>Revisão e Aprimoramento: Em caso de aceite com ressalvas ou solicitação de revisão, o autor trabalha no aprimoramento do manuscrito, incorporando as sugestões e correções indicadas pelos avaliadores e editores.
                    </li>
                    <br />
                    
                    <li>Edição e Copidesque: A equipe editorial realiza a revisão de texto, gramática, ortografia e estilo, além de padronizar a linguagem e garantir a clareza e coesão da obra.
                    </li>
                    <br />

                    <li>Diagramação e Formatação: O manuscrito é diagramado para o formato de e-book e/ou livro impresso, garantindo uma leitura agradável em diferentes dispositivos, e é preparada a versão final para publicação.
                    </li>
                    <br />

                    <li>Criação de Metadados e ISBN: São gerados os metadados da obra (informações para identificação e catalogação) e solicitado o ISBN (International Standard Book Number), essencial para a identificação da publicação.
                    </li>
                    <br />
                    
                    <li>Publicação e Lançamento: A obra é publicada em nosso website (para e-books de acesso aberto), distribuída para as plataformas de vendas (para e-books comercializados) e/ou disponibilizada para impressão sob demanda, e anunciada em nossos canais de comunicação.
                    </li>
                    <br />
                </ol>
                

            </section>

            <Footer />
        </>
    )
}

export default NossosServicos;