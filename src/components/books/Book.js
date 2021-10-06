import React from 'react';
import PropTypes from 'prop-types';
import BookDetail from './BookDetails';
import BookProgressMeter from './BookProgressMeter';
import BookChapterInfo from './BookChapterInfo';

const Book = ({ id, title, category }) => (
  <li id={id} className="bookContainer">
    <BookDetail id={id} title={title} category={category} />
    <div className="chapterInfoContainer">
      <BookProgressMeter />
      <BookChapterInfo />
    </div>
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
