import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
  card: {
    flexBasis: 260,
    maxWidth: 340,
    flexGrow: 1,
  },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  postList: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    overflow: 'hidden',
    alignItems: 'stretch',
    padding: 20,
    backgroundColor: '#cee',
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));