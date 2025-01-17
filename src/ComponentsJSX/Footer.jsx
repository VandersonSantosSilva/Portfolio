import styles from "../Componets.modules.css/Footer.module.css"
import { Link } from "react-router-dom"


function Footer(){
    const downloadFile = () => {
        const urlFile = "https://drive.google.com/uc?export=download&id=16Bwr1dNNhTi36d_b36itXoZyhgP776_q"
        const link = document.createElement("a")
        link.href = urlFile
        link.download = "cv-vandersonsantos.pdf"
        link.click()
    }

    return (
      <div className={styles.footer}>
        <Link to="./Projetos">
          <button>Projetos</button>
        </Link>
        <button onClick={downloadFile}>Download CV</button>
        <Link to="./Contatos">
          <button>Contato</button>
        </Link>

        
          <spanp className={styles.containerFooter}>
            Transformando ideias em código e código em soluções
          </spanp>
          <span className={styles.containerFooter}>
            &copy; 2025 todos os direitos reservados | Vanderson Santos
          </span>
        
      </div>
    );

}

export default Footer