import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wrapper, SvgWrapper } from './AnimationSection.styles';
import Scene from '../../assets/icons/Scene.svg';

gsap.registerPlugin(ScrollTrigger);

function AnimationSection() {
  const wrapper = useRef(null);
  useEffect(() => {
    const [elements] = wrapper.current.children;

    const background = elements.getElementById('background');
    const desktop = elements.getElementById('desktop');
    const laptop = elements.getElementById('laptop');
    const cup = elements.getElementById('cup');
    const character = elements.getElementById('character');

    gsap.set([background, desktop, laptop, cup, character], {
      autoAlpha: 0,
    });

    gsap.fromTo(
      background,
      {},
      {
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: wrapper.current,
          start: '20% 50%',
        },
      },
    );
    gsap.fromTo(
      desktop,
      { y: '-=100' },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: wrapper.current,
          start: '20% 50%',
        },
      },
    );
    gsap.fromTo(
      laptop,
      { y: '-=100' },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: wrapper.current,
          start: '20% 50%',
        },
      },
    );
    gsap.fromTo(
      cup,
      { x: '+=100' },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 1.5,
        scrollTrigger: {
          trigger: wrapper.current,
          start: '20% 50%',
        },
      },
    );
    gsap.fromTo(
      character,
      {},
      {
        autoAlpha: 1,
        duration: 1,
        delay: 2,
        scrollTrigger: {
          trigger: wrapper.current,
          start: '20% 50%',
        },
      },
    );
  });
  const AnimationSectionItems = {
    title: 'Meet like minded people who face similar challenges',
    description: `Join the discord and get better at building software together.`,
  };

  return (
    <Wrapper>
      <SvgWrapper ref={wrapper}>
        <Scene />
      </SvgWrapper>
      <div>
        <h1>{AnimationSectionItems.title}</h1>
        <p>{AnimationSectionItems.description}</p>
      </div>
    </Wrapper>
  );
}

export default AnimationSection;
