import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";
import { Aviso } from "../components/aviso";

import '../styles/PoliticaDePrivacidade.css';

import ScrollToTop from "../features/ScrollTop";

function PoliticaDePrivacidade () {
    return (
        <>
            <ScrollToTop />
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <TitlePage title="Política de Privacidade" />
            <section className="container-politica">
                <div className="aviso">
                    <Aviso text='A Editora Learnskills valoriza e respeita a sua privacidade. Esta política descreve como coletamos, usamos, armazenamos e protegemos as informações pessoais de nossos usuários, autores, avaliadores e leitores, em conformidade com a legislação vigente, incluindo a Lei Geral de Proteção de Dados (LGPD) no Brasil.' />
                </div>

                <ol className="ulExterno">
                    <li><strong>Coleta de Informações:</strong> Coletamos informações para operar nossos serviços de forma eficiente e oferecer a melhor experiência. Isso pode incluir:</li>
                    <ul>
                        <li>Informações de Cadastro: Nome completo, e-mail, afiliação institucional, ORCID, dados de contato e credenciais de acesso, fornecidos ao criar uma conta, submeter um manuscrito ou se inscrever em nossa newsletter.</li><br />

                        <li>Informações de Transação: Dados necessários para processar pagamentos (se aplicável, para e-books comercializados ou serviços opcionais), como endereço de cobrança. Não armazenamos dados de cartão de crédito.</li><br />

                        <li>Dados de Navegação: Informações coletadas automaticamente sobre sua interação com nosso site, como endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e dados de cookies, para otimizar a usabilidade e a segurança.</li><br />
                    </ul>

                    <li><strong>Uso das Informações:</strong> As informações coletadas são utilizadas para:</li>
                    <ul>
                        <li>Processar submissões de manuscritos e gerenciar o processo editorial.</li><br />

                        <li>Comunicar-se com autores e avaliadores sobre o status de suas submissões e avaliações.</li><br />

                        <li>Personalizar a experiência do usuário em nosso site.</li><br />

                        <li>Distribuir e comercializar e-books e livros impressos (quando aplicável).</li><br />

                        <li>Enviar newsletters e comunicações sobre novas publicações ou serviços (com sua permissão).</li><br />

                        <li>Melhorar nossos serviços, produtos e o funcionamento do site.</li><br />

                        <li>Cumprir obrigações legais e regulatórias.</li><br />
                    </ul>

                    <li><strong>Compartilhamento de Informações:</strong> A Editora Learnskills não vende, aluga ou compartilha suas informações pessoais com terceiros para fins de marketing sem o seu consentimento explícito. O compartilhamento de dados pode ocorrer estritamente nas seguintes situações:</li>

                    <ul>
                        <li>Com avaliadores no processo de peer review (com anonimização, quando aplicável).</li><br />

                        <li>Com fornecedores de serviços essenciais para a operação da editora (ex: plataformas de pagamento, serviços de impressão sob demanda, provedores de hospedagem), que são contratualmente obrigados a proteger suas informações.</li><br />

                        <li>Para cumprir obrigações legais ou responder a processos judiciais válidos.</li><br />
                    </ul>

                    <li><strong>Segurança das Informações:</strong> Empregamos medidas de segurança técnicas, administrativas e físicas para proteger suas informações pessoais contra acesso não autorizado, uso indevido, alteração, divulgação ou destruição. Isso inclui criptografia, firewalls e controle de acesso.</li>

                    <li><strong>Seus Direitos:</strong> De acordo com a LGPD e outras leis de privacidade aplicáveis, você tem o direito de:</li>

                    <ul>
                        <li>Acessar suas informações pessoais.</li><br />
                        
                        <li>Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li><br />

                        <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li><br />

                        <li>Revogar o consentimento a qualquer momento (quando o tratamento for baseado no consentimento).</li><br />

                        <li>Solicitar a portabilidade dos dados.</li><br />

                        <li>Opor-se ao tratamento de dados (em certas circunstâncias).</li><br />
                    </ul>

                    <p>Para exercer qualquer um desses direitos ou para quaisquer dúvidas sobre nossas políticas de privacidade, entre em contato conosco através do e-mail learnskillscursos@gmail.com.</p>

                    <li><strong>Alterações na Política de Privacidade:</strong> Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas em nosso site, e a data da última atualização será revisada. Recomendamos que você revise esta página regularmente para se manter informado.</li>
                </ol>

            </section>
            <Footer />
        </>
    );
}

export default PoliticaDePrivacidade;