import React from 'react';
import { Wrapper } from './AboutSection.styles';
import { AboutSectionItems } from '../../assets/items/AboutSectionItems/AboutSectionItems';
import { Button } from '../Button/Button.styles';

const AboutSection = () => {
  return (
    <>
      {AboutSectionItems.map(({ title, description, photo, href }, i) => (
        <Wrapper key={i}>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={href}>
              <Button>See More</Button>
            </a>
          </div>
          <img src={photo} />
        </Wrapper>
      ))}
    </>
  );
};

export default AboutSection;
