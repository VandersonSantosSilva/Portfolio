import styles from "../Componets.modules.css/Navbar.module.css"
import Logo from "../Images/Logo.png"
import {BsMenuUp, BsMenuDown} from "react-icons/bs"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


function Navbar(){
    const dispatch = useDispatch()
    const menu = useSelector((state) => state.menu)
    const night = useSelector((state) => state.night)
    const ID = useSelector((state) => state.projetos)

    function active_menu(){
        dispatch({
            type: "MENU",
            payload: !menu
        })

    }

    return(
        <div className={`${styles.Container} ${night ? styles.darkNav : ""}`}>
            <i><a href="https://www.linkedin.com/in/vanderson-santos-silva/" target="_blank"><img className={styles.LogoTipo} src={Logo} alt="logo" /></a></i>

            <nav className={styles.ContainerNavbar}>
                
                <button onClick={active_menu} className={styles.menuHambuguer}>{menu ? <BsMenuDown /> : <BsMenuUp /> }</button>

                {menu && 
                    <ul className={styles.ulList}>
                        <li key={0}><Link to="/" className={styles.liList}>Home</Link></li>
                        <li key={1}><Link to="/Destaques" className={styles.liList}>Destaques</Link></li>
                        <li key={2}><Link to="/Projetos" className={styles.liList}>Todos os Projetos</Link></li>
                        <li key={3}><Link to="/Contatos" className={styles.liList}>Contatos</Link></li>
                    </ul>
                }
          
            </nav>
        </div>
    )

}

 export default Navbar