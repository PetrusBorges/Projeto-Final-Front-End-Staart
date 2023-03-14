import { Banner, Image, InfoCard, Container, Content, Slider, CourseInfo } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import { useCourses } from '../../hooks/useCourses';

export function Courses() {

  const { journeysDetailsCourses } = useCourses();

  if (!journeysDetailsCourses) {
    return null;
  }

  return (
    <>
      <Header />
      <Banner>
        <InfoCard>
          <h1 className='title'>Jornada</h1>
          <h1>{journeysDetailsCourses.title}</h1>
          <p>{journeysDetailsCourses.description}</p>
        </InfoCard>
        <Image src={journeysDetailsCourses.medias.thumb} />
      </Banner>

      <Container>
        <Content>
          <h1 className='title'>Aulas disponíveis</h1>

          <Slider>
            <Swiper
              slidesPerView={1}
              spaceBetween={90}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {journeysDetailsCourses.modules.map((module) => (
                <SwiperSlide key={module.title}>
                  <CourseInfo>{module.title}</CourseInfo>
                </SwiperSlide>
              ))}
            </Swiper>
          </Slider>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
