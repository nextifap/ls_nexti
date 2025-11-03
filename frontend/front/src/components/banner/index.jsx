import { Link } from "react-router-dom";
export function Banner() {
    return (
        <section className="w-full bg-[url('/src/assets/img/Banner.svg')] text-white md:bg-center bg-[position:75%_center] bg-no-repeat bg-cover flex flex-col justify-center p-12">
            <div className="textos">

                <h1 className="text-5xl md:w-[60vw] w-full font-medium leading-none">Publique seu <br />livro conosco</h1>

                <p className="text-2xl md:w-[30vw] w-full font-light mt-5 text-left">Faça parte de uma comunidade apaixonada pela palavra escrita. Nossa equipe editorial está pronta para elevar seu trabalho a novos horizontes.</p>

                <Link to={"/nossos-servicos"}>
                    <div className="relative overflow-hidden group w-fit">
                        <p className="relative bg-[#FFB363] text-[#2E2E2E] text-lg md:w-[25vw] w-full flex justify-center items-center p-5 rounded-[5rem] mt-5 border-[0.2rem] border-[#EB973E] hover:border-[#996228] font-medium overflow-hidden duration-300">
                            <span className="relative z-10 transition-colors duration-1000 group-hover:text-white">
                            Saiba Mais
                            </span>

                            {/* Quadrado laranja com transição da esquerda para a direita */}
                            <span className="absolute top-0 left-[-100%] w-full h-full bg-[#fa9d3c] rounded-[5rem] z-0 transition-all duration-1000 group-hover:left-0"></span>
                        </p>
                    </div>
                </Link>
            </div>  
        </section>
    )
}