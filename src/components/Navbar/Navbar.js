import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './Navbar.css';

const useStyles = makeStyles(() => ({
  button: {
    margin: '0 10px',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className='navbar'>
      <NavLink exact to='/table'>
        <Button variant='contained' className={classes.button}>
          Таблиця відвідування
        </Button>
      </NavLink>
      <NavLink exact to='/page-info'>
        <Button variant='contained' className={classes.button}>
          Сторінка інформації
        </Button>
      </NavLink>
    </div>
  );
};

export default Navbar;
