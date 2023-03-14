import styled from 'styled-components';
import { device } from '../../components/device';

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  margin-bottom: 52px;
`;

export const Image = styled.img`
  position: relative;
  overflow: hidden;
  height: 100%;
  mask-image: linear-gradient(to left, rgba(0,0,0,0) 0%,rgba(0,0,0,0.6) 20%);
  -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,0) 0%,rgba(0,0,0,0.9) 20%);

  @media ${device.laptop} {
    object-fit: cover;
  }
`;

export const InfoCard = styled.div`
  transform: translateX(-400px);
  z-index: 2;
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  color: ${({ theme }) => theme.color[50]};
  padding: 16px;
  background: linear-gradient(219.14deg, rgba(20, 29, 51, 0.4) -1.5%, rgba(4, 8, 18, 0.4) 102.36%);
  border: 2px solid rgba(46, 102, 201, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 18px;

  .title {
    background: linear-gradient(225deg, #916BE3 0%, #61CCE3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media ${device.laptop} {
    transform: translateX(0px);
    width: 400px;
    font-size: 14px;

    .title {
      font-size: 28px;
    }
  }

  @media ${device.tablet} {
    width: 300px;
    font-size: 13px;

    .title {
      font-size: 18px;
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

  .title {
    background: linear-gradient(225deg, #916BE3 0%, #61CCE3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media ${device.tablet} {
    .title {
      font-size: 22px;
    }
  }
`;

export const Slider = styled.div`
  .swiper {
    width: 100%;
    max-width: 768px;
    height: 150px;

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
      max-width: 280px;
    }
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CourseInfo = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 550px;
  color: ${({ theme }) => theme.color[50]};
  padding: 16px;
  background: linear-gradient(219.14deg, rgba(20, 29, 51, 0.4) -1.5%, rgba(4, 8, 18, 0.4) 102.36%);
  border: 2px solid rgba(46, 102, 201, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 18px;
  transition: all .5s ease;

  &:hover {
    color: ${({ theme }) => theme.color[200]};
    background: ${({ theme }) => theme.color[800]};
  }
`;
