import { Recomendacao } from "../recomendacao"

import ImgPerfil1 from '../../assets/img/fotosPerfil/fotoPerfil1.jpeg'
import ImgPerfil2 from '../../assets/img/fotosPerfil/fotoPerfil2.jpeg'
import ImgPerfil3 from '../../assets/img/fotosPerfil/fotoPerfil3.jpeg'
import ImgPerfil4 from '../../assets/img/fotosPerfil/fotoPerfil4.jpeg'
import ImgPerfil5 from '../../assets/img/fotosPerfil/fotoPerfil5.jpeg'
import ImgPerfil6 from '../../assets/img/fotosPerfil/fotoPerfil6.jpeg'

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

export function RecomendacaoList() {
    return(
        <section className="bg-[#E9E9E9] py-16">
            <div className="w-full flex flex-col items-center">{/*header-recomendacoes*/}
                <h3 className="text-[#213E60] text-3xl text-center">QUEM CONHECE <span>RECOMENDA</span></h3>

                <p className="text-center my-5 md:w-[60%] w-full text-lg">Quem passa pela Learn Skills vive uma jornada de aprendizado transformadora. Nossos alunos e parceiros reconhecem o cuidado, a dedicação e a qualidade de tudo o que oferecemos.</p>
            </div>

            <div
                className="
                    flex gap-[1.5vw] overflow-x-auto 
                    px-[10vw] md:px-[20vw] py-[1vw]
                    scroll-smooth whitespace-nowrap 
                    max-w-full
                    [&::-webkit-scrollbar]:h-[0.5vw]
                    [&::-webkit-scrollbar-thumb]:bg-[#bbb]
                    [&::-webkit-scrollbar-thumb]:rounded-[0.4vw]
                "
                >
                {recomendacoes.map((rec, index) => (
                    <div
                    key={index}
                    className="
                        flex-shrink-0 w-[22rem] px-8  
                        bg-white p-[2vw] text-[1.25vw]
                        rounded-[1vw] 
                        flex justify-center items-center 
                        whitespace-normal
                    "
                    >
                    <Recomendacao
                        nome={rec.nome}
                        curso={rec.curso}
                        texto={rec.texto}
                        foto={rec.foto}
                    />
                    </div>
                ))}
                </div>
        </section>
    )
}

/*

.homeContent .container-recomendacoes {
    background-color: #E9E9E9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vw 0;
    max-width: 100vw;
    overflow: hidden;
}

.homeContent .recomendacoes-paragraph{
    font-size: 1.2vw; 
    padding-bottom: 1vw;
    text-align: center ;
    line-height: 1.5;
    font-weight: 400;
    max-width: 100vw;
}
*/