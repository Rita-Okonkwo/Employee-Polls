import { makeStyles, shorthands} from '@fluentui/react-components';

export const useStyles = makeStyles({
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    ...shorthands.margin('1rem')
  }
});