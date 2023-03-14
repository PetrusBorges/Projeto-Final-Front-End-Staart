import styled, { keyframes } from 'styled-components';

const animationForm1 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const animationForm2 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(165px, 165px, 0);
  }
`;

const animationForm3 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-20px, -50px, 0);
  }
`;

export const Svg = styled.svg`
  overflow: hidden;
  width: 450px;

  #squares_2 {
    animation: ${animationForm1} 2s ease 2s infinite alternate;
  }

  #Ellipse-757 {
    animation: ${animationForm2} 4s ease 2s infinite alternate;
  }

  #Ellipse-751 {
    animation: ${animationForm3} 4s ease 2s infinite alternate;
  }
`;
