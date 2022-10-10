import React from 'react';
import { Wrapper, ImageWrapper, ContentWrapper } from './ProjectSection.styles';

const ProjectSection = ({
  type,
  name,
  href,
  github,
  description,
  technologies,
  image,
  i,
}) => {
  return (
    <>
      <Wrapper>
        <ImageWrapper order={i}>
          <img src={image} />
        </ImageWrapper>
        <ContentWrapper order={i}>
          <p>{type}</p>
          <h3>{name}</h3>
          <div>
            <p>{description}</p>
          </div>
          <ul>
            {technologies.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <div>github site</div>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default ProjectSection;
