import { Link } from "react-router-dom";
import ImgCorpoEditorial from '../../assets/img/img-editorial.svg'

export function Editorial() {
    return (
        <section className="flex md:items-center justify-between bg-[#f8f8f8] p-12 md:flex-row flex-col md:text-left text-center">
            <div className="p-5 flex flex-col md:items-start items-center">
                <h3 className="text-[#333] font-bold text-4xl">COMO PUBLICAR <br />
                    <span className="text-[#213E60] font-medium text-3xl">SEU LIVRO</span>
                </h3>

                <p className="mt-5">Conheça a equipe por trás das palavras! Nosso corpo editorial é a engrenagem que impulsiona a qualidade e a precisão em cada texto.</p>

                <Link to={"/submeter-material"}>
                    <div className="relative overflow-hidden group">
                        <p className="relative bg-[#FFB363] text-[#2E2E2E] text-lg md:w-[25vw] w-[80vw] flex justify-center items-center p-5 rounded-[5rem] mt-5 border-[0.2rem] border-[#EB973E] hover:border-[#996228] font-medium overflow-hidden duration-300">
                            <span className="relative z-10 transition-colors duration-1000 group-hover:text-white">
                            Saiba Mais
                            </span>
                            <span className="absolute top-0 left-[-100%] w-full h-full bg-[#fa9d3c] rounded-[5rem] z-0 transition-all duration-1000 group-hover:left-0"></span>
                        </p>
                    </div>
                </Link>
            </div>

            <img src={ImgCorpoEditorial} alt="" />
        </section>
    )
}

/*

.homeContent .container-editorial-section button {
    background-color: #EB973E;
    color: #2E2E2E;
    border: none;
    padding: 1.26vw 70px;
    font-size: 1.2vw;
    font-weight: bold;
    border-radius: 1.16vw;
    cursor: pointer;
    margin-top: 2vw;

    transition: 0.7s;
}

.homeContent .container-editorial-section button:hover {
    background-color: #d4833e;
}


.homeContent .container-editorial-section h3 {
    font-size: 2.5vw;
    color: #333;
    font-weight: bold;
}

.homeContent .container-editorial-section p {
    max-width: 50vw; 
    line-height: 1.;
    font-size: 1.2vw;
    font-weight: 500;
    color: #565A61;
}

.homeContent .container-editorial-section {
    display: flex;
    background-color: blue;
    align-items: center;
    justify-content: space-between;
    background-color: #f8f8f8;
    padding: 8vw;
    margin: auto;

    box-sizing: border-box;

}
*/