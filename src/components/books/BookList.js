import React from 'react';
import { useSelector } from 'react-redux';
import hooks from '../../hooks/hooks';
import Book from './Book';

const BookList = () => {
    const books = useSelector((state) => state.books);
  
    hooks();
  
    return (
      <ul className="bookList">
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            category={book.category}
          />
        ))}
      </ul>
    );
  };
  
  export default BookList;