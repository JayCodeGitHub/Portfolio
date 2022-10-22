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
          <h1>Champion-Academy</h1>
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
          <h1>Karate Team Oborniki</h1>
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
          <h1>Karate Team Oborniki</h1>
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
