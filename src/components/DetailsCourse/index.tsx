import { Container, CardInfo } from './styles';

import Icon1 from '../../assets/images/icon-details1.svg';
import Icon2 from '../../assets/images/icon-details2.svg';
import Icon3 from '../../assets/images/icon-details3.svg';

import { SvgTecnologies } from '../SvgTecnologies';
import { SvgPlanet } from '../SvgPlanet';
import { SvgSquares } from '../SvgSquares';

interface CardInfoProps {
  title: string;
  description: string;
}

interface DetailsCourseProps {
  cardInfo: CardInfoProps[];
}

export function DetailsCourse({ cardInfo }: DetailsCourseProps) {
  return (
    <Container>
      <CardInfo>
        <img src={Icon1} alt="Icon1" />
        <h2>{cardInfo[0].title}</h2>
        <p>{cardInfo[0].description}</p>
      </CardInfo>
      <SvgTecnologies />

      <CardInfo>
        <img src={Icon2} alt="Icon2" />
        <h2>{cardInfo[1].title}</h2>
        <p>{cardInfo[1].description}</p>
      </CardInfo>
      <SvgPlanet />

      <CardInfo>
        <img src={Icon3} alt="Icon3" />
        <h2>{cardInfo[2].title}</h2>
        <p>{cardInfo[2].description}</p>
      </CardInfo>
      <SvgSquares />
    </Container>
  );
}
