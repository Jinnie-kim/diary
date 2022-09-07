import { useState } from 'react';

import styles from './Signup.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const userDataHandler = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    } else if (event.target.type === 'text') {
      setDisplayName(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <form className={styles.signup_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>JOIN</legend>
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

        <label htmlFor="myNickname">Nickname : </label>
        <input
          type="text"
          id="myNickname"
          value={displayName}
          required
          onChange={userDataHandler}
        />
        <button type="submit" className={styles.button}>
          JOIN
        </button>
      </fieldset>
    </form>
  );
}
