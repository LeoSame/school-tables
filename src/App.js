import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTableDataOperation } from './store/operations';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTableDataOperation());
  }, [dispatch]);

  return (
    <div className='App'>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
