export function Recomendacao ({nome, curso, texto, foto}) {
    return(

        <div>
            <div className='header-recomendacao flex mb-5'>
                    <img className='rounded-full w-[4rem] h-[4rem]' src={foto} alt="foto-perfil" />

                    <div className='flex flex-col justify-center ml-5'>
                        <p className='font-medium text-lg'>{nome}</p>
                        <p className='text-left text-base'>{curso}</p>
                    </div>
            </div>

            <p className='text-[#2A2A2A] text-left text-lg'>{texto}</p>
        </div> 
        
    )
}

/*

.header-recomendacao .foto{
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    border-color: #EB973E;
    border-width: 2%;
    border-style: solid;
}

.container-recomendacao .texto{
    padding-top: 0.90vw;
    color: #2A2A2A  ;
    font-size: 1.1vw;
    font-weight: 500;

}

.container-recomendacao .nome {
    font-weight: 500;
    font-size: 1.40vw;
    margin: 0;
    padding-bottom: 1vw;
    padding-top: 1vw;
}
*/