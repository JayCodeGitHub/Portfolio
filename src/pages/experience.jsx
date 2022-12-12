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
        {ProjectsItems.map((item, i) => (
          <ProjectSection
            key={i}
            i={i}
            image={item.image}
            type={item.type}
            name={item.name}
            description={item.description}
            technologies={item.technologies}
            href={item.href}
            github={item.github}
          />
        ))}
      </Wrapper>
    </MainTemplate>
  );
};

export default experiencePage;

export function Head() {
  return <title>Experience</title>;
}
