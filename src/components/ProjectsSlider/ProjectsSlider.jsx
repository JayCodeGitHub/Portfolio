import React from 'react';
import {
  Wrapper,
  Header,
  ProjectsWrapper,
  Project,
  IconsWrapper,
} from './ProjectsSlider.styles';
import { Button } from '../Button/Button.styles';
import GitHubIcon from '../../assets/icons/Github.svg';
import LinkIcon from '../../assets/icons/Link.svg';
import ChampionAcademyImageMobile from '../../assets/images/champion-academy-mobile.png';
import KarateTeamImageMobile from '../../assets/images/karate-team-mobile.png';
import HappyNotesImageMobile from '../../assets/images/happy-notes-mobile.png';

const ProjectsSlider = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Some of my projects</h1>
        <Button> See More</Button>
      </Header>
      <ProjectsWrapper>
        <Project>
          <img src={ChampionAcademyImageMobile} />
          <h2>Champion Academy</h2>
          <IconsWrapper>
            <a target="_blank">
              <GitHubIcon />
            </a>
            <a target="_blank">
              <LinkIcon />
            </a>
          </IconsWrapper>
        </Project>
        <Project>
          <img src={KarateTeamImageMobile} />
          <h2>Karate Team Oborniki</h2>
          <IconsWrapper>
            <a target="_blank">
              <GitHubIcon />
            </a>
            <a target="_blank">
              <LinkIcon />
            </a>
          </IconsWrapper>
        </Project>
        <Project>
          <img src={HappyNotesImageMobile} />
          <h2>Happy Notes</h2>
          <IconsWrapper>
            <a target="_blank">
              <GitHubIcon />
            </a>
            <a target="_blank">
              <LinkIcon />
            </a>
          </IconsWrapper>
        </Project>
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default ProjectsSlider;
