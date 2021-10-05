import React from 'react';
import PropTypes from 'prop-types';
import BookDetail from './BookDetails';
import BookProgressMeter from './BookProgressMeter';
import BookChapterInfo from './BookChapterInfo';

const Book = ({ id, bookTitle, bookCategory }) => (
  <li id={id} className="bookContainer">
    <BookDetail id={id} title={bookTitle} category={bookCategory} />
    <div className="chapterInfoContainer">
      <BookProgressMeter />
      <BookChapterInfo />
    </div>
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookCategory: PropTypes.string.isRequired,
};

export default Book;
