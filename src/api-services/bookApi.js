import axios from 'axios';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tiAsGoKPKpyQDWrmfNKR/books';

const fetchBooks = async () => {
  const response = await axios.get(apiUrl);
  const { data } = response;
  const books = [];
  Object.entries(data).forEach((book) => {
    books.push(
      {
        title: book[1][0].title,
        category: book[1][0].category,
        item_id: `${book[0]}`,
      },
    );
  });
  return books;
};

const createNewBook = async (newBook) => {
  const response = await axios.post(apiUrl, newBook);
  return response.data;
};

const removeBook = async (id) => {
  const removeBookURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tiAsGoKPKpyQDWrmfNKR/books/${id}`;
  const response = await axios.delete(removeBookURL);
  return response.data;
};

export { fetchBooks, createNewBook, removeBook };
