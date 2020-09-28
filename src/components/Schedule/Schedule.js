import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import '../../styles/_font.scss';
import '../../styles/_variables.scss';

import './Schedule.scss';

const useStyles = makeStyles({
  table: {
    font: 'Open Sans'
  }
});

function createData(name, start, end) {
  return { name, start, end };
}

const generalRows = [
  createData('Check-in', 'Oct 3 - 10 AM', 'Oct 3 - 11 AM'),
  createData('Keynote', 'Oct 3 - 11 AM', 'Oct 3 - 12 PM'),
  createData('Hacking', 'Oct 3 - 12 PM', 'Oct 4 - 12 PM'),
  createData('Sponsor Expo', 'Oct 3 - 1 PM', 'Oct 3 - 6 PM'),
  createData('Judging', 'Oct 4 - 12 PM', 'Oct 4 - 2 PM')
];

const sponsorRows = [
  createData('Google', 'Oct 3 - 10 AM', 'Oct 3 - 11 AM'),
  createData('Wolfram', 'Oct 3 - 11 AM', 'Oct 3 - 12 PM'),
  createData('Google', 'Oct 3 - 12 PM', 'Oct 4 - 12 PM'),
  createData('Wolfram', 'Oct 3 - 1 PM', 'Oct 3 - 6 PM'),
  createData('Google', 'Oct 4 - 12 PM', 'Oct 4 - 2 PM')
];

const workShopRows = [
  createData('How to ...', 'Oct 3 - 10 AM', 'Oct 3 - 11 AM'),
  createData('How to ...', 'Oct 3 - 11 AM', 'Oct 3 - 12 PM'),
  createData('How to ...', 'Oct 3 - 12 PM', 'Oct 4 - 12 PM'),
  createData('How to ...', 'Oct 3 - 1 PM', 'Oct 3 - 6 PM'),
  createData('How to ...', 'Oct 4 - 12 PM', 'Oct 4 - 2 PM')
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <TableContainer className="schedule-bg" component={Paper}>
        <Table className={classes.table + " schedule-table"} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className="schedule-name"><span className="font-primary b">Event</span></TableCell>
              <TableCell align="center" className="schedule-date-time"><span className="font-primary b">Start</span></TableCell>
              <TableCell align="center" className="schedule-date-time"><span className="font-primary b">End</span></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {generalRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center" className="schedule-name" component="th" scope="row">
                  <span className="b">{row.name}</span>
                </TableCell>
                <TableCell align="center" className="schedule-date-time">{row.start}</TableCell>
                <TableCell align="center" className="schedule-date-time">{row.end}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer className="schedule-bg mv3" component={Paper}>
        <Table className={classes.table + " schedule-table"} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className="schedule-name"><span className="font-primary b">Sponsor</span></TableCell>
              <TableCell align="center" className="schedule-date-time"><span className="font-primary b">Start</span></TableCell>
              <TableCell align="center" className="schedule-date-time"><span className="font-primary b">End</span></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sponsorRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center" className="schedule-name" component="th" scope="row">
                  <span className="b">{row.name}</span>
                </TableCell>
                <TableCell align="center" className="schedule-date-time">{row.start}</TableCell>
                <TableCell align="center" className="schedule-date-time">{row.end}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer className="schedule-bg mv3" component={Paper}>
        <Table className={classes.table + " schedule-table"} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className="schedule-name"><span className="font-primary b">Workshop</span></TableCell>
              <TableCell align="center" className="schedule-date-time"><span className="font-primary b">Start</span></TableCell>
              <TableCell align="center" className="schedule-date-time"><span className="font-primary b">End</span></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workShopRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center" className="schedule-name" component="th" scope="row">
                  <span className="b">{row.name}</span>
                </TableCell>
                <TableCell align="center" className="schedule-date-time">{row.start}</TableCell>
                <TableCell align="center" className="schedule-date-time">{row.end}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}