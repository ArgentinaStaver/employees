import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    menu: {
        background: 'red',
        margin: '0 auto',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
    },
    table: {
        minWidth: 650,
    },
    employes: {
        margin: '0 auto',
        marginTop: '30px',
    },
    spacing: {
        margin: theme.spacing(1),
    }
}));

export default useStyles;