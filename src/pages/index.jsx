import React from 'react';
import Hero from '../components/Hero/Hero';

function IndexPage() {
  return (
    <>
      <Hero />
    </>
  );
}

export default IndexPage;

export function Head() {
  return <title>JayCode Developer</title>;
}
