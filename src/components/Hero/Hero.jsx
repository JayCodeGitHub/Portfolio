import React from 'react';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import styled from 'styled-components';

const StyledParticles = styled(Particles)`
  height: ${(props) => (props.secondary ? '40vh' : '100vh')};
  width: 100%;
  background-color: black;
  position: relative;
  z-index: ;
`;

function Hero({ secondary }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <>
      <StyledParticles
        secondary={secondary}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: {
            color: {
              value: '#23232D',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#2233ff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 2, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}

export default Hero;
