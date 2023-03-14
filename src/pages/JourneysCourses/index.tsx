import { Banner, Image, InfoCard, Container, Content, Slider } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { JourneysCourseCard } from '../../components/JourneysCourseCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import { useJourneysCourses } from '../../hooks/useJourneysCourses';

export function JourneysCourses() {

  const { journeysDetails, journeysDetailsCourses } = useJourneysCourses();

  if (!journeysDetails) {
    return null;
  }

  return (
    <>
      <Header />
      <Banner>
        <InfoCard>
          <h1 className='title'>Jornada</h1>
          <h1>{journeysDetails.title}</h1>
          <p>{journeysDetails.description}</p>
        </InfoCard>
        <Image src={journeysDetails.medias.banner} />
      </Banner>

      <Container>
        <Content>
          <h1 className='title'>Cursos disponíveis</h1>


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
              {journeysDetailsCourses.map((journeyCourse) => (
                <SwiperSlide key={journeyCourse.id}>
                  <JourneysCourseCard
                    journeyCourse={journeyCourse}
                  />
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
