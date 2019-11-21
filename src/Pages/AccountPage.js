import React, {useContext} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from '@material-ui/core';
import {authenticationContext} from '../contexts/authentication';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
      maxWidth: 900,
    },
  },
}))(TableRow);

function createData(name, values) {
  return { name, values};
}


const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    margin: '0 auto',
  },
  table: {
    minWidth: 700,
  },
  title:{
    position: 'relative',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 600,
    marginTop: 20,
  },
}));

export default function AccountPage() {
  const {userInfo} = useContext(authenticationContext);
  const classes = useStyles();
  const posts = [userInfo.posts];

  const rows = [
    createData('username', userInfo.username),
    createData('email', userInfo.email),
    createData('id', userInfo._id),
    createData('createdAt', userInfo.createdAt),
    createData('updatedAt', userInfo.updatedAt),
    createData('posts',  posts.length),
  ];

  return (
    <>
    <Typography className={classes.title} variant="h5" component="h3">
      User Info
    </Typography>

    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Keys</StyledTableCell>
            <StyledTableCell align="left">Values</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.values}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
      </>
  );
}
