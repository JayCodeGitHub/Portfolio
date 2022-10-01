import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: ${({ theme }) => theme.primary};
`;

const IndexPage = () => {
  return (
    <>
      <H1>JayCode</H1>
    </>
  );
};

export default IndexPage;

export function Head() {
  return <title>JayCode Developer</title>;
}
