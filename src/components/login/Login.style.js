import { makeStyles, shorthands } from '@fluentui/react-components';

export const useStyles = makeStyles({
  title1: {
    ...shorthands.margin('0.625rem'),
    display: 'flex',
    justifyContent: 'start'
  },
  rootContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainers: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '0.625rem'
  },
  button: {
    marginTop: '0.625rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});