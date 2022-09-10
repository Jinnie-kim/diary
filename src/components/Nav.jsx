import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

import styles from './Nav.module.css';

export default function Nav() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>Secret Diary👻</h1>
      <ul className={styles.list_nav}>
        {!user ? (
          <>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <li>
              <Link to="/signup">JOIN</Link>
            </li>{' '}
          </>
        ) : (
          <li>
            <strong>💗Welcome {user.displayName}💗</strong>
            <button type="button" onClick={logout}>
              LOGOUT
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
