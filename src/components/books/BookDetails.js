import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../../redux/books/books';

function BookDetail({ id, title, category }) {
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBookAction(id));
  };

  return (
    <div className="bookDetail">
      <p className="bookCategory">
        {category}
      </p>
      <h2 className="bookTitle">
        {title}
      </h2>
      <button type="button" className="btn commentBtn">Comments</button>
      <button type="button" className="btn removeBtn" onClick={() => handleRemoveBook(id)}>Remove</button>
      <button type="button" className="btn editBtn">Edit</button>
    </div>
  );
}

BookDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookDetail;
