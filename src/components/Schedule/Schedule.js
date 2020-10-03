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
  createData('Check-In', 'Oct 3 - 10:00 AM', 'Oct 3 - 11:15 AM'),
  createData(<a target="_blank" href="https://youtu.be/J8qIUGyic40">Opening Ceremony</a>, 'Oct 3 - 11:15 AM', 'Oct 3 - 12:00 PM'),
  createData('Hacking', 'Oct 3 - 12:00 PM', 'Oct 4 - 12:00 PM'),
  createData(<a target="_blank" href="https://youtu.be/SZ7oMSRMEII">Team Formation</a>, 'Oct 3 - 12:00 PM', 'Oct 3 - 12:30 PM'),
  createData(<a target="_blank" href="https://youtu.be/RgTrYToCHdY">Hackathon 101</a>, 'Oct 3 - 12:30 PM', 'Oct 3 - 1:00 PM'),
  createData('Sponsor Expo', 'Oct 3 - 1:00 PM', 'Oct 3 - 6:00 PM'),
  createData(<a target="_blank" href="https://youtu.be/8UYZ8KMAd1s">Bob Ross MS Paint</a>, 'Oct 3 - 7:00 PM', 'Oct 3 - 7:30 PM'),
  createData('Quiplash 2', 'Oct 3 - 9:00 PM', 'Oct 3 - 10:00 PM'),
  createData('Kahoot Trivia', 'Oct 3 - 10:00 PM', 'Oct 3 - 10:30 PM'),
  createData('Scribble.io', 'Oct 3 - 11:00 PM', 'Oct 4 - 12:00 AM'),
  createData('Lightning Talk', 'Oct 4 - 12:30 AM', 'Oct 4 - 1:00 AM'),
  createData('Trivia Murder Party', 'Oct 4 - 2:00 AM', 'Oct 4 - 3:00 AM'),
  createData('Website Contest', 'Oct 4 - 4:30 AM', 'Oct 4 - 5:30 AM'),
  createData('Slideshow Karaoke', 'Oct 4 - 7:30 AM', 'Oct 4 - 8:00 AM'),
  createData('Judging', 'Oct 4 - 12:00 PM', '--'),
  createData('Closing Ceremony', 'Oct 4 - 7:00 PM', 'Oct 4 - 8:00 PM')
];

const sponsorRows = [
  createData('Cincinnati Bell Technology Solutions', 'Oct 3 - 1:00 PM', 'Oct 3 - 2:00 PM'),
  createData('Ohio Cyber Range Institute', 'Oct 3 - 1:00 PM', 'Oct 3 - 4:00 PM'),
  createData('Brooksource', 'Oct 3 - 1:00 PM', 'Oct 3 - 6:00 PM'),
  createData('Northrop Grumman', 'Oct 3 - 1:00 PM', 'Oct 3 - 6:00 PM'),
  createData('Centauri', 'Oct 3 - 1:00 PM', 'Oct 3 - 6:00 PM'),
  createData('Fidelity National Information Services Inc', 'Oct 3 - 1:00 PM', 'Oct 3 - 6:00 PM'),
  createData(<a target="_blank" href="https://meet.google.com/hmu-kgry-fkn">Google Cloud</a>, 'Oct 3 - 3:30 PM', 'Oct 3 - 4:30 PM')
];

const workShopRows = [
  createData(<a target="_blank" href="https://youtu.be/yril1SIxjq8">Capture The Flag with Ghidra By Northrop Grumman's Chris Morrison</a>, 'Oct 3 - 1:30 PM', 'Oct 3 - 2:00 PM'),
  createData(<a target="_blank" href="https://www.youtube.com/watch?v=2E0qVv4ycoo">Cloud Hero - BigQuery with Data & ML By Google's Ryan Matsumoto</a>, 'Oct 3 - 2:30 PM', 'Oct 3 - 3:00 PM'),
  createData(<a target="_blank" href="https://youtu.be/bqK8ikwOW10">Build Your Professional Brand By Brooksource's Nick Goliath</a>, 'Oct 3 - 3:30 PM', 'Oct 4 - 4:00 PM'),
  createData(<a target="_blank" href="https://youtu.be/KA_K_cp25jw">Security and Trust in Microelectronics By Centauri</a>, 'Oct 3 - 4:30 PM', 'Oct 4 - 5:00 PM'),
  createData(<a target="_blank" href="https://youtu.be/sUrceW7xrwM">Brand Storytelling By Microsoft's Miri Rodriguez</a>, 'Oct 3 - 5:30 PM', 'Oct 3 - 6:00 PM'),
  createData(<a target="_blank" href="https://youtu.be/we9UWcUl9ls">Ohio Cyber Range Institute Cyber Games</a>, 'Oct 3 - 6:30 PM', 'Oct 3 - 7:00 PM'),
  createData(<a target="_blank" href="https://youtu.be/KIWLeanWbVU">U.S. Air Force Capture The Flag Games By MLH's Neal</a>, 'Oct 3 - 8:00 PM', 'Oct 3 - 9:00 PM')
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <h1 className="index-countdown b mt0 font-opensans">Overview</h1>
      <TableContainer className="schedule-bg" component={Paper}>
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
      <TableContainer className="schedule-bg mv3" component={Paper}>
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
      <br></br>
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
      </TableContainer>
    </div>
  );
}