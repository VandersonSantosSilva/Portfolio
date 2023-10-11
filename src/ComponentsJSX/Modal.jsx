import { useDispatch, useSelector } from 'react-redux'
import styles from '../Componets.modules.css/Modal.module.css'

function Modal(){
    const dispatch = useDispatch()
    const isOpen = useSelector((state) => state.modal.isOpen)
    const projeto = useSelector((state) => state.modal.projeto)

    console.log(projeto)

    function closedModal(){
        dispatch({
            type: "MODAL",
            payload: false
        })
    }

    if (!isOpen || !projeto) {
        return null;
    }

    return (
        <div className={styles.ContainerModal}  key={projeto.ID}>
            <div className={styles.Modal}>
                <div className={styles.modalText}>
                    <button onClick={closedModal}>X</button>
                    <h1>{projeto.Nome}</h1>
                    <p>{projeto.descriptionModal}</p>
                    <h3>Tecnologias utilizadas</h3>
                    <ul className={styles.listModal}>
                        {projeto.tech.map((item, index) => <li  key={`${projeto.ID}-${index}`}>{item}</li>)}
                    </ul>
                </div>

                <div className={styles.divVideo}>
                    <iframe
                        className={styles.video}
                        src={projeto.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                    </iframe>
                </div>

                <div className={styles.linksModal}>
                    <a href={projeto.Github} target='_blank'>Acessar Github</a>
                    <a href={projeto.WebPage} target='_blank'>Acessar Projeto</a>
                    <a href={projeto.Linkdin} target='_blank'>Acessar LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Modal;
