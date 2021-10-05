import React from 'react';

function BookChapterInfo() {
  return (
    <div className="currentChapterContainer">
      <p className="currentChapterTitle">Current Chapter</p>
      <p className="currentChapterLesson">Chapter 17</p>
      <button type="button" className="progressBtn">Update Progress</button>
    </div>
  );
}

export default BookChapterInfo;
