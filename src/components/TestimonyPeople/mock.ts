import Avatar1 from '../../assets/images/avatar1.svg';
import Avatar2 from '../../assets/images/avatar3.svg';
import Avatar3 from '../../assets/images/avatar2.svg';

import { PeopleInfo } from '.';

export const testimonyPeopleMock = [
  {
    id: 1,
    name: 'Lucas Solza',
    jobName: 'Desenvolvedor Front-End',
    description: 'Realizei o sonho de trabalhar com tecnologia, tudo graças aos professores do CreatePush!',
    img: Avatar1,
  },
  {
    id: 2,
    name: 'Bruna Melo',
    jobName: 'Desenvolvedora Back-End',
    description: 'Finalizar o curso e receber a notícia de ser aprovada no processo seletivo foi incrível, obrigada aos professores e colegas!',
    img: Avatar2,
  },
  {
    id: 3,
    name: 'Alex Ferreira',
    jobName: 'Desenvolvedor Full-Stack',
    description: 'O CreatePush me mostrou que compartilhar conhecimento com outras pessoas é a melhor forma de crescer!',
    img: Avatar3,
  }
] as PeopleInfo[];
