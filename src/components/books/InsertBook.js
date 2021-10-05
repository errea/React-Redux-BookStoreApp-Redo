import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertBookAction } from '../../redux/books/books';

const InsertBook = () => {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const handleBookTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleBookCategory = (e) => {
    setBookCategory(e.target.value);
  };

  const handleSubmitBook = (e) => {
    e.preventDefault();
    dispatch(insertBookAction(bookTitle, bookCategory));
    setBookTitle('');
    setBookCategory('');
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmitBook}>
        <h1 className="formTitle">Add New Book</h1>
        <input type="text" className="formInput" name="title" placeholder="Book title" value={bookTitle} onChange={handleBookTitle} required />
        <select name="category" className="formSelect" palceholder="Choose a category" value={bookCategory} onChange={handleBookCategory} required>
          <option selected disabled value=""> Choose a Category </option>
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Terror">Terror</option>
        </select>
        <button type="submit" className="formButton">Add book</button>
      </form>
    </div>
  );
};

export default InsertBook;
