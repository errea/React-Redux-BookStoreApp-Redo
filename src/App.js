import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookNavBar from './components/book-navbar';
import InsertBook from './components/books/InsertBook';
import BookList from './components/books/BookList';
import BookCategories from './components/books-categories';
import './App.css';
import './assets/styles/book-navbar.css';
import './assets/styles/book.css';
import './assets/styles/progress-meter.css';
import './assets/styles/form.css';

function App() {
  return (
    <Router>
      <BookNavBar />
      <Switch>
        <Route path="/categories">
          <BookCategories />
        </Route>
        <Route path="/">
          <BookList />
          <InsertBook />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
