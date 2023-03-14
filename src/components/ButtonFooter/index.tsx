import { Container, ButtonInfo } from './styles';

import AppStore from '../../assets/images/apple.svg';
import GooglePlay from '../../assets/images/googleplay.svg';

interface ButtonFooterProps {
  isGooglePlay?: boolean;
  isAppStore?: boolean;
  description: string;
  urlLink: string;
}

export function ButtonFooter({ isGooglePlay, isAppStore, description, urlLink }: ButtonFooterProps) {
  return (
    <Container href={urlLink} target='_blank'>
      {isGooglePlay && (
        <img src={GooglePlay} alt="GooglePlay" />
      )}
      {isAppStore && (
        <img src={AppStore} alt="AppStore" />
      )}

      <ButtonInfo>
        <small>Baixar na</small>
        <p>{description}</p>
      </ButtonInfo>
    </Container>
  );
}
