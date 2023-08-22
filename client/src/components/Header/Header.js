import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';
import {
  HeaderContainer,
  HeaderWrap,
  Btn,
  NavContainer,
  LogoLink,
  InputForm
} from './Header.styled';
import headerLogoImg from '../../common/image/header-logo.png';
import Search from '../../common/image/Search.png';
import profile from '../../common/image/profile.png';

import { logout, setLoginStatus, login } from '../../redux/actions/loginInfo';

export default function Header() {
  const dispatch = useDispatch();

  const loginStatus = useSelector((state) => state.loginReducer);

  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
  };

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    const storedRefreshToken = localStorage.getItem('refreshToken');
    const storedUserId = localStorage.getItem('userId');
    if (storedAccessToken) {
      dispatch(
        login(true, storedAccessToken, storedRefreshToken, storedUserId)
      );
      dispatch(setLoginStatus(true));
    } else {
      dispatch(setLoginStatus(false));
    }
  }, []);

  return (
    <HeaderContainer>
      <HeaderWrap>
        <LogoLink to="/">
          <img src={headerLogoImg} alt="logo" />
        </LogoLink>
        <InputForm>
          <img src={Search} alt="Search"></img>
          <input type="text" placeholder="Search..." />
        </InputForm>
        <NavContainer>
          {loginStatus.isLoggedIn === false ? (
            <ul>
              <li>
                <Btn className="loginBtn" to="/login">
                  Log in
                </Btn>
              </li>
              <li>
                <Btn className="sigupBtn" to="/sign-up">
                  Sign up
                </Btn>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Btn className="myPageBtn" to="/my-page">
                  <img src={profile} alt="profile"></img>
                </Btn>
              </li>
              <li>
                <Btn className="logouBtn" onClick={handleLogout}>
                  Log out
                </Btn>
              </li>
            </ul>
          )}
        </NavContainer>
      </HeaderWrap>
    </HeaderContainer>
  );
}
