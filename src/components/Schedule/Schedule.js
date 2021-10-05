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
  createData("Check-In", "Oct 9 - 09:30 AM", "Oct 9 - 10:30 AM"),
  createData("Opening Ceremony", "Oct 9 - 10:30 AM", "Oct 9 - 11:15 AM"),
  createData("Lunch (In-Person)", "Oct 9 - 11:15 AM", "Oct 9 - 12:00 PM"),
  createData("Hacking", "Oct 9 - 11:15 AM", "Oct 10 - 11:15 AM"),
  createData("Sponsor Expo", "Oct 9 - 12:00 PM", "Oct 9 - 2:00 PM"),
  createData("Hackathon 101", "Oct 9 - 12:30 PM", "Oct 9 - 1:00 PM"),
  createData("Team Formation", "Oct 9 - 1:00 PM", "Oct 9 - 1:30 PM"),
  createData("Dinner (In-Person)", "Oct 9 - 6:00 PM", "Oct 9 - 7:00 PM"),
  createData("U.S. Air Force Cybersecurity", "Oct 9 - 7:00 PM", "Oct 9 - 8:00 PM"),
  createData("Garlic Phone", "Oct 9 - 9:00 PM", "Oct 9 - 10:00 PM"),
  createData("Networking Hour", "Oct 9 - 11:00 PM", "Oct 10 - 12:00 AM"),
  createData("Midnight Snack (In-Person)", "Oct 9 - 11:15 AM", "Oct 9 - 12:00 PM"),
  createData("Jackbox Games and Quiplash", "Oct 10 - 1:00 AM", "Oct 10 - 2:30 AM"),
  createData("Among Us", "Oct 10 - 3:00 AM", "Oct 10 - 4:00 AM"),
  createData("Stretching", "Oct 10 - 5:00 AM", "Oct 10 - 5:30 AM"),
  createData("Kahoot Trivia", "Oct 10 - 7:00 AM", "Oct 10 - 8:00 AM"),
  createData("Sponsor Coffee Hour", "Oct 10 - 8:00 AM", "Oct 10 - 9:00 AM"),
  createData("MLH Bob Ross Contest", "Oct 10 - 9:00 AM", "Oct 10 - 10:00 AM"),
  createData("Judging", "Oct 10 - 12:00 PM", "Oct 10 - 4:00 PM"),
  createData("Closing Ceremony", "Oct 10 - 5:00 PM", "Oct 10 - 6:00 PM")
];

const workShopRows = [
  createData("Amazon Web Services", "Oct 9 - 02:00 PM", "Oct 9 - 02:30 PM"),
  createData("Givaudan", "Oct 9 - 2:30 PM", "Oct 9 - 03:00 PM"),
  createData("MongoDB", "Oct 9 - 03:00 PM", "Oct 9 - 03:30 PM"),
  createData("Guerbet", "Oct 9 - 03:30 PM", "Oct 9 - 04:00 PM"),
  createData("Ernst & Young", "Oct 9 - 04:30 PM", "Oct 9 - 5:00 PM"),
  createData("Northrop Grumman", "Oct 9 - 04:30 PM", "Oct 9 - 5:00 PM"),
  createData("Microsoft (Sean Kane)", "Oct 9 - 05:00 PM", "Oct 9 - 5:30 PM"),
  createData("AssemblyAI", "Oct 9 - 05:30 PM", "Oct 9 - 6:00 PM")
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <h1 className="index-countdown b mt0 font-opensans">Overview</h1>
      <TableContainer className="schedule-bg nes-container is-rounded" component={Paper}>
        <Table className={classes.table + ' schedule-table'} aria-label="simple table">
          <TableHead className="schedule-gray-row">
            <TableRow>
              <TableCell align="center" className="schedule-name"><span
                className="font-primary b">Event</span></TableCell>
              <TableCell align="center" className="schedule-date-time"><span
                className="font-primary b">Start Time (EDT)</span></TableCell>
              <TableCell align="center" className="schedule-date-time"><span
                className="font-primary b">End Time (EDT)</span></TableCell>
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
      <br></br>
      <h1 className="index-countdown b font-opensans">Workshops</h1>
      <TableContainer className="schedule-bg mv3 nes-container is-rounded" component={Paper}>
        <Table className={classes.table + ' schedule-table'} aria-label="simple table">
          <TableHead className="schedule-gray-row">
            <TableRow>
              <TableCell align="center" className="schedule-name"><span
                className="font-primary b">Workshop</span></TableCell>
              <TableCell align="center" className="schedule-date-time"><span
                className="font-primary b">Start Time (EDT)</span></TableCell>
              <TableCell align="center" className="schedule-date-time"><span
                className="font-primary b">End Time (EDT)</span></TableCell>
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
      {/*<br></br>
      <h1 className="index-countdown b font-opensans">Sponsor Expo</h1>
      <TableContainer className="schedule-bg mv3" component={Paper}>
        <Table className={classes.table + ' schedule-table'} aria-label="simple table">
            <TableHead className="schedule-gray-row">
              <TableRow>
                <TableCell align="center" className="schedule-name"><span
                  className="font-primary b">Booth</span></TableCell>
                <TableCell align="center" className="schedule-date-time"><span className="font-primary b">Start Time (EDT)</span></TableCell>
                <TableCell align="center" className="schedule-date-time"><span
                  className="font-primary b">End Time (EDT)</span></TableCell>
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
            </TableContainer>*/}
    </div>
  );
}
