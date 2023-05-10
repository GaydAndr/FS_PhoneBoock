import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';

export const Layout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};
