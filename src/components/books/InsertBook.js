import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertBookAction } from '../../redux/books/books';

const InsertBook = () => {
  const dispatch = useDispatch();
  const [title, setBookTitle] = useState('');
  const [category, setBookCategory] = useState('');

  const handleBookTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleBookCategory = (e) => {
    setBookCategory(e.target.value);
  };

  const handleSubmitBook = (e) => {
    e.preventDefault();
    dispatch(insertBookAction(title, category));
    setBookTitle('');
    setBookCategory('');
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmitBook}>
        <h1 className="formTitle">Add New Book</h1>
        <input type="text" className="formInput" name="title" placeholder="Book title" value={title} onChange={handleBookTitle} required />
        <select name="category" className="formSelect" palceholder="Choose a category" value={category} onChange={handleBookCategory} required>
          <option selected disabled value=""> Choose a Category </option>
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Terror">Horror</option>
          <option value="Terror">Sci-fi</option>
          <option value="Terror">Romance</option>
          <option value="Terror">Thriller</option>
          <option value="Terror">Non-fiction</option>
        </select>
        <button type="submit" className="formButton">Add book</button>
      </form>
    </div>
  );
};

export default InsertBook;
