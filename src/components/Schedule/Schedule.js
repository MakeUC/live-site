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
  createData('Check-In',        'Oct 3 - 10:00 AM', 'Oct 3 - 11:00 AM'),
  createData('Keynote',         'Oct 3 - 11:00 AM', 'Oct 3 - 12:00 PM'),
  createData('Hacking',         'Oct 3 - 12:00 PM', 'Oct 4 - 12:00 PM'),
  createData('Team Formation',  'Oct 3 - 12:00 PM', 'Oct 3 - 12:30 PM'),
  createData('Hackathon 101',   'Oct 3 - 12:30 PM', 'Oct 3 - 1:00 PM'),
  createData('Sponsor Expo',    'Oct 3 - 1:00 PM',  'Oct 3 - 6:00 PM'),
  createData('Judging',         'Oct 4 - 12:00 PM', 'Oct 4 - 7:00 PM'),
  createData('Closing Ceremony','Oct 4 - 7:00 PM',  'Oct 4 - 8:00 PM')
];

const sponsorRows = [
  createData('Cincinnati Bell Technology Solutions', 'Oct 3 - 1:00 PM', 'Oct 3 - 2:00 PM'),
  createData('Linode',                     'Oct 3 - 1:00 PM', 'Oct 3 - 2:00 PM'),
  createData('WolframAlpha',               'Oct 3 - 1:00 PM', 'Oct 3 - 2:00 PM'),
  createData('Ohio Cyber Range Institute', 'Oct 3 - 1:00 PM', 'Oct 3 - 4:00 PM'),
  createData('EECS at University of Cincinnati', 'Oct 3 - 1:00 PM', 'Oct 3 - 4:00 PM'),
  createData('Google Cloud',               'Oct 3 - 1:00 PM', 'Oct 3 - 6:00 PM'),
  createData('Northrop Grumman',           'Oct 3 - 1:00 PM', 'Oct 3 - 6:00 PM'),
  createData('Centauri',                   'Oct 3 - 1:00 PM', 'Oct 3 - 6:00 PM'),
  createData('Brooksource',                'Oct 3 - 1:00 PM', 'Oct 3 - 6:00 PM'),
  createData('Fidelity National Information Services Inc', 'Oct 3 - 1:00 PM', 'Oct 3 - 6:00 PM'),
  createData('Marathon Petroleum Corporation', 'Oct 3 - 1:00 PM', 'Oct 3 - 6:00 PM')
];

const workShopRows = [
  createData('Reverse Engineering with Ghidra', 'Oct 3 - 1:30 PM', 'Oct 3 - 2:00 PM'),
  createData('Google Cloud Hero Competition', 'Oct 3 - 2:30 PM', 'Oct 3 - 3:00 PM'),
  createData('Build Your Professional Brand', 'Oct 3 - 3:30 PM', 'Oct 4 - 4:00 PM'),
  createData('Security and Trust in Microelectronics', 'Oct 3 - 4:30 PM', 'Oct 4 - 5:00 PM'),
  createData('Brand Storytelling By Microsoft\'s Miri Rodriguez', 'Oct 3 - 5:30 PM', 'Oct 3 - 6:00 PM'),
  createData('Ohio Cyber Range Institute Cyber Games', 'Oct 3 - 6:30 PM', 'Oct 3 - 7:00 PM'),
  createData('Capture The Flag By MLH and USAF', 'Oct 3 - 8:00 PM', 'Oct 3 - 9:00 PM')
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <h1 className="index-countdown font-opensans">Overview</h1>
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

      <h1 className="index-countdown font-opensans">Workshops</h1>
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

      <h1 className="index-countdown font-opensans">Sponsor Expo</h1>
      <TableContainer className="schedule-bg mv3" component={Paper}>
        <Table className={classes.table + " schedule-table"} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className="schedule-name"><span className="font-primary b">Booth</span></TableCell>
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
    </div>
  );
}