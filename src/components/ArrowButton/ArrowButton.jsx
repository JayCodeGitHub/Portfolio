import React from 'react';
import {
  OuterWrapper,
  Wrapper,
  StyledArrow,
  StyledCircle,
} from './ArrowButton.styles';

const ArrowButton = ({ children }) => {
  return (
    <OuterWrapper>
      <span>{children}</span>
      <Wrapper>
        <div>
          <svg width="60" height="60">
            <circle
              stroke="currentColor"
              stroke-width="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
            ></circle>
            <StyledCircle
              stroke="currentColor"
              stroke-width="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
              transform-origin="30px 30px"
              stroke-dashoffset="175.92918860102841"
            ></StyledCircle>
          </svg>
        </div>
        <span>
          <StyledArrow
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
              fill="currentColor"
            ></path>
          </StyledArrow>
        </span>
      </Wrapper>
    </OuterWrapper>
  );
};

export default ArrowButton;
