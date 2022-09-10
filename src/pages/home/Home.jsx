import DiaryForm from './DiaryForm';

import styles from './Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <aside className={styles.side_menu}>
        <DiaryForm />
      </aside>
      <ul className={styles.content_list}>diary list</ul>
    </main>
  );
}
