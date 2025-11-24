import AvisoIcon from '../../assets/img/info.svg'

export function Aviso({text}) {
    return (
        <div className="bg-[#FFEDB3] flex items-center md:w-[50vw] w-[80vw] md:flex-row flex-col p-6 rounded-[2rem] gap-5">
            <img src={AvisoIcon} alt="" className='md:w-[10rem] w-[5rem]'/>
            <p className='md:text-xl'>{text}</p>
        </div>
    )
}

