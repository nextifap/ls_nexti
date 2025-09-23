import { Link } from "react-router-dom";

import { livros } from "../data/ListaLivros";

function LerOnlineLink({ livroId }) {
    const livro = livros.find((liv) => liv.id === livroId);

    if (!livro) {
        return <p>Livro não encontrado.</p>;
    }

    return (
        <Link to={`/ler-online/${livro.id}`}>Saiba Mais</Link>
    );
}

export default LerOnlineLink;

