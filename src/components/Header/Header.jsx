import { useState } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import style from './Header.module.css';

export const Header = () => {
  const [isActive, setOnMenuBtn] = useState(false);
  const isLogin = true;
  const handlerMenu = () => {
    setOnMenuBtn(!isActive);
  };
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Logo></Logo>
        <div className={style.navigation}>
          <Navigation
            handlerMenu={handlerMenu}
            isLogin={isLogin}
            isActive={isActive}
          ></Navigation>
          <BurgerMenu
            handlerMenu={handlerMenu}
            isActive={isActive}
          ></BurgerMenu>
        </div>
      </div>
    </header>
  );
};
