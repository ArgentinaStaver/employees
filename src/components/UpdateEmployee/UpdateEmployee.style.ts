import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    addContainer: {
      justifyContent: 'center',    
    },
    inputsContainer: {
      marginTop: theme.spacing(4),
      alignContent: 'center',          
    },
    inputWidth: {
      width: '360px',
    },
    centerText: {
      textAlign: 'center',
    }
  }));
  
export default useStyles;