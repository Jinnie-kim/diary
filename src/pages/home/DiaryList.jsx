import styles from './Home.module.css';

export default function DiaryList({ diaries }) {
  return (
    <>
      {diaries.map((diary) => {
        return (
          <li key={diary.id}>
            <strong className={styles.title}>{diary.title}</strong>
            <p className={styles.content}>{diary.content}</p>
          </li>
        );
      })}
    </>
  );
}
