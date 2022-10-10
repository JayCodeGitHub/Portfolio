import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Hero from '../components/Hero/Hero';

const contactPage = () => {
  return (
    <MainTemplate>
      <Hero secondary title="contact" />
    </MainTemplate>
  );
};

export default contactPage;

export function Head() {
  return <title>Contact</title>;
}
