import { useState } from 'react';

export default function DiaryForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
    console.log(title, content);
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
