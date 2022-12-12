import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Hero from '../components/Hero/Hero';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import {
  Wrapper,
  ContactWrapper,
  ContactItem,
  FormWrapper,
  ContactItemsWrapper,
} from '../assets/styles/pages/contact.styles';
import Form from '../components/Form/Form';

const contactPage = () => {
  return (
    <MainTemplate>
      <Hero secondary title="contact" />
      <Wrapper>
        <ContactWrapper>
          <ContactItemsWrapper>
            <ContactItem href="https://www.linkedin.com/" target="_blank">
              <BsLinkedin />
              LinkedIn
            </ContactItem>
            <ContactItem href="https://gmail.com/">
              <FiMail />
              Email
            </ContactItem>
            <ContactItem
              href="https://github.com/JayCodeGitHub"
              target="_blank"
            >
              <BsGithub />
              GitHub
            </ContactItem>
          </ContactItemsWrapper>
          <FormWrapper>
            <Form />
          </FormWrapper>
        </ContactWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default contactPage;

export function Head() {
  return <title>Contact</title>;
}
