import React from 'react';
import { Wrapper } from './AboutSection.styles';
import { AboutSectionItems } from '../../assets/items/AboutSectionItems/AboutSectionItems';
import { Button } from '../Button/Button.styles';

const AboutSection = () => {
  return (
    <>
      <Wrapper>
        <div>
          <h1>{AboutSectionItems.title}</h1>
          <p>{AboutSectionItems.description}</p>
          <a href={AboutSectionItems.href}>
            <Button>{AboutSectionItems.button}</Button>
          </a>
        </div>
        <img src={AboutSectionItems.image} alt={AboutSectionItems.alt} />
      </Wrapper>
    </>
  );
};

export default AboutSection;
