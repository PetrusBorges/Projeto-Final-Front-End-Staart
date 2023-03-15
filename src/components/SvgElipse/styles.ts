import styled, { keyframes } from 'styled-components';

const createPushAnimation = keyframes`
  0% {
    fill-opacity: 0;
    stroke-dasharray: 1 1000;
    stroke-dashoffset: 0;
    stroke-width: 0;
    opacity: 1;
  }
  30% {
    fill-opacity: 0;
    stroke-dasharray: 150 0;
    stroke-dashoffset: 0;
    stroke-width: 1;
    opacity: 1;
  }
  60%,100% {
    fill-opacity: 1;
    stroke-dasharray: 150 0;
    stroke-dashoffset: 0;
    stroke-width: 0;
    opacity: 1;
  }
`;

const elipseAnimation1 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.1;
  }
`;

const elipseAnimation2 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.2;
  }
`;

const elipseAnimation3 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.3;
  }
`;

const elipseAnimation4 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Svg = styled.svg`
  overflow: hidden;
  width: 350px;

  #REC1 {
    animation: ${createPushAnimation} 3s ease 0s infinite alternate;
  }

  #REC2 {
    animation: ${createPushAnimation} 3s ease 0s infinite alternate;
  }

  #ELIP1 {
    animation: ${elipseAnimation4} 3s ease 0s infinite alternate;
  }

  #ELIP2 {
    animation: ${elipseAnimation3} 3s ease 0s infinite alternate;
  }

  #ELIP3 {
    animation: ${elipseAnimation2} 3s ease 0s infinite alternate;
  }

  #ELIP4 {
    animation: ${elipseAnimation1} 3s ease 0s infinite alternate;
  }
`;
