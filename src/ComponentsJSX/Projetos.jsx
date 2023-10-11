import { useDispatch, useSelector } from "react-redux"
import styles from "../Componets.modules.css/Destaques.module.css"
import Modal from "./Modal"
import 'animate.css'

function Projetos() {
  const dispatch = useDispatch()
  const projetos = useSelector((state) => state.projetos)
  const isModalOpen = useSelector((state) => state.modal)

  const openModal = (projeto) => {
    dispatch({
      type: "MODAL",
      payload: true,
      projeto
    })
  }

  const projects = projetos.map((projeto) => (
    <div key={projeto.ID}>
      <div className={styles.Container}>
        <div
          className={styles.ContaineDestaques}
          onClick={() => openModal(projeto)}
        >
          <img className={styles.imgDestaques} src={projeto.Img} alt={projeto.Nome} />
          <div className={styles.textContainer}>
            <h1>{projeto.Nome}</h1>
            <p>{projeto.description}</p>
            <h3>Click para obter mais informações</h3>
          </div>
        </div>
      </div>
    </div>
  ))

  return (
    <div>
      {projects}
      {isModalOpen && <Modal />}
    </div>
  )
}

export default Projetos
