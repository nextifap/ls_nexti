import { useState } from "react";

import './FAQ.css'

import IMG from '../../assets/img/img-perguntas.svg'
import IMG2 from '../../assets/img/img-perguntas2.svg'

const faqData = [
  {
    question: "A Editora Learnskills publica em quais áreas do conhecimento?",
    answer:
      "Publicamos obras científicas, acadêmicas e técnicas em diversas áreas do conhecimento. Buscamos materiais com originalidade e rigor científico.",
    id: 1,
  },

  {
    question: "Quais formatos de publicação a Learnskills oferece?",
    answer:
      "Oferecemos e-books de acesso aberto, e-books comercializados e livros impressos (físicos) sob demanda.",
    id: 2,
  },

  {
    question: "Posso submeter meu TCC, monografia, dissertação ou tese?",
    answer:
      "Sim, aceitamos esses formatos, desde que adaptados para publicação como livro ou capítulos, seguindo nossas diretrizes de formatação e conteúdo.",
    id: 3,
  },

  {
    question: "A Learnskills cobra para publicar?",
    answer:
      "O processo editorial básico não tem custo. No entanto, oferecemos serviços editoriais complementares (revisão, diagramação, capa, etc.) que podem ser contratados à parte pelos autores.",
    id: 4,
  },

  {
    question: "Como funciona a impressão sob demanda (POD)?",
    answer:
      "Seu livro físico será impresso em quantidade contratada e após validação com a gráfica.",
    id: 5,
  },

];

const faqData2 = [
  {
    question: "Como faço para submeter meu manuscrito?",
    answer:
      "A submissão é feita exclusivamente pela nossa plataforma online de submissão. Você precisará criar uma conta e preencher as informações solicitadas.",
    id: 6,
    
  },

  {
    question: "Quais são os requisitos de formatação para a submissão?",
    answer:
      "Solicitamos o arquivo em .docx ou .odt, fonte Times New Roman ou Arial, tamanho 12, espaçamento 1,5, e normas de citação consistentes (preferencialmente ABNT, APA ou Vancouver). Consulte nossas Diretrizes para Submissão para detalhes.",
    id: 7,
  },

  {
    question: "Quanto tempo leva o processo de avaliação?",
    answer:
      "O tempo pode variar, mas a etapa de parecer de pares (peer review) geralmente leva algumas semanas. Manteremos você informado(a) sobre o status.",
    id: 8,
  },

  {
    question: "O que é o parecer de pares (peer review)?",
    answer:
      "É uma avaliação cega do seu manuscrito por especialistas da área, que analisam a qualidade, originalidade e relevância do conteúdo para garantir a excelência da publicação.",
    id: 9,
  },

  {
    question: " Preciso ter ISBN para submeter?",
    answer:
      "Não. O ISBN (e a ficha catalográfica) são providenciados pela Editora Learnskills após a aceitação da obra para publicação.",
    id: 10,
  },

  
];

const faqData3 = [

    {
    question: "A Learnskills combate o plágio?",
    answer:
      "Sim, o plágio é inaceitável. Todos os manuscritos são avaliados quanto à originalidade, e a detecção de plágio resulta em recusa imediata.",
    id: 11,
  },

  {
    question: "Meus direitos autorais são protegidos?",
    answer:
      "Sim, a Learnskills respeita e protege integralmente seus direitos autorais. Nossas políticas e contratos são claros quanto à propriedade intelectual da sua obra.",
    id: 12,
  },

  {
    question: "Minhas informações pessoais estarão seguras?",
    answer:
      "Sim. A Learnskills segue rigorosas Políticas de Privacidade, em conformidade com a LGPD, para proteger seus dados pessoais e de navegação.",
    id: 13,
  },

];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="FAQcentro">
      <div className="FAQContainer">
      
        <div className="FAQContent">
          <h1>
            Sobre a Editora e Publicação
          </h1>
          <div className="quadro">
            {faqData.map((item) => (
              <div
                key={item.id}
                className={`linha ${openIndex === item.id ? 'expanded' : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                >
                  {item.question}
                  <span>
                    {openIndex === item.id ? "−" : "+"}
                  </span>
                </button>

                <div className={`resposta ${openIndex === item.id ? 'expanded' : ''}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>

        </div>
        <img src={IMG} alt="" />
        
      </div>

      <div className="FAQContainer FAQRev">
        <img src={IMG2} alt="" />
      
        <div className="FAQContent">
          <h1>
            Sobre a Editora e Publicação
          </h1>
          <div className="quadro">
            {faqData2.map((item) => (
              <div
                key={item.id}
                className={`linha ${openIndex === item.id ? 'expanded' : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                >
                  {item.question}
                  <span>
                    {openIndex === item.id ? "−" : "+"}
                  </span>
                </button>

                <div className={`resposta ${openIndex === item.id ? 'expanded' : ''}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>

        </div>
        
      </div>

      <div className="FAQContainer">
      
        <div className="FAQContent">
          <h1>
            Sobre a Editora e Publicação
          </h1>
          <div className="quadro">
            {faqData3.map((item) => (
              <div
                key={item.id}
                className={`linha ${openIndex === item.id ? 'expanded' : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                >
                  {item.question}
                  <span>
                    {openIndex === item.id ? "−" : "+"}
                  </span>
                </button>

                <div className={`resposta ${openIndex === item.id ? 'expanded' : ''}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>

        </div>
        <img src={IMG} alt="" />
        
      </div>

    </div>
    
  );
}