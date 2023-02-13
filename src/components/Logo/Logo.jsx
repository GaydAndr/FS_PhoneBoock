import { NavLink } from 'react-router-dom';
import logoSvg from '../../images/logo/logo.svg';
import style from './Logo.module.css';

export const Logo = () => {
  return (
    <>
      <NavLink to="/home" className={style.logoContent}>
        <svg
          className={style.logoSVG}
          fill="#fff"
          // stroke={color}
          // width="60"
          // height="60"
        >
          <use xlinkHref={`${logoSvg}#logo`} />
        </svg>
        <div className={style.logoTXT}>
          <p>Phone</p>
          <p>Book</p>
        </div>
      </NavLink>
    </>
  );
};
