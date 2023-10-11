import styles from "../Componets.modules.css/Information.module.css"
import 'animate.css';
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"
import {IoLogoCss3, IoLogoJavascript} from "react-icons/io"
import {TbBrandRedux, TbBrandBootstrap} from "react-icons/tb"
import {AiFillHtml5} from "react-icons/ai"
import {FaReact} from "react-icons/fa"
import photo from "../Images/photo01.png"
import c1 from "../Images/1.jpg"
import c2 from "../Images/2.jpg"
import c3 from "../Images/3.jpg"
import c4 from "../Images/4.jpg"
import c5 from "../Images/5.jpg"
import c6 from "../Images/6.jpg"
import c7 from "../Images/7.jpg"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import {motion} from "framer-motion"
import { Link } from "react-router-dom";


function Information(){
    const dispatch = useDispatch()
    const night = useSelector((state) => state.night)
    const obsanimation = useSelector((state) => state.observation.obsOne)
    const obsanimationTwo = useSelector((state) => state.observation.obsTwo)
    const widthCarousel = useSelector((state) => state.widthCarousel)
    const timer = useSelector((state) => state.timer)
    const show = useSelector((state) => state.show)
    const p1 = useRef(null)
    const p2 = useRef(null)
    const carousel = useRef(null)
    const images = [c1, c2, c3, c4, c5, c6, c7]
    const hardSk = [
        {Name: "HTML", Logo: <AiFillHtml5 />}, {Name:"CSS", Logo: <IoLogoCss3 />}, {Name:"JavaScript", Logo: <IoLogoJavascript />},
        {Name: "ReactJS", Logo: <FaReact />}, {Name: "Redux", Logo: <TbBrandRedux />}, {Name: "Bootstrap", Logo: <TbBrandBootstrap />}
    ] 

    /* Start Dark Mode */
    const active_night = () => {
        dispatch({
            type: "NIGHT",
            payload: !night
        })
    }

    useEffect(() => {
        if (night) {
          document.body.classList.add('dark');
       
        } else {
          document.body.classList.remove('dark');
        }

    }, [night]);
    /* End Dark Mode */

    /* Start animation text */
   useEffect(() => {
        dispatch({
            type: "CAROUSEL",
            payload: carousel.current?.scrollWidth - carousel.current?.offsetWidth
        })


        const instersectip1 = new IntersectionObserver((entries)=>{

            if(entries.some((entry) => entry.isIntersecting)){
                dispatch({
                    type: "OBSERVATION",
                    payload: true
                })
            }
    
        })

        instersectip1.observe(p1.current)

        const instersectip2 = new IntersectionObserver((entries) => {

            if(entries.some((entry) => entry.isIntersecting)){
                dispatch({
                    type: "OBSERVATIONTWO",
                    payload: true
                })
            }
        })
    
        instersectip2.observe(p2.current)
       
 

        return () => {
            instersectip1.disconnect()
            instersectip2.disconnect()
        }

   },[])

   const endAnimation = (element) => {
       if(element === "refP1"){
            if(obsanimation === true){
                dispatch({
                    type: "OBSERVATION",
                    payload: false
                })
            }
       }
       
       if(element === "refp2"){
            if(obsanimationTwo === true){
                dispatch({
                    type: "OBSERVATIONTWO",
                    payload: false
                })
            }
       }

    }
    /* End animation text */

    const hb = hardSk.map((habilidade) => {
       return (

        <li key={habilidade.Name} className={`${night ? styles.darkThree : ""}`}>
            {habilidade.Name}
            <i>{habilidade.Logo}</i>
        </li>

       )
    })

    const downloadFile = () => {
        const urlFile = "https://drive.google.com/uc?export=download&id=16Bwr1dNNhTi36d_b36itXoZyhgP776_q"
        const link = document.createElement("a")
        link.href = urlFile
        link.download = "cv-vandersonsantos.pdf"
        link.click()
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            dispatch({
                type: "TIMER",
                payload: true
            })
        }, 10000)

        return() => clearTimeout(timer)

    })


    return(

        <div>
            {/* start dark mode */}

            <div className={styles.night}>
                <input checked={night} onChange={active_night} className={styles.checkbox} type="checkbox" name="night" id="mod" />
    
                <label className={`${styles.label} ${night ? styles.darkThree : ""}`} htmlFor="mod">
                    <i className={styles.moon}><BsFillMoonFill /></i>
                    <div className={`${styles.ball} ${night ? styles.darkFuor : ""}`}></div>
                    <i className={styles.sun}><BsFillSunFill /></i>
                </label>
            </div>

            {/* //end dark mode */}

            {/* //start corpo */}

            <div className={styles.title}>

                <img className={`${!timer ? styles.imgTitle : ""}`} src={photo} alt="vanderson"/>

                <div className={styles.caixaText}>
    
                    <h1 className={`${styles.textOne} ${!timer ? styles.typingAnimationOne : ""} ${night ? styles.dark : ""}`}>Olá, eu sou o </h1>
                    <span className={`${styles.textTwo} ${!timer ? styles.typingAnimationTwo : ""} ${night ? styles.darkTwo : ""}`}>Vanderson Santos</span>
                    <p className={`${styles.textThree} ${!timer ? styles.typingAnimationThree : ""} ${night ? styles.dark : ""}`}>Desenvolvedor front-end</p>
                    
                    {timer && 
                        <div className={`${styles.buttons}  ${timer ? styles.show : ''}`}>
                            <button className={`${night ? styles.darkTwo : ""} `} onClick={downloadFile}>
                                Download CV
                            </button>

                            <button>
                                <Link to="/Contatos" className={`${night ? styles.darkTwo : ""}`}>Contatos</Link>
                            </button>
        
                        </div>
                    }

                </div>

            </div>

            <div className={styles.containerSobre}>
                <h1 className={`${styles.titleH1} ${night ? styles.darkTwo : ""}`}>Quem eu sou?</h1>

                <p ref={p1} className={`${styles.paragrafos} ${night ? styles.dark : ""} ${obsanimation ?  "animate__animated animate__fadeIn": ""}`} 
                    onAnimationEnd={() => endAnimation("refP1")}>

                    Olá! Meu nome é Vanderson Santos, e eu sou um Programador apaixonado por tecnologias e inovações.
                    Tenho como minha principal habilida tecnica o desenvolvimento web e as liguagens que mais utilizo é o HTML, CSS, Bootstrap, JavaScrip e o ReactJS.
                    Busco sempre aprimorar os meus conhecimentos por isso não paro de estuar e atualmente os meus estudos estão focados em Node.JS e MongoDB.
                    Também possuo curso de liderança, Desenvolvimento temperamentall, Desenvolvimento Comportamental e Trabalho em Equipe.
                    
                </p>

            </div>

            <div className={styles.containerHabilidades}>
                <h1  className={`${styles.titleH1} ${night ? styles.darkTwo : ""}`}>Hard Skills</h1>
                    <ul className={styles.list}>{hb}</ul>
            </div>

            <div className={styles.containerText}>
                <p ref={p2} className={`${styles.paragrafos} ${night ? styles.dark : ""} ${obsanimationTwo ?  "animate__animated animate__fadeIn": ""}`}
                 onAnimationEnd={() => endAnimation("refp2") }>
                    Essa são as minhas principais habilidades tecnicas, com elas sou capaz de desenvolver sistemas web dinamicos e responsivos.
                    Mas sei que não é apenas habilidas tecnicas que devem formar um exelente profissional e é por esse motivo que também busco o aprimoramento e a exelência
                    das minhas habilidades comportamentais as famosas <span className={`${night ? styles.darkTwo : ""}`}>Soft Skills</span> abaixo mostro um pouco das minhas principais. 
                </p>
            </div>

            <div className={styles.containerHabilidades}>

                <motion.div ref={carousel} className={styles.carousel} whileTap={{cursor: "grabbing"}}>
                    <motion.div className={styles.inner} drag="x" dragConstraints={{right: 0, left: -widthCarousel}} initial={{x: 200}} animate={{x: 0}} transition={{duration: 0.8}}>
                        {images.map((image) => (
                            <motion.div key={image} className={styles.imgs}>
                                <img src={image} alt="carousel"/>
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>
                
            </div>

            {/* end corpo */}
        </div>
    )

}

export default Information