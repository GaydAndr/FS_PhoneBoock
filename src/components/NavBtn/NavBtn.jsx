import { NavLink } from 'react-router-dom';
import styles from './NavBtn.module.css';

export const NavBtn = ({ handlerMenu, location, isActive, title, path }) => {
  return (
    <NavLink
      to={path}
      state={location}
      className={({ isActive }) =>
        isActive ? styles.link_btn_active : styles.link_btn
      }
      onClick={handlerMenu}
    >
      {title}
    </NavLink>
  );
};
