import { makeStyles, shorthands} from '@fluentui/react-components';

export const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...shorthands.margin('1rem')
  },
  dashboard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...shorthands.margin('1rem'),
    width: '10rem'
  }
});