import { makeStyles} from '@fluentui/react-components';

export const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: '1rem'
  },
  image: {
    width: '18.75rem',
    height: '18.75rem'
  },
  cards: {
    display: 'flex',
    columnGap: '1rem'
  }
});