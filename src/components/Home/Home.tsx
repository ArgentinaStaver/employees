import React from 'react';
import {
    Button,     
    TableContainer,
    TableHead,
    Table,
    TableRow,
    TableCell,         
    TableBody,
    Grid, 
} from '@material-ui/core';
import Menu from '../Menu/Menu';
import useStyles from './Home.style';
import { IEmployee } from '../../models/EmployeeModel';
import { LinkStateToProps, LinkDispatchToProps } from '../../containers/EmployeesList';
import { employeeController } from '../../controllers/EmployeeController';
import { Link } from 'react-router-dom';

type Props = LinkStateToProps & LinkDispatchToProps;

const Home: React.FC<Props> = ((props) => {
    const classes = useStyles();
    const controller = employeeController;
    controller.setProps(props);

    if (!props.employees.length) {
        controller.loadEmployees();
    }

    return (
          <Grid container direction='column'>
              <Grid item>
                <h1 className={classes.title}>Gestioneaza datele angajatilor</h1>
                <Menu /> 
              </Grid>
            <Grid item className={classes.employes}>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nume</TableCell>
                                <TableCell align="right">Salariu</TableCell>
                                <TableCell align="right">Varsta</TableCell>                        
                                <TableCell align="center">Actions</TableCell>           
                            </TableRow>
                        </TableHead>
                        <TableBody>           
                            {props.employees.map((employee: IEmployee) => 
                                (<TableRow key={employee.id}>
                                    <TableCell component="th">{employee.employee_name}</TableCell>               
                                    <TableCell align="right">{employee.employee_salary}</TableCell>
                                    <TableCell align="right">{employee.employee_age}</TableCell>                                       
                                    <TableCell align="center">
                                        <Link to={`/updateEmployee/${employee.id}`} className={classes.spacing}>
                                            Update
                                        </Link>
                                        <Button
                                          variant="contained"
                                          color="secondary"
                                          onClick={() => employee.id && controller.removeEmployee(employee.id)}
                                          >
                                            Delete
                                        </Button>  
                                    </TableCell>                                                       
                                </TableRow>)
                            )}                         
                        </TableBody>
                    </Table>
                </TableContainer>      
            </Grid>
        </Grid>
    );
});

export default Home;