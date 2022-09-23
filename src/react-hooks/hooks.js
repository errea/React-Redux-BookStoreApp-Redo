import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooksAction } from '../redux/books/books';

const hooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAction());
  }, []);
};

export default hooks;
