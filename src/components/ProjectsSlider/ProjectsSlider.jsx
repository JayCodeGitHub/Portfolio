import React from 'react';
import {
  Wrapper,
  Header,
  ProjectsWrapper,
  Project,
  IconsWrapper,
} from './ProjectsSlider.styles';
import { Button } from '../Button/Button.styles';
import { ProjectsSliderItems } from '../../assets/items/ProjectsSliderItems/ProjectsSliderItems';
import ArrowButton from '../ArrowButton/ArrowButton';
import GitHubIcon from '../../assets/icons/Github.svg';
import LinkIcon from '../../assets/icons/Link.svg';

const ProjectsSlider = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Some of my projects</h1>
        <ArrowButton>See More</ArrowButton>
      </Header>
      <ProjectsWrapper>
        {ProjectsSliderItems.map((item, i) => (
          <Project>
            <img src={item.image} />
            <h2>{item.name}</h2>
            <IconsWrapper>
              <a target="_blank" href={item.github}>
                <GitHubIcon />
              </a>
              <a target="_blank" href={item.href}>
                <LinkIcon />
              </a>
            </IconsWrapper>
          </Project>
        ))}
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default ProjectsSlider;
