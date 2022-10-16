import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { FC } from 'react';

import '../../styles/_font.scss';
import '../../styles/_variables.scss';

import './Schedule.scss';

const useStyles = makeStyles({
  table: {
    font: 'Open Sans'
  }
});

function createData(name: string, start: string, end: string) {
  return { name, start, end };
}

const generalRows = [
  createData('Check-In', 'Oct 22 - 09:30 AM', 'Oct 22 - 10:30 AM'),
  createData('Opening Ceremony', 'Oct 22 - 10:30 AM', 'Oct 22 - 11:15 AM'),
  createData('Lunch (in person)', 'Oct 22 - 11:15 AM', 'Oct 22 - 12:00 PM'),
  createData('HACKING', 'Oct 22 - 11:15 AM', 'Oct 23 - 11:15 AM'),
  createData('Sponsor Expo', 'Oct 22 - 12:00 PM', 'Oct 22 - 02:00 PM'),
  createData('Hackathon 101', 'Oct 22 - 01:00 PM', 'Oct 22 - 01:30 PM'),
  createData('Team Formation', 'Oct 22 - 01:30 PM', 'Oct 22 - 02:00 PM'),
  createData('Workshops (see below)', 'Oct 22 - 02:00 PM', 'Oct 22 - 05:00 PM'),  
  createData('Dinner (in person)', 'Oct 22 - 06:00 PM', 'Oct 22 - 06:30 PM'),
  createData('Geoguessr', 'Oct 22 - 06:30 PM', 'Oct 22 - 07:00 PM'),
  createData('Snyk Cybersecurity Challenge', 'Oct 22 - 07:00 PM', 'Oct 22 - 08:00 PM'),
  createData('MLH Bob Ross Contest', 'Oct 22 - 08:00 PM', 'Oct 22 - 09:00 PM'),
  createData('Super Smash Bros (in person)', 'Oct 22 - 09:00 PM', 'Oct 23 - 10:00 PM'),
  createData('Skribbl.io', 'Oct 22 - 11:00 PM', 'Oct 23 - 12:00 AM'),
  createData('Midnight Snack (in person)', 'Oct 23 - 12:30 AM', 'Oct 23 - 01:00 AM'),
  createData('Jackbox Games: Quiplash', 'Oct 23 - 01:00 AM', 'Oct 23 - 02:00 AM'),
  createData('Among Us', 'Oct 23 - 03:00 AM', 'Oct 23 - 04:00 AM'),
  createData('Stretching', 'Oct 23 - 05:00 AM', 'Oct 23 - 05:30 AM'),
  createData('Breakfast (in person)', 'Oct 23 - 09:00 AM', 'Oct 23 - 10:00 AM'),
  createData('Judging', 'Oct 23 - 12:00 PM', 'Oct 23 - 04:00 PM'),
  createData('Closing Ceremony', 'Oct 23 - 05:00 PM', 'Oct 23 - 06:00 PM')
];

const workShopRows = [
  createData('[AWS] AWS 101', 'Oct 22 - 02:00 PM', 'Oct 22 - 03:00 PM'),
  createData('[HII] Software Reverse Engineering 101', 'Oct 22 - 03:00 PM', 'Oct 22 - 04:00 PM'),
  createData('[LCS] Tracking Aircraft for Fun and Profit', 'Oct 22 - 04:00 PM', 'Oct 22 - 05:00 PM')
];

const Schedule: FC = () => {
  const classes = useStyles();

  return (
    <div>
      <TableContainer className="schedule-bg is-rounded" component={Paper}>
        <Table className={classes.table + ' schedule-table'} aria-label="simple table">
          <TableHead className="schedule-gray-row">
            <TableRow style={{ backgroundColor: '#191919', textTransform: 'uppercase' }}>
              <TableCell align="center" className="schedule-name">
                <span className="font-primary b" style={{ fontSize: '20px', color: '#EDEDED' }}>
                  Event
                </span>
              </TableCell>
              <TableCell align="center" className="schedule-date-time">
                <span className="font-primary b" style={{ fontSize: '20px', color: '#EDEDED' }}>
                  Start Time (EDT)
                </span>
              </TableCell>
              <TableCell align="center" className="schedule-date-time">
                <span className="font-primary b" style={{ fontSize: '20px', color: '#EDEDED' }}>
                  End Time (EDT)
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {generalRows.map(row => (
              <TableRow key={row.name}>
                <TableCell align="center" className="schedule-name" component="th" scope="row">
                  <span className="b" style={{ fontSize: '20px' }}>
                    {row.name}
                  </span>
                </TableCell>
                <TableCell
                  align="center"
                  className="schedule-date-time"
                  style={{ fontSize: '20px' }}
                >
                  {row.start}
                </TableCell>
                <TableCell
                  align="center"
                  className="schedule-date-time"
                  style={{ fontSize: '20px' }}
                >
                  {row.end}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <h2 className="text-3xl lg:text-5xl title font-semibold mt6">Workshops</h2>
      <TableContainer className="schedule-bg mv3 is-rounded" component={Paper}>
        <Table className={classes.table + ' schedule-table'} aria-label="simple table">
          <TableHead className="schedule-gray-row">
            <TableRow style={{ backgroundColor: '#191919', textTransform: 'uppercase' }}>
              <TableCell align="center" className="schedule-name">
                <span className="font-primary b" style={{ fontSize: '20px', color: '#EDEDED' }}>
                  Workshop
                </span>
              </TableCell>
              <TableCell align="center" className="schedule-date-time">
                <span className="font-primary b" style={{ fontSize: '20px', color: '#EDEDED' }}>
                  Start Time (EDT)
                </span>
              </TableCell>
              <TableCell align="center" className="schedule-date-time">
                <span className="font-primary b" style={{ fontSize: '20px', color: '#EDEDED' }}>
                  End Time (EDT)
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workShopRows.map(row => (
              <TableRow key={row.name}>
                <TableCell align="center" className="schedule-name" component="th" scope="row">
                  <span className="b" style={{ fontSize: '20px' }}>
                    {row.name}
                  </span>
                </TableCell>
                <TableCell
                  align="center"
                  className="schedule-date-time"
                  style={{ fontSize: '20px' }}
                >
                  {row.start}
                </TableCell>
                <TableCell
                  align="center"
                  className="schedule-date-time"
                  style={{ fontSize: '20px' }}
                >
                  {row.end}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Schedule;
