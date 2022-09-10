import { useState } from 'react';
import { useFireStore } from '../../hooks/useFireStore';

export default function DiaryForm({ uid }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addDocument, response } = useFireStore('diary');

  const diaryDataHandler = (event) => {
    if (event.target.id === 'title') {
      setTitle(event.target.value);
    }
    if (event.target.id === 'content') {
      setContent(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDocument({ uid, title, content });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Record your day</legend>
          <label htmlFor="title">Title : </label>
          <input id="title" type="text" required onChange={diaryDataHandler} />

          <label htmlFor="content">Content : </label>
          <textarea id="content" onChange={diaryDataHandler}></textarea>

          <button type="submit">DONE</button>
        </fieldset>
      </form>
    </>
  );
}
