import KarateTeamImage from '../../images/karate-team.png'
import ChampionAcademyImage from '../../images/champion-academy.png'
import HappyNotesImage from '../../images/happy-notes.png'

export const ProjectsItems = [
    {
        type: 'commercial',
        name: 'Karate-Team',
        href: 'https://karate-team.pl/',
        github: 'https://github.com/JayCodeGitHub/karate-team.pl',
        description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book',
        technologies: ["React", "Gatsby", "Dato CMS", "styled-components","GraphQL"],
        image: KarateTeamImage,
        alt: 'Screenshot from Karate Team desktop website'
    },
    {
        type: 'commercial',
        name: 'Champion-Academy',
        href: 'https://championacademy.pl/',
        github: 'https://github.com/JayCodeGitHub/Final-Champion-Academy',
        description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book',
        technologies: ["React", "Gatsby", "Dato CMS", "tailwind css", "GraphQL"],
        image: ChampionAcademyImage,
        alt: 'Screenshot from Champion Academy desktop website'
    },
    {
        type: 'Non-commercial',
        name: 'Happy-Notes',
        href: 'https://github.com/JayCodeGitHub/Happy-Notes',
        github: 'https://github.com/JayCodeGitHub/Happy-Notes',
        description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book',
        technologies: ["React","tailwind css", "Rest API", "Express JS", "Mongo DB"],
        image: HappyNotesImage,
        alt: 'Screenshot from Happy Notes desktop website'
    },
]