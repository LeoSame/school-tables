import React from 'react';
import { useSelector } from 'react-redux';
import { getColumnSelector, getIsLoadingSelector, getRateSelector, getSchoolboySelector } from '../../store/selectors';
import { columnsForMaterial, rowsForMaterial } from '../../utils/helper';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import { CircularProgress } from '@material-ui/core';
import HeadTable from '../HeadTable/HeadTable';
import BodyTable from '../BodyTable/BodyTable';

const useStyles = makeStyles({
  root: {
    width: '90vw',
    margin: '0 auto',
  },
  container: {
    height: '100vh',
  },
});

const TableVisits = () => {
  const classes = useStyles();
  const schoolBoy = useSelector(getSchoolboySelector);
  const columnLessons = useSelector(getColumnSelector);
  const rate = useSelector(getRateSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  if (isLoading) {
    return (
      <div className='loader__fixed'>
        <CircularProgress disableShrink />
      </div>
    );
  }

  const columns = columnsForMaterial(columnLessons);

  const rows = rowsForMaterial(schoolBoy, rate);

  console.log(rows);
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table' size='small'>
          <HeadTable columns={columns} />
          <BodyTable columns={columns} rows={rows} />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableVisits;
