import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getColumnSelector, getIsLoadingSelector, getRateSelector, getSchoolboySelector } from './store/selectors';
import { getTableDataOperation } from './store/operations';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CircularProgress } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: '100vh',
  },
});

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const schoolBoy = useSelector(getSchoolboySelector);
  const columnLessons = useSelector(getColumnSelector);
  const rate = useSelector(getRateSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    dispatch(getTableDataOperation());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='loader__fixed'>
        <CircularProgress disableShrink />
      </div>
    );
  }

  const columnsForMaterial = columnLessons.Items.map(item => {
    return { id: item.Id, label: item.Title, align: 'center' };
  });

  const columns = [
    { id: 'number', label: '№', minWidth: 10, align: 'center' },
    { id: 'Schoolboy', label: 'Учень', minWidth: 200, align: 'center' },
    ...columnsForMaterial,
  ];

  const rows = schoolBoy.Items.map((item, index) => {
    const rates = {};

    for (let i = 0; i < rate.Items.length; i++) {
      const { SchoolboyId, ColumnId, Title } = rate.Items[i];

      if (SchoolboyId === item.Id && (Title === 'Н' || Title === 'H')) {
        rates[ColumnId] = Title;
      }
    }
    return { number: ++index, Schoolboy: `${item.LastName} ${item.FirstName} ${item.SecondName}`, ...rates };
  });

  return (
    <div className='App'>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table' size='small'>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.number}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default App;
