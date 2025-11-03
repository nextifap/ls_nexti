import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Livro } from "../components/livro";
import { Navigation } from "../components/navigation";
import { RecomendacaoList } from "../components/recomendacaoList";
import { Banner } from "../components/banner";
import { Editorial } from "../components/editorial";
import { RecomendacaoLivros } from "../components/recomendacaoLivros";

import '../styles/Home.css'
import { Link } from "react-router-dom";

import ScrollToTop from "../features/ScrollTop";


function Home () {

      
    return (
        <div>
          <ScrollToTop/>
            
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            
            <div className="homeContent">

              <Banner/>

              <RecomendacaoLivros/>

              <RecomendacaoList/>

              <Editorial/>

            </div>
            
            <Footer />

            <ScrollToTop showButton />
        </div>
    )
}

export default Home;