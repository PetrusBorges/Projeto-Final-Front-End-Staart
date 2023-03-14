import { Container, TestimonyInfo } from './styles';

import Avatar1 from '../../assets/images/avatar1.svg';
import Avatar2 from '../../assets/images/avatar3.svg';
import Avatar3 from '../../assets/images/avatar2.svg';

interface PeopleInfo {
  name: string;
  jobName: string;
  description: string;
}

interface TestimonyPeopleProps {
  testimonyInfo: PeopleInfo[];
}

export function TestimonyPeople({ testimonyInfo }: TestimonyPeopleProps) {
  return (
    <Container>
      <TestimonyInfo>
        <img src={Avatar1} alt="People Image" />

        <strong>{testimonyInfo[0].name}</strong>
        <small>{testimonyInfo[0].jobName}</small>
        <p>{testimonyInfo[0].description}</p>
      </TestimonyInfo>

      <TestimonyInfo>
        <img src={Avatar2} alt="People Image" />

        <strong>{testimonyInfo[1].name}</strong>
        <small>{testimonyInfo[1].jobName}</small>
        <p>{testimonyInfo[1].description}</p>
      </TestimonyInfo>

      <TestimonyInfo>
        <img src={Avatar3} alt="People Image" />

        <strong>{testimonyInfo[2].name}</strong>
        <small>{testimonyInfo[2].jobName}</small>
        <p>{testimonyInfo[2].description}</p>
      </TestimonyInfo>
    </Container>
  );
}
