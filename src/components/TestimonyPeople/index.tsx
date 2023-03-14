import { Container, TestimonyInfo } from './styles';

export interface PeopleInfo {
  id: number;
  name: string;
  jobName: string;
  description: string;
  img: string;
}

interface TestimonyPeopleProps {
  testimonyInfo: PeopleInfo[];
}

export function TestimonyPeople({ testimonyInfo }: TestimonyPeopleProps) {
  return (
    <Container>
      {testimonyInfo.map((testimony) => (
        <TestimonyInfo
          key={testimony.id}
        >
          <img src={testimony.img} alt={testimony.name} />

          <strong>{testimony.name}</strong>
          <small>{testimony.jobName}</small>
          <p>{testimony.description}</p>
        </TestimonyInfo>
      ))}
    </Container>
  );
}
