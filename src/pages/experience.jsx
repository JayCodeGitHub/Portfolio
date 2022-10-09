import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Hero from '../components/Hero/Hero';
import { Wrapper } from '../assets/styles/pages/experience.styles';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import { ProjectsItems } from '../assets/items/ProjectsItems/ProjectsItems';

const experiencePage = () => {
  return (
    <MainTemplate>
      <Hero secondary title="experience" />
      <Wrapper>
        {ProjectsItems.map((item) => (
          <ProjectSection
            key={item.name}
            type={item.type}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </Wrapper>
    </MainTemplate>
  );
};

export default experiencePage;
