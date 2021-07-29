import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTableDataOperation } from './store/operations';
import TableVisits from './components/TableVisits/TableVisits';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTableDataOperation());
  }, [dispatch]);

  return (
    <div className='App'>
      <TableVisits />
    </div>
  );
}

export default App;
