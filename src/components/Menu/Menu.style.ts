import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
    menu: {
        background: 'red',
        margin: '0 auto',
        width: '80%',        
    },
    title: {
        flexGrow: 1,
    },
    navMenu: {
        display: 'flex',
        justifyContent: 'space-around',
        '& a': {
            textDecoration: 'none',
            color: '#fff',
        }, 
    },
    table: {
        minWidth: 650,
    },
    employes: {
        margin: '0 auto',
        marginTop: '30px',        
    },
}));

export default useStyles;