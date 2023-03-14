import { InfoHomePage, InfoCard, Container, Content, HeaderJornadas, Slider, CourseInfo, TestimonyInfo } from './styles';

import { Header } from '../../components/Header';
import { SvgBackGround } from '../../components/SvgBackGround';
import { Select } from '../../components/select';
import { JouneysCard } from '../../components/JouneysCard';
import { DetailsCourse } from '../../components/DetailsCourse';
import { deatilsCourseMock } from '../../components/DetailsCourse/mock';
import { TestimonyPeople } from '../../components/TestimonyPeople';
import { testimonyPeopleMock } from '../../components/TestimonyPeople/mock';
import { Footer } from '../../components/Footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import { useHome } from '../../hooks/useHome';

export function Home() {

  const { handleSelectChange, journeys } = useHome();

  return (
    <>
      <Header />

      <InfoHomePage>
        <InfoCard>
          <h1 className='title'>Programe</h1>
          <h1>o seu futuro global agora!</h1>
          <small>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </small>
        </InfoCard>
        <SvgBackGround />
      </InfoHomePage>

      <Container>
        <Content>
          <HeaderJornadas>
            <h1>Explore nossas <span>jornadas</span></h1>
            <p>Desbloqueie o seu próximo nível de conhecimento e seja contratado pelas maiores empresas de tecnologia do país!</p>
          </HeaderJornadas>

          <Select onChange={handleSelectChange}>
            <option value="filterByFetchData">Filtrar por Padrão</option>
            <option value="filterByAlphabet">Filtrar por ordem alfabética</option>
            <option value="filterByCourses">Filtrar por quantidade de cursos</option>
          </Select>

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
              {journeys.map((journey) => (
                <SwiperSlide key={journey.pathID}>
                  <JouneysCard
                    journey={journey}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Slider>

          <CourseInfo>
            <h1 className='title'>Ganhe destaque mais rápido no mercado!</h1>

            <DetailsCourse
              cardInfo={deatilsCourseMock}
            />
          </CourseInfo>

          <TestimonyInfo>
            <h1 className='title'>A comunidade tá voando! Veja o depoimento de quem já encontrou um novo desafio profissional.</h1>

            <TestimonyPeople
              testimonyInfo={testimonyPeopleMock}
            />
          </TestimonyInfo>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
