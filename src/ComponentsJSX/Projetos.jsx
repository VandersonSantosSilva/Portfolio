import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from '../Componets.modules.css/Destaques.module.css'
import { Link } from "react-router-dom";



const firebaseConfig = {
  apiKey: "AIzaSyAKp7JuUeKn1H6X5laKbNfmWOidIqHWMw0",
  authDomain: "projetos-portfolio-4dc44.firebaseapp.com",
  projectId: "projetos-portfolio-4dc44",
  storageBucket: "projetos-portfolio-4dc44.firebasestorage.app",
  messagingSenderId: "808984400804",
  appId: "1:808984400804:web:5f4e4806b2605b0f4a2731",
  measurementId: "G-5V2JSSVQND"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


function Projetos(){

    const widthTela = useSelector((state) => state.widthTela)
    const fechamento = useSelector((state) => state.closed)
    const [mouseStates, SetmouseStates] = useState(false)
    const [clickDados, setClickDados] = useState([])
    const dispatch = useDispatch()


    const handleMouseTrue = () =>{
      SetmouseStates(true)
    }

    const handleMouseFalse = () =>{
      SetmouseStates(false)
    }


    function ClickContainer(dados){
      setClickDados(dados)
      dispatch({
        type: "CLOSED",
        payload: true
      })
    }

    function Closed() {
      dispatch({
        type: "CLOSED",
        payload: false 
      });
    }

    const [dados, setDados] = useState([])
    async function getProjects() {

      try {
          const getItens = await getDocs(collection(db, "PROJECTS"));
          const itens = []
          getItens.forEach((doc)=>{
            itens.push(doc.data())
          })
          setDados(itens)
      } catch (error) {
        console.error("Erro ao enviar ao receber o arquivo", error)
      }
    }

    useEffect(()=>{
      getProjects()
    }, [])

  return(

    <div className={Styles.ContainerGeneral}>

        {dados.map((item, index) =>{
          return(

            <div key={index} className={Styles.ContainerDados} onClick={()=> ClickContainer(item)}>
              <img src={item.Imagee} alt="imagem" onMouseEnter={handleMouseTrue} onMouseLeave={handleMouseFalse}/>
              <h4 className={mouseStates && !widthTela ?  Styles.anime : Styles.ContainerDadosh4}>{item.Nome}</h4>
              <span className={mouseStates && !widthTela ?  Styles.anime : Styles.ContainerDadosh4}>Click para maiores informações</span>
              <div className={mouseStates || widthTela ? Styles.divline : Styles.ContainerDadosh4}></div>
            </div>

          )
        })}


        <div className={fechamento ? Styles.Modal : Styles.Closeed}> 
          <div className={Styles.ContainerModal}>
            <button className={Styles.Closed} onClick={()=>Closed()}>X</button>

            <div className={Styles.ContainerVT}>

                <iframe className={Styles.Video} src={clickDados.Video}></iframe>

                <div className={Styles.Text}>
                  <h4>{clickDados.Techs}</h4>
                  <p>{clickDados.Descricao}</p>
                </div>

                <div className={Styles.ContainerLinks}>
                  <a className={Styles.links} href={clickDados.Linkedin} target="_blank">Projeto no Linkedin</a>
                  <a className={Styles.links} href={clickDados.Github} target="_blank">Projeto no Github</a>
                  <Link className={Styles.links} to="/Contatos"> Contatos </Link>
                </div>

            </div>

          </div>
        </div>

        {console.log(clickDados)}
    </div>
     
  )

}

export default Projetos

// fechamento ? Styles.Modal : Styles.Closeed

// import { useDispatch, useSelector } from "react-redux"
// import styles from "../Componets.modules.css/Destaques.module.css"
// import Modal from "./Modal"
// import 'animate.css'

// function Projetos() {
//   const dispatch = useDispatch()
//   const projetos = useSelector((state) => state.projetos)
//   const isModalOpen = useSelector((state) => state.modal)
//   const menu = useSelector((state) => state.menu);

//   const openModal = (projeto) => {
//     dispatch({
//       type: "MODAL",
//       payload: true,
//       projeto
//     })
//   }

//   function toggleMenu() {
//     dispatch({
//       type: "MENU",
//       payload: !menu,
//     });
//   }

//   const projects = projetos.map((projeto) => (
//     <div key={projeto.ID} onClick={menu ? toggleMenu : undefined}>
//       <div className={styles.Container}>
//         <div
//           className={styles.ContaineDestaques}
//           onClick={() => openModal(projeto)}
//         >
//           <img
//             className={styles.imgDestaques}
//             src={projeto.Img}
//             alt={projeto.Nome}
//           />
//           <div className={styles.textContainer}>
//             <h1>{projeto.Nome}</h1>
//             <p>{projeto.description}</p>
//             <h3>Click para obter mais informações</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <div>
//       {projects}
//       {isModalOpen && <Modal />}
//     </div>
//   )
// }

// export default Projetos
