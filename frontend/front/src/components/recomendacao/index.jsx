import './style.css'

export function Recomendacao ({nome, curso, texto, foto}) {
    return(
        <div className='container-recomendacao'>
            <div className='header-recomendacao'>
                    <img className='foto' src={foto} alt="" />
                    <div>
                        <p className='nome'>{nome}</p>
                        <p className='curso'>{curso}</p>
                    </div>
            </div>

            <p className='texto'>{texto}</p>
        </div>
        
    )
}