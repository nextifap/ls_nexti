import { Link } from "react-router-dom";

import { livros } from "../data/ListaLivros";

function LivroLink({ livroId }) {
    const livro = livros.find((liv) => liv.id === livroId);

    if (!livro) {
        return <p>Livro não encontrado.</p>;
    }

    return (
        <Link to={`/livro/${livro.id}`}>Saiba Mais</Link>
    );
}

export default LivroLink;



