import React from 'react';
import { Wrapper } from './AboutSection.styles';
import { AboutSectionItems } from '../../assets/items/AboutSectionItems/AboutSectionItems';

const AboutSection = () => {
  return (
    <>
      {AboutSectionItems.map(({ title, description, photo, href }, i) => (
        <Wrapper key={i}>
          <h1>{title}</h1>
          <p>{description}</p>
          <img src={photo} />
          <a href={href}>
            <button>See More</button>
          </a>
        </Wrapper>
      ))}
    </>
  );
};

export default AboutSection;
