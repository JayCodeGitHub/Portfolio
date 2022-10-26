import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Hero from '../components/Hero/Hero';
import { Wrapper } from '../assets/styles/pages/contact.styles';
import Form from '../components/Form/Form';

const contactPage = () => {
  return (
    <MainTemplate>
      <Hero secondary title="contact" />
      <Wrapper>
        <Form />
      </Wrapper>
    </MainTemplate>
  );
};

export default contactPage;

export function Head() {
  return <title>Contact</title>;
}
