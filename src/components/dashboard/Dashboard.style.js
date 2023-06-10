import { makeStyles, shorthands} from '@fluentui/react-components';

export const useStyles = makeStyles({
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...shorthands.margin('1rem')
  }
});