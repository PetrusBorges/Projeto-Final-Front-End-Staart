import { Container, InfoCourse, LevelCourse } from './styles';

import { JourneyDetailsCoursesProps } from '../../types/journeyDetailsCourses';

import { Link } from 'react-router-dom';

import EasyIcon from '../../assets/images/iconeasy.svg';
import EasyMedium from '../../assets/images/iconmedium.svg';
import EasyHard from '../../assets/images/iconhard.svg';

import { convertToMinutes } from '../../utils/convertToMinutes';

interface JouneysCardProps {
  journeyCourse: JourneyDetailsCoursesProps;
}

export function JourneysCourseCard({ journeyCourse }: JouneysCardProps) {
  return (
    <Container>
      <Link to={`/courses/${journeyCourse.id}`}>
        <img src={journeyCourse.medias.thumb} alt="journeyCourse-medias-thumb" />
        <h1>{journeyCourse.title}</h1>

        <p>{journeyCourse.instructor}</p>
        <InfoCourse>
          <LevelCourse>
            {journeyCourse.level === 'beginner' && (
              <>
                <img src={EasyIcon} alt="EasyIcon" />
                <small>Iniciante</small>
              </>
            )}
            {journeyCourse.level === 'intermediate' && (
              <>
                <img src={EasyMedium} alt="EasyMedium" />
                <small>Intermediário</small>
              </>
            )}
            {journeyCourse.level === 'advanced' && (
              <>
                <img src={EasyHard} alt="EasyMedium" />
                <small>Avançado</small>
              </>
            )}
          </LevelCourse>
          <small>{convertToMinutes(journeyCourse.duration)}</small>
        </InfoCourse>
      </Link>
    </Container>
  );
}
