import React from 'react';
import { Wrapper, EmailWrapper, IconWrapper } from './Footer.styles';
import GitHubIcon from '../../assets/icons/Github.svg';
import LinkedInIcon from '../../assets/icons/LinkedIn.svg';

const Footer = () => {
  return (
    <Wrapper>
      <EmailWrapper>
        <h2>jakub.gryzinski@gamil.com</h2>
      </EmailWrapper>
      <IconWrapper>
        <a
          target="_blank"
          aria-label="Link to my LinkedIn"
          href="https://pl.linkedin.com/"
        >
          <LinkedInIcon />
        </a>
      </IconWrapper>
      <IconWrapper>
        <a
          target="_blank"
          aria-label="Link to my GitHub"
          href="https://github.com/JayCodeGitHub"
        >
          <GitHubIcon />
        </a>
      </IconWrapper>
    </Wrapper>
  );
};

export default Footer;
