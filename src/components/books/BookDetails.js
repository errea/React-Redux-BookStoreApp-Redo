import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../../redux/books/books';

function BookDetail({ id, bookTitle, bookCategory }) {
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBookAction(id));
  };

  return (
    <div className="bookInfo">
      <p className="bookCategory">
        {bookCategory}
      </p>
      <h2 className="bookTitle">
        {bookTitle}
      </h2>
      <button type="button" className="btn commentBtn">Comments</button>
      <button type="button" className="btn removeBtn" onClick={() => handleRemoveBook(id)}>Remove</button>
      <button type="button" className="btn editBtn">Edit</button>
    </div>
  );
}

BookDetail.propTypes = {
  id: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookCategory: PropTypes.string.isRequired,
};

export default BookDetail;
