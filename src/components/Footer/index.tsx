import { Container, Content, Socials, LinkSocials, FooterInfo, ButtonFooterStyles } from './styles';

import Icon from '../../assets/images/icone.svg';
import Instagram from '../../assets/images/instagram.svg';
import Facebook from '../../assets/images/facebook.svg';
import Twitter from '../../assets/images/twitter.svg';

import { ButtonFooter } from '../ButtonFooter';

import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <Container>
      <Content>
        <Socials>
          <Link to='/journeys'>
            <img src={Icon} alt="Icon" />
            <span>CreatePush</span>
          </Link>
          <LinkSocials>
            <a href='https://www.instagram.com' target='_blank' rel="noreferrer">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href='https://www.facebook.com' target='_blank' rel="noreferrer">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href='https://twitter.com' target='_blank' rel="noreferrer">
              <img src={Twitter} alt="Twitter" />
            </a>
          </LinkSocials>
        </Socials>

        <FooterInfo>
          <p>Download grátis:</p>

          <ButtonFooterStyles>
            <ButtonFooter
              isAppStore
              description='AppStore'
              urlLink='https://www.apple.com/br/app-store/'
            />
            <ButtonFooter
              isGooglePlay
              description='PlayStore'
              urlLink='https://play.google.com'
            />
          </ButtonFooterStyles>
        </FooterInfo>
      </Content>
    </Container>
  );
}
