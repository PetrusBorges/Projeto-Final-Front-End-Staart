import { InfoHomePage, InfoCard, Container, Content, HeaderJornadas, Slider, CourseInfo, TestimonyInfo } from './styles';

import { Header } from '../../components/Header';
import { SvgBackGround } from '../../components/SvgBackGround';
import { Select } from '../../components/select';
import { JouneysCard } from '../../components/JouneysCard';
import { DetailsCourse } from '../../components/DetailsCourse';
import { TestimonyPeople } from '../../components/TestimonyPeople';
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
              cardInfo={[{
                title: 'Aprenda tecnologias emergentes',
                description: 'Os nossos cursos e programas de formação são criados em conjunto com especialistas das empresas mais inovadoras do mundo, aplicando uma metodologia para que você domine as tecnologias utilizadas no mercado e também mergulhe nas novas e mais atuais tecnologias que impactarão o futuro dos negócios digitais.',
              },
              {
                title: 'Compartilhe conhecimento em comunidade',
                description: 'Somos mais de 600 mil pessoas, aprendendo de forma colaborativa, de gente ajudando gente, construindo e vibrando juntos a cada conquista.',
              },
              {
                title: 'Construa seu portfólio com projetos de mercado',
                description: 'Desenvolva projetos inovadores e crie soluções em conjunto com experts para manter o seu portfólio atualizado. Aplique na prática todos os conceitos e tecnologias aprendidas, criando um grande diferencial para os seus processos seletivos.',
              }]}
            />
          </CourseInfo>

          <TestimonyInfo>
            <h1 className='title'>A comunidade tá voando! Veja o depoimento de quem já encontrou um novo desafio profissional.</h1>

            <TestimonyPeople
              testimonyInfo={[{
                name: 'Lucas Solza',
                jobName: 'Desenvolvedor Front-End',
                description: 'Realizei o sonho de trabalhar com tecnologia, tudo graças aos professores do CreatePush!'
              },
              {
                name: 'Bruna Melo',
                jobName: 'Desenvolvedora Back-End',
                description: 'Finalizar o curso e receber a notícia de ser aprovada no processo seletivo foi incrível, obrigada aos professores e colegas!'
              },
              {
                name: 'Alex Ferreira',
                jobName: 'Desenvolvedor Full-Stack',
                description: 'O CreatePush me mostrou que compartilhar conhecimento com outras pessoas é a melhor forma de crescer!'
              }]}
            />
          </TestimonyInfo>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
