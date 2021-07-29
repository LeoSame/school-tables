import React from 'react';
import { useDispatch } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { addStudentPass, removeStudentPass } from '../../http';
import { getTableDataOperation } from '../../store/operations';

const BodyTable = ({ rows, columns }) => {
  const dispatch = useDispatch();

  const addPass = (SchoolboyId, ColumnId, type) => {
    if (type === 'cell') {
      addStudentPass({ SchoolboyId, ColumnId, Title: 'Н' });
      dispatch(getTableDataOperation());
    }
  };

  const removePass = (SchoolboyId, ColumnId, type) => {
    if (type === 'cell') {
      removeStudentPass({ SchoolboyId, ColumnId });
      dispatch(getTableDataOperation());
    }
  };

  const body = rows.map(row => {
    return (
      <TableRow hover role='checkbox' tabIndex={-1} key={row.number}>
        {columns.map(column => {
          const { id, align, cursor, type } = column;
          const value = row[id];
          return (
            <TableCell
              key={id}
              align={align}
              style={{ cursor: cursor }}
              onClick={() => {
                value ? removePass(row.SchoolboyId, id, type) : addPass(row.SchoolboyId, id, type);
              }}
            >
              {value}
            </TableCell>
          );
        })}
      </TableRow>
    );
  });

  return <TableBody>{body}</TableBody>;
};

export default BodyTable;
