import { useLocation } from 'react-router-dom';
import { NavBtn } from '../NavBtn/NavBtn';
import styles from './Navigation.module.css';

export const Navigation = ({ handlerMenu, isLogin, isActive }) => {
  const location = useLocation();

  //  const matches = useMediaQuery('(max-width:767px)');
  return (
    <nav className={`${styles.nav} ${isActive ? styles.active : ''}`}>
      <div className={styles.add_btn}>
        {/* <AddContact handlerMenu={handlerMenu} isActive={isActive} /> */}
      </div>
      <ul className={styles.list}>
        {isLogin && (
          <>
            <li className={styles.nav_item}>
              <NavBtn
                handlerMenu={handlerMenu}
                isActive={isActive}
                location={location}
                title="Home"
                path="/home"
              />
            </li>
            <li className={styles.nav_item}>
              <NavBtn
                handlerMenu={handlerMenu}
                isActive={isActive}
                location={location}
                title="Contacts List"
                path="/contact-list"
              />
            </li>
            <li className={styles.nav_item}>
              <NavBtn
                handlerMenu={handlerMenu}
                isActive={isActive}
                location={location}
                title="Profile"
                path="/profile"
              />
            </li>
            <li className={styles.nav_item}>
              <NavBtn
                handlerMenu={handlerMenu}
                isActive={isActive}
                location={location}
                title="Loguot"
                path="/auth"
              />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
