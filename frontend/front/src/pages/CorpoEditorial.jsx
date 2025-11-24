import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import ScrollToTop from "../features/ScrollTop";

function CorpoEditorial() {
  return (
    <>
      <ScrollToTop />

      <Header />
      <Navigation />

      <TitlePage title={"Corpo Editorial"} />

      <section className="md:px-24 px-6">
        {/* Área 1 */}
        <div className="flex flex-wrap md:flex-nowrap items-center my-10">
          <div className="w-[80vw] md:w-[50vw]">
            <h1 className="text-[#213E60] text-3xl font-semibold mb-4">
              Corpo Editorial
            </h1>
            <p className="text-xl leading-relaxed">
              O <strong>Corpo Editorial</strong> da Editora Learnskills é composto por um grupo diversificado de especialistas e pesquisadores renomados em suas respectivas áreas do conhecimento. Nossa equipe trabalha ativamente na avaliação e aprimoramento das obras submetidas, garantindo a excelência e a relevância de cada publicação. <br /><br />
              Buscando promover a colaboração e valorizar a expertise de nossos autores, a Learnskills oferece a possibilidade de os autores que desejam publicar elegerem membros para compor o Corpo Editorial de suas respectivas obras. Essa abordagem colaborativa visa enriquecer o processo editorial, garantindo que cada material seja avaliado por pares com profundo conhecimento no tema.
            </p>
          </div>

          <figure className="w-[80vw] md:w-[50vw] h-[44vw] md:h-[33vw] bg-[#213E60] rounded-[5vw_0_5vw_0] ml-0 md:ml-[2vw] mt-6 md:mt-0"></figure>
        </div>

        {/* Área 2 */}
        <div className="flex flex-wrap md:flex-nowrap items-center flex-col-reverse md:flex-row mb-10">
          <figure className="w-[80vw] md:w-[50vw] h-[44vw] md:h-[33vw] bg-[#213E60] rounded-[5vw_0_5vw_0] mr-0 md:mr-[2vw] mt-6 md:mt-0"></figure>

          <div className="w-[80vw] md:w-[50vw]">
            <h1 className="text-[#213E60] text-3xl font-semibold mb-4">
              Comitê Executivo
            </h1>
            <p className="text-xl leading-relaxed">
              O Comitê Executivo da Editora Learnskills é o órgão responsável pela gestão estratégica e operacional de todas as publicações. Liderado por profissionais experientes no mercado editorial, este comitê define as diretrizes gerais, supervisiona o processo editorial e assegura que a missão e os valores da editora sejam mantidos em todas as nossas atividades. <br /><br />
              Nossos Editores Chefes, <strong>Fabrício Carneiro Costa</strong> e <strong>Samyra Paula Lustoza Xavier</strong>, lideram o Comitê Executivo, trazendo sua vasta experiência e visão para guiar a Learnskills no compromisso de oferecer publicações de alta qualidade e impacto.
            </p>
          </div>
        </div>

        {/* Área 3 */}
        <div className="flex flex-wrap md:flex-nowrap items-center mb-10">
          <div className="w-[80vw] md:w-[50vw]">
            <h1 className="text-[#213E60] text-3xl font-semibold mb-4">
              Conselho de Política Editorial
            </h1>
            <p className="text-xl leading-relaxed">
              O <strong>Conselho de Política Editorial</strong> da Editora Learnskills atua como um órgão consultivo e deliberativo, estabelecendo as políticas e normas que regem o nosso processo editorial. Este conselho define os critérios de seleção de obras, as diretrizes éticas e as prioridades de publicação, garantindo a integridade e a relevância de todo o nosso catálogo. <br /><br />
              Composto por acadêmicos e profissionais de destaque, o Conselho de Política Editorial assegura que a Learnskills mantenha seu compromisso com a produção de conhecimento de excelência, alinhado às necessidades da comunidade acadêmica e profissional.
            </p>
          </div>

          <figure className="w-[80vw] md:w-[50vw] h-[44vw] md:h-[33vw] bg-[#213E60] rounded-[5vw_0_5vw_0] ml-0 md:ml-[2vw] mt-6 md:mt-0"></figure>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CorpoEditorial;
