import React, { useRef, useEffect } from 'react';
import { Wrapper, SvgWrapper } from './AnimationSection.styles';
import Scene from '../../assets/icons/scene.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
          start: '20% top',
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
          start: '20% top',
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
          start: '20% top',
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
          start: '20% top',
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
          start: '20% top',
        },
      },
    );
  });
  return (
    <Wrapper>
      <SvgWrapper ref={wrapper}>
        <Scene />
      </SvgWrapper>
      <div>
        <h1>Meet like minded people who face similar challenges</h1>
        <p>Join the discord and get better at building software together.</p>
      </div>
    </Wrapper>
  );
}

export default AnimationSection;
