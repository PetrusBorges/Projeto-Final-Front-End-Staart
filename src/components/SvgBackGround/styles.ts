import styled, { keyframes } from 'styled-components';

const animationForm1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-200px, -100px, 0);
  }
`;

const animationForm2 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-20px, 50px, 0);
  }
`;

const animationForm3 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-160px, -10px, 0);
  }
`;

const animationForm4 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(80px, 270px, 0);
  }
`;

const animationForm5 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(290px, 30px, 0);
  }
`;

const animationForm6 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-220px, -30px, 0);
  }
`;

const animationForm7 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(170px, 10px, 0);
  }
`;

const animationForm8 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(220px, 150px, 0);
  }
`;

const animationForm9 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-320px, 10px, 0);
  }
`;

const animationForm10 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-200px, -100px, 0);
  }
`;

const animationForm11 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-200px, -100px, 0);
  }
`;

export const Svg = styled.svg`
  position: relative;
  overflow: hidden;
  height: 100%;

  #vector1 {
    animation: ${animationForm1} 3s ease 3s infinite alternate;
  }

  #vector2 {
    animation: ${animationForm2} 4s ease 4s infinite alternate;
  }

  #vector3 {
    animation: ${animationForm3} 2s ease 2s infinite alternate;
  }

  #vector4 {
    animation: ${animationForm4} 4s ease 4s infinite alternate;
  }

  #vector5 {
    animation: ${animationForm5} 3s ease 1s infinite alternate;
  }

  #vector6 {
    animation: ${animationForm6} 2s ease 2s infinite alternate;
  }

  #vector7 {
    animation: ${animationForm7} 4s ease 4s infinite alternate;
  }

  #vector8 {
    animation: ${animationForm8} 3s ease 1s infinite alternate;
  }

  #vector9 {
    animation: ${animationForm9} 3s ease 3s infinite alternate;
  }

  #vector10 {
    animation: ${animationForm10} 3s ease 1s infinite alternate;
  }

  #vector11 {
    animation: ${animationForm11} 4s ease 4s infinite alternate;
  }
`;
