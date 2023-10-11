import { produce } from "immer";
import styles from "../Componets.modules.css/Modal.module.css"

function Reducers(state = {
  menu: window.innerWidth < 1050 ? false : true,
  night: false,
  observation: { obsOne: false, obsTwo: false },
  widthCarousel: 0,
  modal: { isOpen: false, projeto: null },
  timer: false,
  show: "",
  projetos: [
    
      {
        ID: 0,
        Nome: "Jogo da Velha",
        Img: "https://i.ibb.co/4mcZHjc/jogo-da-velha.png",
        video: "https://streamable.com/e/dnqfj3?autoplay=1",
        description: "Para a criação deste projeto tive como inspiração minha esposa. Hoje ela cursa nutrição e de forma criativa tive a ideia de fazer uma disputa entre frutas e legumes.",
        tech: ["HTML", "CSS", "JavaScript", "CSS-grid"],
        Github: "https://github.com/VandersonSantosSilva/Jogo-da-Velha",
        Linkdin: "https://www.linkedin.com/feed/update/urn:li:activity:7077623772538638336/",
        WebPage: "https://vandersonsantossilva.github.io/Jogo-da-Velha/",
        descriptionModal: "Esse projeto também tem o intuito de ser aplica em projetos de EAN (Educação Alimentar Nutricional) para crianças. De forma divertida as crianças poderão aprender a importância de uma boa alimentação desde a infância até a velhice, algo importante que deve ser ensinado para as proximas gerações!"
      },
      
      {
      ID: 1,
      Nome: "Pokedex",
      Img: "https://i.ibb.co/rdvKG8B/Pokedex.png",
      video: "https://streamable.com/e/p1z82k?autoplay=1",
      description: "Projeto criado com intuito de relembrarmos a infância, projeto que exibe uma listagem de pokemons e seus atributos, como força, energia, ataques especiais entre outros.",
      tech: ["HTML", "CSS", "JavaScript", "ReactJS", "Redux", "React-Icons"],
      Github: "https://github.com/VandersonSantosSilva/pokemania-app/tree/master",
      Linkdin: "https://www.linkedin.com/feed/update/urn:li:activity:7070089120819093504/",
      WebPage: "https://pokemania-2ln441eci-vandersonsantossilva.vercel.app/",
      descriptionModal: "Essa Pokedex foi muito importante nos avanços dos meus conhecimentos em desenvolvimento web, com esse projeto tive o meu primeiro contato com API, também foi um ótimo projeto pois através dele foi possível relembrar a infância de muitas pessoas! "
    },
  ],

}, action) {
  return produce(state, draftState => {
    switch (action.type) {
      case "MENU":
        draftState.menu = action.payload;
        break;
      case "NIGHT":
        draftState.night = action.payload;
        break;
      case "OBSERVATION":
        draftState.observation.obsOne = action.payload;
        break;
      case "OBSERVATIONTWO":
        draftState.observation.obsTwo = action.payload;
        break;
      case "CAROUSEL":
        draftState.widthCarousel = action.payload;
        break;
      case "MODAL":
        draftState.modal.isOpen = action.payload;
        draftState.modal.projeto = action.projeto;
        break;
      case "TIMER":
        draftState.timer = action.payload
        break;
      case "SHOW":
        draftState.show = action.payload
        break;
      default:
        return state;
    }
  });
}

export default Reducers;
