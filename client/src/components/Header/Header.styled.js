import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 2;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid var(--orange);
  border-bottom: 1px solid var(--gray-10);
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--main-width);
  width: 100%;
  height: 56px;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;

  &:hover {
    background-color: #e3e6e8;
  }
`;
export const HeaderLogo = styled.img`
  padding: 0 8px;
`;
