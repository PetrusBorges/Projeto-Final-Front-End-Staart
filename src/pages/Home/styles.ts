import styled from 'styled-components';
import { device } from '../../components/device';

export const InfoHomePage = styled.div`
  background-color: ${({ theme }) => theme.color[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
`;

export const InfoCard = styled.div`
  z-index: 2;
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  color: ${({ theme }) => theme.color[50]};
  padding: 16px;
  background: linear-gradient(219.14deg, rgba(20, 29, 51, 0.4) -1.5%, rgba(4, 8, 18, 0.4) 102.36%);
  border: 2px solid rgba(46, 102, 201, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 18px;

  .title {
    font-size: 46px;
    background: linear-gradient(225deg, #916BE3 0%, #61CCE3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media ${device.mobileM} {
    width: 250px;

    .title {
      font-size: 28px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderJornadas = styled.div`
  width: 650px;
  text-align: center;
  margin: 32px 0px;
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.color[50]};

  span {
    background: linear-gradient(225deg, #916BE3 0%, #61CCE3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    width: 380px;
  }

  @media ${device.mobileL} {
    font-size: 14px;
    width: 320px;
  }

  @media ${device.mobileM} {
    font-size: 12px;
    width: 300px;
  }
`;

export const Slider = styled.div`
  .swiper {
    width: 100%;
    max-width: 768px;
    height: 450px;

    .swiper-pagination-bullet {
      background-color: ${({ theme }) => theme.color[300]};
    }

    @media ${device.tablet} {
      max-width: 425px;
    }

    @media ${device.mobileL} {
      max-width: 375px;
    }

    @media ${device.mobileM} {
      max-width: 310px;
    }
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CourseInfo = styled.div`
  width: 100%;
  margin: 32px 0px;

  .title {
    margin-bottom: 32px;
    text-align: center;
    font-weight: bold;
    font-size: 36px;
    background: linear-gradient(225deg, #916BE3 0%, #61CCE3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media ${device.tablet} {
    .title {
      font-size: 26px;
    }
  }

  @media ${device.mobileL} {
    .title {
      font-size: 24px;
    }
  }

  @media ${device.mobileM} {
    .title {
      font-size: 22px;
    }
  }
`;

export const TestimonyInfo = styled.div`
  width: 100%;
  margin: 32px 0px;

  .title {
    margin-bottom: 32px;
    text-align: center;
    font-weight: bold;
    font-size: 36px;
    background: linear-gradient(225deg, #916BE3 0%, #61CCE3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media ${device.tablet} {
    .title {
      font-size: 24px;
    }
  }

  @media ${device.mobileL} {
    .title {
      font-size: 22px;
    }
  }

  @media ${device.mobileM} {
    .title {
      font-size: 20px;
    }
  }

  @media ${device.mobileS} {
    .title {
      transform: scale(0.9);
    }
  }
`;
