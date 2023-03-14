import { Container, Content, DropdownMenu, DropdownItem, ButtonContainer, DropdownItemList } from './styles';

import Icon from '../../assets/images/icone.svg';
import Arrow from '../../assets/images/arrow.svg';
import CloseIcon from '../../assets/images/close-icon.svg';

import { Button } from '../Button';

import { Link } from 'react-router-dom';

import { useHeader } from '../../hooks/useHeader';

export function Header() {

  const { currentUser, menuOptions, setMenuOptions, isLoading, handleLogout } = useHeader();

  return (
    <Container>
      <Content menuOptions={menuOptions}>
        <Link to='/journeys'>
          <img src={Icon} alt="Icon" width={60} height={60}/>
          <span>Create<strong>Push</strong></span>
        </Link>

        <button
          type='button'
          onClick={() => setMenuOptions(true)}
        >
          {currentUser?.email}
          <img src={Arrow} alt="Arrow" />
        </button>
      </Content>

      {menuOptions && (
        <DropdownMenu>
          <DropdownItem>
            <DropdownItemList>
              <Link to='/user-profile'>Alterar dados</Link>
            </DropdownItemList>

            <button
              type='button'
              onClick={() => setMenuOptions(false)}
            >
              <img src={CloseIcon} alt="CloseIcon" />
            </button>
          </DropdownItem>

          <ButtonContainer>
            <Button
              type='button'
              onClick={handleLogout}
              isLoading={isLoading}>
              Sair da conta
            </Button>
          </ButtonContainer>
        </DropdownMenu>
      )}
    </Container>
  );
}
