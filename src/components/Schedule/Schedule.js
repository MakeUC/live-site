import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import '../../styles/_font.scss'
import '../../styles/_variables.scss'

import './Schedule.scss'

const useStyles = makeStyles({
  table: {
    font: 'Open Sans'
  }
});

function createData(name, start, end) {
  return { name, start, end };
}

const rows = [
  createData('Check-in', 'Oct 3, 10 AM', 'Oct 3, 11 AM'),
  createData('Keynote', 'Oct 3, 11 AM', 'Oct 3, 12 PM'),
  createData('Hacking', 'Oct 3, 12 PM', 'Oct 4, 12 PM'),
  createData('Sponsor Expo', 'Oct 3, 1 PM', 'Oct 3, 6 PM'),
  createData('Judging', 'Oct 4, 12 PM', 'Oct 4, 2 PM')
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer className="schedule-bg" component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><span className="font-primary b">Name</span></TableCell>
            <TableCell align="right"><span className="font-primary b">Start</span></TableCell>
            <TableCell align="right"><span className="font-primary b">End</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.start}</TableCell>
              <TableCell align="right">{row.end}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}