import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Livro } from "../components/livro";
import { Navigation } from "../components/navigation";
import { Recomendacao } from "../components/recomendacao";

import '../styles/Home.css'
import { Link } from "react-router-dom";

import ImgCorpoEditorial from '../assets/img/img-editorial.svg'

import ImgLivro1 from "../assets/img/capasLivros/Coletânea_HQs.png"
import ImgLivro2 from "../assets/img/capasLivros/Ebook_Formação_em_Saúde_experiencias_docentes_e_discentes.png"
import ImgLivro3 from "../assets/img/capasLivros/GUIA_PESCE.png"

import ScrollToTop from "../features/ScrollTop";



import ImgPerfil1 from '../assets/img/fotosPerfil/fotoPerfil1.jpeg'
import ImgPerfil2 from '../assets/img/fotosPerfil/fotoPerfil2.jpeg'
import ImgPerfil3 from '../assets/img/fotosPerfil/fotoPerfil3.jpeg'
import ImgPerfil4 from '../assets/img/fotosPerfil/fotoPerfil4.jpeg'
import ImgPerfil5 from '../assets/img/fotosPerfil/fotoPerfil5.jpeg'
import ImgPerfil6 from '../assets/img/fotosPerfil/fotoPerfil6.jpeg'



function Home () {

    const recomendacoes = [
        {
          nome: "Leonardo",
          curso: "Analista de Sistemas",
          texto: "Me ajudou a desenvolver habilidades essenciais para o mercado. Recomendo para todos que querem crescer na área!",
          foto: ImgPerfil1
        },
        {
          nome: "Lucas Sousa",
          curso: "Cientista de dados",
          texto: "Sempre admirei a dedicação da equipe. O aprendizado foi enriquecedor e a experiência prática fez toda a diferença.",
          foto: ImgPerfil2
        },
        {
          nome: "Icaro Moreira",
          curso: "Cientista da Computação",
          texto: "É ótimo ver uma abordagem tão humana e acessível à educação digital. Recomendo para meus alunos!",
          foto: ImgPerfil3
        },
        {
          nome: "Gabriel Lucas",
          curso: "Desenvolvimento Web",
          texto: "A didática utilizada foi incrível! Aprendi muito sobre frameworks modernos e como aplicá-los em projetos reais.",
          foto: ImgPerfil4
        },
        {
          nome: "Ian Caleb",
          curso: "Desenvolvedor Web",
          texto: "Um curso bem estruturado, com material de qualidade e professores que realmente entendem do assunto.",
          foto: ImgPerfil5
        },
        {
          nome: "Pedro Alexandre",
          curso: "Designer Gráfico",
          texto: "Aprendi muito sobre cibersegurança e melhores práticas para proteger sistemas contra ataques.",
          foto: ImgPerfil6
        }
      ];
      
    return (
        <div>
          <ScrollToTop/>
            
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            <div className="homeContent">
              <section className="Banner">
                <div className="textos">
                  <h1 className="banner-title">Publique seu <br />livro conosco</h1>
                  <p className="banner-paragraph">Faça parte de uma comunidade apaixonada pela palavra escrita. Nossa equipe editorial está pronta para elevar seu trabalho a novos horizontes.</p>
                  <Link to={"/nossos-servicos"}><button className="banner-button">Saiba Mais</button></Link>
                </div>   
              </section>

              <section className="container-livros">
                  <h3 className="visite-title">VISITE NOSSA <span style={{ color: "#213E60" }}>ESTANTE VIRTUAL</span></h3>
                  <p className="visite-paragraph">Descubra uma seleção especial de livros e materiais gratuitos para impulsionar seus estudos em tecnologia e programação. Explore conteúdos feitos por especialistas e desenvolva seu aprendizado no seu ritmo.</p>
                  <div className="livros">
                      <Livro className="pequeno" capa={ImgLivro1} nome={'Minha vida saudável'} livroId={1}/>
                      <Livro className="pequeno" capa={ImgLivro2} nome={'Formação em saúde'} livroId={2}/>
                      <Livro className="pequeno" capa={ImgLivro3} nome={'Guia de práticas educativas'} livroId={3}/>
                  </div>

                  <Link to={"/estante-virtual"}><button>Outros títulos</button></Link>
              </section>

              <section className="container-recomendacoes">
                  <div className="header-recomendacoes">
                      <h3 className="recomendacoes-title">QUEM CONHECE <span style={{ color: "#213E60" }}>RECOMENDA</span></h3>
                      <p className="recomendacoes-paragraph">Quem passa pela Learn Skills vive uma jornada de aprendizado transformadora. Nossos alunos e parceiros reconhecem o cuidado, a dedicação e a qualidade de tudo o que oferecemos.</p>
                  </div>

                  <div className="cards-recomendacoes"> 
                          {recomendacoes.map((rec, index) => (
                          <Recomendacao
                              key={index}
                              nome={rec.nome}
                              curso={rec.curso}
                              texto={rec.texto}
                              foto={rec.foto}
                          />
                          
                          ))}
                      </div>  
              </section>

              <section className="container-editorial-section">
                  <div>
                      <h3>COMO PUBLICAR <br /><span style={{ color: "#213E60" }}>SEU LIVRO</span></h3>
                      <p>Conheça a equipe por trás das palavras! Nosso corpo editorial é a engrenagem que impulsiona a qualidade e a precisão em cada texto.</p>
                      <Link to={"/submeter-material"}><button>Saiba mais</button></Link>
                  </div>

                  <img src={ImgCorpoEditorial} alt="" />
              </section>

            </div>
            
            <Footer />

            <ScrollToTop showButton />
        </div>
    )
}

export default Home;