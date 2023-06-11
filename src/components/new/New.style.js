import { makeStyles, shorthands} from '@fluentui/react-components';

export const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: '1rem',
    ...shorthands.padding('1rem')
  }
});