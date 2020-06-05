import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './Menu.style';

const Menu: React.FC = (() => {
    const classes = useStyles();
    return(
        <div className={classes.menu}>
        <AppBar position="static">
            <Toolbar className={classes.navMenu}>
                <Link to='/'>
                    <Typography variant="h6" className={classes.title}>
                        Angajati 
                    </Typography>  
                </Link>
                <Link to='/addEmployee'>
                    <Typography variant="h6" className={classes.title}>
                        Adauga un nou angajat
                    </Typography> 
                </Link>                      
            </Toolbar>
        </AppBar>
    </div>
    );
});

export default Menu;