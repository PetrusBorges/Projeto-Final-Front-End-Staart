import { Container } from './styles';

import { JourneysProps } from '../../types/journeys';

import { Link } from 'react-router-dom';

interface JouneysCardProps {
  journey: JourneysProps;
}

export function JouneysCard({ journey }: JouneysCardProps) {
  return (
    <Container>
      <Link to={`/journeys/${journey.pathID}`}>
        <img src={journey.medias.thumb} alt="Journey-medias-thumb" />
        <h1>{journey.title}</h1>
        <p>{journey.description}</p>
        <strong>{journey.coursesID.length} Cursos</strong>
      </Link>
    </Container>
  );
}
