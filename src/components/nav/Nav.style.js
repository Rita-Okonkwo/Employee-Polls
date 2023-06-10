import { makeStyles, shorthands } from '@fluentui/react-components';

export const useStyles = makeStyles({
  navContainer: {
    ...shorthands.padding('0.5rem'),
    width: '100%',
    display: 'flex',
    justifyContent:'space-between'
  },
  tab: {
    alignSelf: 'start'
  },
  avatar:{
    display: 'flex',
    marginRight: '0.5rem'
  },
  user: {
    display: 'flex',
    marginRight: '0.5rem',
    justifyContent: 'center'
  }
});