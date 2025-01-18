import {IoLogoWhatsapp} from "react-icons/io"
import {BsTelegram, BsLinkedin} from "react-icons/bs"
import {FaInstagramSquare} from "react-icons/fa"
import styles from "../Componets.modules.css/Contacts.module.css"
import { useSelector, useDispatch } from "react-redux";

function Contatos(){

  const menu = useSelector((state) => state.menu);  
  const dispatch = useDispatch()
  const contacts = [
        {
            Nome: "WhatsApp",
            Link: "https://wa.me/5582996003781",
            ico: <IoLogoWhatsapp />,
            classIco: "Whats",
            description: "Inicie uma conversa comigo diretamente do WhatsApp, Basta clicar aqui e ser redirecionado para um janela de conversa comigo! :D"
        },

        {
            Nome: "Telegram",
            Link: "https://t.me/VandersoonSantos",
            ico: <BsTelegram />,
            classIco: "Tel",
            description: "Inicie uma conversa comigo diretamente do Telegram, Basta clicar aqui e ser redirecionado para um janela de conversa comigo! :D"
        },

        {
          Nome: "Instagram",
          Link: "https://www.instagram.com/vandersoon.santoos/",
          ico: <FaInstagramSquare />,
          classIco: "Insta",
          description: "Me conheça e a me acompanhe um pouco mais através do instagram uma das redes sociais mais movimentada do mundo, através do direct sinta-se avontade para me contatar!"
        },

        {
          Nome: "Linkdin",
          Link: "https://www.linkedin.com/in/vanderson-santos-silva/",
          ico: <BsLinkedin />,
          classIco: "Link",
          description: "Atraves da maior rede social profissional do mundo você também pode me encontrar, atraves do Linkdin, conheça um pouco mais dos meus objetivos profissionais e minhas principais habilidades!  "
        },

    ]

    const contatos = contacts.map((contact, index) => {

        const dynamicClassNames = `${styles[contact.Nome.toLowerCase()]}`
        const ico = `${styles[contact.classIco.toLowerCase()]}`

          function toggleMenu() {
            dispatch({
              type: "MENU",
              payload: !menu,
            });
          }

        return (
          <div onClick={menu ? toggleMenu : undefined}>
            <li className={`${dynamicClassNames} ${styles.list}`} key={index}>
              <a href={contact.Link} target="_blank" rel="external">
                <div className={styles.containerContact}>
                  <h1>{contact.Nome}</h1>
                  <i className={ico}>{contact.ico}</i>
                  <p>{contact.description}</p>
                </div>
              </a>
            </li>
          </div>
        );
      });
    
      return <div className={styles.container}><ul className={styles.ulList}>{contatos}</ul>;</div>
    }
    
    export default Contatos;