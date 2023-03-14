import styled, { keyframes } from 'styled-components';

const animationForm1 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animationForm2 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animationForm3 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animationForm4 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Svg = styled.svg`
  overflow: hidden;
  width: 450px;

  #bigplanet1 {
    transform-origin: center center;
    animation: ${animationForm1} 10s linear infinite;
  }

  #bigplanet2 {
    transform-origin: center center;
    animation: ${animationForm2} 15s linear infinite;
  }

  #bigplanet3 {
    transform-origin: center center;
    animation: ${animationForm3} 30s linear infinite;
  }

  #planets {
    animation: ${animationForm4} 2s ease 2s infinite alternate;
  }
`;
