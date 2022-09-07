import { Link } from 'react-router-dom';

import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>Secret Diary👻</h1>
      <ul className={styles.list_nav}>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/signup">JOIN</Link>
        </li>
      </ul>
    </nav>
  );
}
