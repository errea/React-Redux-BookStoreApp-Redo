import React from 'react';
import PropTypes from 'prop-types';
import BookDetail from './BookDetails';
import BookProgressMeter from './BookProgressMeter';
import BookChapterInfo from './BookChapterInfo';

const Book = ({ id, book_title, book_category }) => (
  <li id={id} className="bookContainer">
    <BookDetail id={id} title={book_title} category={book_category} />
    <div className="chapterInfoContainer">
      <BookProgressMeter />
      <BookChapterInfo />
    </div>
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  book_title: PropTypes.string.isRequired,
  book_category: PropTypes.string.isRequired,
};

export default Book;