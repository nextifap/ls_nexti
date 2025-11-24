import { Link } from "react-router-dom"
import { Livro } from "../livro"

export function RecomendacaoLivros () {
    return(
        <section className="flex flex-col items-center md:p-20 p-12">
            <h3 className="text-4xl flex flex-col text-center">VISITE NOSSA 
                <span className="text-[#213E60]">
                    ESTANTE VIRTUAL
                </span>
            </h3>

            <p className="md:w-[70%] w-full mb-10 mt-6 text-center md:text-2xl text-xl">Descubra uma seleção especial de livros e materiais gratuitos para impulsionar seus estudos em tecnologia e programação. Explore conteúdos feitos por especialistas e desenvolva seu aprendizado no seu ritmo.</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 place-items-stretch">
                <Livro livroId={1}/>
                <Livro livroId={2}/>
                <Livro livroId={3}/>
                <Livro livroId={4}/>
            </div>

            <Link to={"/estante-virtual"}>
                    <div className="relative overflow-hidden group w-full">
                        <p className="relative bg-[#FFB363] text-[#2E2E2E] text-lg md:w-[25vw] w-[80vw] flex justify-center items-center p-5 rounded-[5rem] mt-5 border-[0.2rem] border-[#EB973E] hover:border-[#996228] font-medium overflow-hidden duration-300">
                            <span className="relative z-10 transition-colors duration-1000 group-hover:text-white">
                                Outros titulos
                            </span>

                            {/* Quadrado laranja com transição da esquerda para a direita */}
                            <span className="absolute top-0 left-[-100%] w-full h-full bg-[#fa9d3c] rounded-[5rem] z-0 transition-all duration-1000 group-hover:left-0"></span>
                        </p>
                    </div>
            </Link>
        </section>
    )
}

/*


.homeContent .container-livros{
    display: flex;
    flex-direction: column;
    align-items: center
}

.homeContent .container-livros p{
    text-align: center;
}

.homeContent .container-livros .livros{
    display: flex;
    justify-content: space-between;
    width: 90vw;
}

.homeContent .container-livros button{
    margin-top: 6vw;
    margin-bottom: 6vw;
    font-size: 1.21vw;
    width: 30vw;
    height: 4vw;
    border-radius: 1.16vw;
    border-width: 2px;
    border-style: solid;
    background: #FFB363;
    border-color: #EB973E;
    color: #2E2E2E;
    font-weight: 600;
    cursor: pointer;
}

.homeContent .visite-title {
    font-size: 3vw;
    padding-top: 5vw;
    padding-bottom: 1.50vw;
    margin: 0;
}

.homeContent .visite-paragraph{
    font-size: 1.25vw;
    padding-bottom: 1.35vw;
    margin: 0;
    margin-bottom: 2em;
}

.homeContent .container-livros .visite-paragraph {
    max-width: 50vw;
}

.homeContent .container-livros button:hover {
    background-color: #d4833e;
}

*/

