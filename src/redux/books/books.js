import { v4 as uuidv4 } from 'uuid';
import { fetchBooks, createNewBook, removeBook } from '../../api-services/bookApi';

const INSERT_BOOK = 'bookStore/books/INSERT_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOKS';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

const fetchBooksAction = () => async (dispatch) => {
  const books = await fetchBooks();

  dispatch({
    type: FETCH_BOOKS,
    payload: books,
  });
};

const insertBookAction = (bookTitle, bookCategory) => async (dispatch) => {
  const newBook = {
    item_id: uuidv4(),
    book_title: `${bookTitle}`,
    book_category: `${bookCategory}`,
  };

  await createNewBook(newBook);

  dispatch({
    type: INSERT_BOOK,
    payload: newBook,
  });
};

const removeBookAction = (id) => async (dispatch) => {
  await removeBook(id);

  dispatch({
    type: REMOVE_BOOK,
    payload: {
      item_id: id,
    },
  });
};

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return [...state, ...action.payload];

    case INSERT_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.item_id !== action.payload.item_id);
    }
    default:
      return state;
  }
};

export {
  fetchBooksAction, insertBookAction, removeBookAction, booksReducer,
};
