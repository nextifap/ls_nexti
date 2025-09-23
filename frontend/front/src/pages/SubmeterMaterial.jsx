import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import '../styles/SubmeterMaterial.css'


import ScrollToTop from "../features/ScrollTop";

function SubmeterMaterial () {
    return (
        <div className="container-sobrenos">
            <ScrollToTop/>
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            <TitlePage title={"Submeter material"} />
            <div className="SubmeterMaterialContent">
                <h1>Como Submeter Seu Material para Publicação</h1>
                <p>
                    A Editora Learnskills está sempre aberta a receber novas propostas de publicação que contribuam para o avanço do conhecimento. Se você tem um manuscrito e deseja publicá-lo conosco, siga as orientações abaixo para o processo de submissão:
                </p>

                <ul className="ulExterno">
                    <li>
                        <strong>Verifique a Linha Editorial:</strong> Antes de submeter, familiarize-se com as áreas de interesse e o perfil de publicações da Learnskills para garantir que seu material se encaixe em nossa linha editorial.
                    </li><br />
                    <li>
                        <strong>Prepare Seu Manuscrito:</strong> Certifique-se de que seu manuscrito está completo, revisado e formatado conforme as diretrizes de submissão da Learnskills (disponíveis em [link para as diretrizes de submissão]). Isso inclui formatação, estilo de citação, referências, entre outros.
                    </li><br />
                    <li>
                        <strong>Preencha o Formulário de Submissão:</strong> Acesse nossa plataforma de submissão online [link para a plataforma de submissão] e preencha todos os campos obrigatórios. Você será solicitado a fornecer informações sobre o autor(es), título, resumo, palavras-chave e a modalidade de publicação desejada (acesso aberto, comercializado, impresso).
                    </li><br />
                    <li>
                        <strong>Envie o Manuscrito:</strong> Anexe seu manuscrito em formato editável (geralmente .doc ou .docx) e quaisquer outros arquivos complementares, como imagens ou gráficos, conforme as instruções da plataforma.
                    </li><br />
                    <li>
                        <strong>Acompanhe o Processo:</strong> Após a submissão, você receberá um e-mail de confirmação. Você poderá acompanhar o status de seu manuscrito por meio de sua conta em nossa plataforma. Nossa equipe editorial entrará em contato em cada etapa do processo.
                    </li><br />
                </ul>

                <p>Estamos ansiosos para receber sua obra e trabalhar juntos na disseminação de conhecimento de qualidade!</p>

                <h1>Diretrizes para Submissão de Manuscritos – Editora Learnskills</h1>

                <p>Bem-vindo(a) à Editora Learnskills! Estamos entusiasmados com a possibilidade de publicar sua obra e contribuir para a disseminação do conhecimento. Para garantir um processo de submissão eficiente e transparente, por favor, leia atentamente as diretrizes abaixo.</p>

                <h2>1. Público-Alvo e Linha Editorial</h2>

                <p>A Editora Learnskills foca na publicação de obras de caráter científico, acadêmico e técnico, em diversas áreas do conhecimento. Buscamos manuscritos que apresentem:</p>
                <ul className="ulExterno">
                    <li>Originalidade e ineditismo: Conteúdo novo ou abordagens inovadoras sobre temas relevantes.</li><br />

                    <li>Relevância: Contribuição significativa para a área de estudo ou para a sociedade.</li><br />

                    <li>Rigor científico/técnico: Metodologia clara, dados bem fundamentados e análise consistente.</li><br />

                    <li>Clareza e qualidade textual: Escrita coesa, coerente e com boa fluidez.</li>
                </ul>
                <p>Recomendamos que você explore nosso catálogo de publicações existente para confirmar a adequação do seu material à nossa linha editorial.</p>

                <h2>2. Tipos de Publicação Aceitos</h2>

                <p>A Learnskills aceita submissões para os seguintes formatos:</p>

                <ul className="ulExterno">
                    <li>Livros (monografias, teses, dissertações adaptadas, coletâneas de artigos, livros-texto): Obras completas e coesas sobre um tema específico.</li><br />

                    <li>Capítulos de Livros (para obras organizadas por editores da Learnskills ou propostas de coletâneas): Contribuições individuais que se encaixam em uma obra maior.</li><br />
                </ul>

                <h2>3. Formatos e Normas de Formatação</h2>

                <p>Para otimizar o processo de avaliação e publicação, solicitamos que os manuscritos sigam as seguintes especificações:</p>

                <ul className="ulExterno">
                    <li>Formato do Arquivo: Envie o manuscrito em formato .docx (Microsoft Word) ou .odt (OpenDocument Text). Não submeta em PDF nesta fase.</li><br />
                    <li>Idioma: Aceitamos manuscritos prioritariamente em Português. Consulte-nos para submissões em outros idiomas.</li><br />
                    <li>Estrutura do Manuscrito (Sugerido para Livros/Monografias):</li><br />
                    <ul>
                        <li>Página de Título: Título completo da obra, nome(s) do(s) autor(es), afiliação institucional, ORCID (se houver) e e-mail para contato.</li>

                        <li>Resumo: Entre 150 e 250 palavras, apresentando o objetivo, metodologia, resultados e conclusões da obra.</li>
                        
                        <li>Palavras-chave: 3 a 5 palavras-chave que representem o conteúdo da obra.</li>

                        <li>Sumário/Sumário Analítico: Com a lista de capítulos e subtítulos.</li>

                        <li>Introdução: Contextualização, problema de pesquisa, objetivos e justificativa.</li>

                        <li>Capítulos/Partes: Desenvolvimento do conteúdo principal.</li>

                        <li>Conclusão/Considerações Finais: Síntese dos resultados e implicações.</li>

                        <li>Referências: Lista completa de todas as obras citadas.</li>

                        <li>Apêndices e Anexos (se houver): Materiais complementares.</li>
                    </ul>

                    <li>Formatação Geral:</li>

                    <ul>
                        <li>Fonte: Times New Roman ou Arial, tamanho 12.</li>

                        <li>Espaçamento: 1,5 entre linhas.</li>

                        <li>Margens: 2,5 cm em todas as margens (superior, inferior, esquerda, direita).</li>

                        <li>Alinhamento: Justificado.</li>

                        <li>Títulos e Subtítulos: Utilize os estilos de títulos do Word (Título 1, Título 2, etc.) para facilitar a diagramação.</li>

                        <li>Imagens e Gráficos: Devem ser inseridos no corpo do texto e também enviados como arquivos separados em alta resolução (.jpeg, .png ou .tiff), com legenda e fonte claras.</li>

                        <li>Citações e Referências: Utilize um padrão consistente, preferencialmente ABNT, APA ou Vancouver. Certifique-se de que todas as citações no texto correspondem às referências listadas no final.</li>
                    </ul>
                </ul>

                <h2>4. Processo de Submissão</h2>

                <p>A submissão de manuscritos é feita exclusivamente através de solicitação de publicção via e-mail: [email].</p>

                <ol>
                    <li>Cadastro: Se for seu primeiro acesso, crie uma conta em nossa plataforma.</li><br />

                    <li>Nova Submissão: Clique em "Iniciar Nova Submissão" e siga os passos indicados.</li><br />

                    <li>Informações da Obra: Preencha todos os metadados solicitados (título, resumo, palavras-chave, autores, afiliação, etc.).</li><br />

                    <li>Upload do Manuscrito: Anexe o arquivo principal do seu manuscrito (.docx ou .odt) e quaisquer arquivos complementares, como imagens ou gráficos, conforme as instruções da plataforma.</li><br />

                    <li>Termo de Originalidade e Declarações: Leia e aceite o Termo de Originalidade, que garante que a obra é inédita e de autoria do(s) submissor(es), e quaisquer outras declarações éticas necessárias.</li><br />

                    <li>Revisão e Confirmação: Revise todas as informações e confirme a submissão. Você receberá um e-mail de confirmação.</li><br />
                
                </ol>

                <h2>5. Processo de Avaliação Editorial</h2>

                <p>Todos os manuscritos submetidos à Editora Learnskills passam por um rigoroso processo de avaliação:</p>

                <ol>
                    <li>Análise Preliminar: A equipe editorial verifica a conformidade com as diretrizes de submissão e a adequação à linha editorial. Manuscritos que não atendam a esses critérios podem ser recusados nesta fase.</li><br />

                    <li>Parecer de Pares (Peer Review): O manuscrito é enviado para avaliação cega por especialistas (pareceristas externos), que analisam a qualidade científica, relevância, originalidade e metodologia. Este processo pode ser "cega" (o avaliador não sabe quem é o autor) ou "duplamente cega" (nem o avaliador nem o autor sabem a identidade um do outro), dependendo da política da obra.</li><br />

                    <li>Decisão Editorial: Com base nos pareceres, os Editores Chefes, Fabrício Carneiro Costa e Samyra Paula Lustoza Xavier, juntamente com o Comitê Executivo, deliberam sobre a aceitação (com ou sem revisões), rejeição ou sugestão de reenvio após grandes alterações.</li><br />

                    <li>Comunicação ao Autor: O autor principal será informado da decisão e receberá os pareceres (anonimizados) para as devidas considerações.</li><br />
                </ol>

                <h2>6. Considerações Éticas</h2>

                <p>A Editora Learnskills adere aos mais altos padrões de ética na publicação. Os autores devem garantir:</p>

                <ul>
                    <li>Originalidade: A obra é original e não foi publicada anteriormente, nem está sob avaliação em outra editora ou periódico.</li><br />

                    <li>Autoria: Todos os autores listados contribuíram significativamente para a obra.</li><br />

                    <li>Conflito de Interesses: Quaisquer potenciais conflitos de interesse devem ser declarados.</li><br />

                    <li>Plágio: O plágio em qualquer forma é inaceitável e resultará em recusa imediata.</li><br />

                    <li>Dados e Pesquisa: Se a obra envolver pesquisa com seres humanos ou animais, é obrigatório apresentar a aprovação do Comitê de Ética em Pesquisa (CEP) ou equivalente.</li><br />
                </ul>

                <h2>7. Dúvidas e Suporte</h2>

                <p>Em caso de dúvidas sobre o processo de submissão ou as diretrizes, por favor, entre em contato com nossa equipe editorial através do e-mail: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=learnskillscursos@gmail.com&su=Contato%20do%20Learning%20Skills&body=Olá,%20vim%20pelo%20site%20da%20learning%20skills%20e%20gostaria%20de%20falar%20sobre...">learnskillscursos@gmail.com</a></p>

                <p>Agradecemos o seu interesse em publicar com a Editora Learnskills.</p>
            </div>
            <Footer />
        </div>
    )
}

export default SubmeterMaterial;