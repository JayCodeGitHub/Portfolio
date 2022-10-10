import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import Hero from '../components/Hero/Hero';

const aboutPage = () => {
  return (
    <MainTemplate>
      <Hero secondary title="about" />
    </MainTemplate>
  );
};

export default aboutPage;

export function Head() {
  return <title>About</title>;
}
