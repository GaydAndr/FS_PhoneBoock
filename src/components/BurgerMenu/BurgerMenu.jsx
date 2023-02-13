import { Icons } from '../Icons/Icons';
import styles from './BurgerMenu.module.css';

export const BurgerMenu = ({ handlerMenu, isActive }) => {
  // console.log(isActive);
  // const a = isActive ? 1 : 2;
  // console.log(a);

  return (
    <button
      // className={`${styles.burger} ${styles.active}`}
      className={`${styles.burger} ${isActive ? styles.active : ''}`}
      type="button"
      onClick={handlerMenu}
      aria-expanded="false"
      aria-controls="menu"
      data-menu-button
    >
      <Icons
        name="threeHorizontalStripes"
        className={styles.burger__open}
        color="currentColor"
        width="20"
        height="20"
      />
      <Icons
        name="crossForClosing"
        className={styles.burger__close}
        color="currentColor"
        width="26"
        height="26"
      />
    </button>
  );
};
