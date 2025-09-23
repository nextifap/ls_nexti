import LogoFooter from '../../assets/img/logo-footer.svg'
import Instagram from '../../assets/img/ig.svg'
import Facebook from '../../assets/img/fb.svg'
import WhatsApp2 from '../../assets/img/wpp.svg'
import Linkedin from '../../assets/img/linkedin.svg'

import { colors } from '../../colors'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'

import './style.css'

export function Footer() {

  const reportarErro = async () => {
    // Pergunta o nome
    const { value: nome } = await Swal.fire({
      title: 'Qual seu nome?',
      input: 'text',
      inputPlaceholder: 'Digite seu nome',
      showCancelButton: true,
      confirmButtonText: 'Próximo',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'Por favor, informe seu nome!';
        }
      }
    });

    if (!nome) return; // se cancelar, sai

    // Pergunta a descrição do bug
    const { value: descricao } = await Swal.fire({
      title: 'Descreva o problema encontrado:',
      input: 'textarea',
      inputPlaceholder: 'Digite aqui...',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'Por favor, descreva o problema!';
        }
      }
    });

    if (!descricao) return;

    // Loading enquanto envia
    let timerInterval;
    Swal.fire({
      title: 'Enviando...',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    });

    try {
      const response = await fetch("http://localhost:5000/reportar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, descricao })
      });

      Swal.close();

      if (response.ok) {
        Swal.fire(" Enviado!", "Bug reportado com sucesso.", "success");
      } else {
        Swal.fire(" Erro", "Não foi possível enviar o bug.", "error");
      }
    } catch (err) {
      Swal.close();
      Swal.fire(" Erro", "Erro de conexão com o servidor.", "error");
    }
  }

  return (
    <footer style={{ backgroundColor: colors.brand.primary }}>
      <div className='footerContent'>
        <div className='info'>
          <img src={LogoFooter} alt="Logo Footer" className='Logo' />
        </div>

        <div className='navigations'>
          <div>
            <h4>Navegação</h4>
            <ul>
              <Link to={'/corpo-editorial'}>
                <li>Corpo Editorial</li>
              </Link>
              <Link to={'/codigo-de-etica'}>
                <li>Código de ética</li>
              </Link>
              <Link to={'/politica-de-privacidade'}>
                <li>Politica de Privacidade</li>
              </Link>
            </ul>
          </div>

          <div className='esquerda'>
            <h4>Ajuda</h4>
            <ul>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=learnskillscursos@gmail.com&su=Contato%20do%20Learning%20Skills&body=Olá,%20vim%20pelo%20site%20da%20learning%20skills%20e%20gostaria%20de%20falar%20sobre...">
                <li>Fale conosco</li>
              </a>
                
              
              

              <li
                onClick={reportarErro}
                style={{ cursor: 'pointer', listStyleType: 'none' }}
              >
                Reportar erro
              </li>

            </ul>
          </div>

          <div>
            <h4>Links úteis</h4>
            <ul>
              <Link to={'/estante-virtual'}>
                <li>Estante virtual</li>
              </Link>

              <Link to={'/perguntas-frequentes'}>
                <li>FAQ</li>
              </Link>
            </ul>
          </div>

          <div className='esquerda'>
            <h4>Contato</h4>
            <ul>
                <figure className='socialmedia'>

                  <a href="https://www.instagram.com/learnskillscursos?igsh=MWpiem12dmZyNG9uZw==">
                    <svg className='icon' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="24"/>
                      <path d="M23.8302 35.5179C21.7231 35.5179 19.6159 35.644 17.6327 35.5179C14.7819 35.2655 13.6663 34.2563 13.1705 31.2285C12.5508 27.696 12.3029 24.2897 12.6747 20.7573C12.7987 19.4957 12.9226 18.1079 13.1705 16.8463C13.5424 14.197 14.6579 13.0616 17.2609 12.4308C18.3764 12.1784 19.368 12.0523 20.4836 12.1784C22.8386 12.3046 25.1937 12.3046 27.5487 12.0523C28.6643 11.9261 29.6559 12.0523 30.7714 12.1784C32.8786 12.4307 34.366 13.5662 34.6139 15.7109C35.3576 21.0096 35.9774 26.3082 34.9858 31.6069C34.49 34.1301 33.3744 35.1394 30.8954 35.644C28.6643 35.7702 26.3092 35.644 23.8302 35.5179ZM24.326 18.6125C21.4752 18.4864 18.9962 20.6311 18.7483 23.2805C18.5004 26.5606 20.4836 28.7053 23.8302 28.9576C26.4332 29.0838 28.9122 26.8129 29.1601 23.9112C29.408 21.2619 27.1769 18.7387 24.326 18.6125ZM32.0109 16.594C31.887 15.837 31.5152 15.3324 30.6475 15.3324C29.6559 15.3324 29.1601 15.9632 29.1601 16.8463C29.1601 17.7294 29.6559 18.3602 30.6475 18.3602C31.6391 18.2341 32.0109 17.6033 32.0109 16.594Z" fill="#213E60"/>
                    </svg>
                  </a>

            

                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=learnskillscursos@gmail.com&su=Contato%20do%20Learning%20Skills&body=Olá,%20vim%20pelo%20site%20da%20learning%20skills%20e%20gostaria%20de%20falar%20sobre...">
                    <svg className='icon' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="24"/>
                      <path d="M12 16C12 14.8954 12.8954 14 14 14H34C35.1046 14 36 14.8954 36 16V32C36 33.1046 35.1046 34 34 34H14C12.8954 34 12 33.1046 12 32V16ZM14 16L24 23L34 16H14ZM34 18.236L24.492 25.0574C24.1938 25.2631 23.8062 25.2631 23.508 25.0574L14 18.236V32H34V18.236Z" fill="#213E60"/>
                    </svg>
                  </a>
                  

                  


            
                </figure>
                  
                
            </ul>
          </div>

        </div>

      </div>



      <hr />

      <p>© 2020-{new Date().getFullYear()} Editora Learn Skills Created by <a href="https://nexti.fapce.edu.br">NExTI</a></p>

    </footer>
  )
}