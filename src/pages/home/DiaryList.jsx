import { useFireStore } from '../../hooks/useFireStore';
import styles from './Home.module.css';

export default function DiaryList({ diaries }) {
  const { deleteDocument } = useFireStore('diary');
  return (
    <>
      {diaries.map((diary) => {
        return (
          <li key={diary.id}>
            <strong className={styles.title}>{diary.title}</strong>
            <p className={styles.content}>{diary.content}</p>
            <button
              type="button"
              onClick={() => {
                deleteDocument(diary.id);
              }}
            >
              DEL
            </button>
          </li>
        );
      })}
    </>
  );
}
