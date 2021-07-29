import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const HeadTable = ({ columns }) => {
  const row = columns.map(column => (
    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
      {column.label}
    </TableCell>
  ));

  return (
    <TableHead>
      <TableRow>{row}</TableRow>
    </TableHead>
  );
};

export default HeadTable;
