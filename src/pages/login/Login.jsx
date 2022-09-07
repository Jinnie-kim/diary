import { useState } from 'react';
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userDataHandler = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <form className={styles.login_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>LOGIN</legend>
        <label htmlFor="myEmail">Email : </label>
        <input
          type="email"
          id="myEmail"
          value={email}
          required
          onChange={userDataHandler}
        />
        <label htmlFor="myPassword">Password : </label>
        <input
          type="password"
          id="myPassword"
          value={password}
          required
          onChange={userDataHandler}
        />
        <button type="submit" className={styles.button}>
          LOGIN
        </button>
      </fieldset>
    </form>
  );
}
