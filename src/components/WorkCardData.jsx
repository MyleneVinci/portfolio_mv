import saintstagramMockup from '../assets/saintstagramMockup.png';
import eurhekaMockup from '../assets/eurhekaMockup.jpg';
import loststuffmockup from '../assets/loststuffmockup.jpg';
import rock_paper_scissors_lizard_spockMockup from '../assets/rock_paper_scissors_lizard_spockMockup.jpg';
import javascript from '../assets/javascript.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import express from '../assets/express.png';


const ProjectCardData = [
    {
        id:1,
        imgsrc: saintstagramMockup,
        title: "Saintstagram",
        context:"projet réalisé en équipe dans le cadre de ma formation à la Wild Code School",
        resume: "réseau social fictif des chevaliers du zodiaque basé sur instagram",
        techno1: html ,
        techno2:css,
        techno3:javascript,
        techno4: react,
        techno5: null,
        techno6: null,
        view:"https://saintstagram.netlify.app/",
        source: "https://github.com/MyleneVinci/Sainstagram"
    },
    {
        id:2,
        imgsrc: eurhekaMockup,
        title: "Eurheka!",
        context:"projet réalisé en équipe en partenariat avec un professionnel dans le cadre de ma formation à la Wild Code School",
        resume: "plateforme de consulting RH",
        techno1: html ,
        techno2:css,
        techno3:javascript,
        techno4: react,
        techno5: node,
        techno6: express,
        view: null,
        source: "https://github.com/MyleneVinci/p3-eurheka-front"
    },
    {
        id:3,
        imgsrc: rock_paper_scissors_lizard_spockMockup,
        title: "Pierre Feuille Ciseaux Lézard Spock",
        context:"Projet Personnel",
        resume: "Variante du Pierre Feuille Ciseaux, popularisée par la série The Big Bang Theory",
        techno1: html ,
        techno2:css,
        techno3:javascript,
        techno4: null,
        techno5: null,
        techno6: null,
        view: "https://the-big-bang-theory-game.netlify.app/",
        source: "https://github.com/MyleneVinci/rock-paper-scissors-lizard-spock"
    },
    {
        id:4,
        imgsrc: loststuffmockup,
        title: "Objets perdus trouvés",
        context:"Projet Personnel",
        resume: "Platerforme permettant de déclarer des objets perdus ou trouvés et de les localiser sur une carte",
        techno1: html ,
        techno2:css,
        techno3:javascript,
        techno4: react,
        techno5: node,
        techno6: express,
        view: null,
        source: "https://github.com/MyleneVinci/my_app_lost_and_found_front"
    }
]

export default ProjectCardData;