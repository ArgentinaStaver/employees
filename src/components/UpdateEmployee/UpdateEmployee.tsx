import React, { useState } from 'react';
import { TextField, Grid, Typography, Button }from '@material-ui/core';
import Menu from '../Menu/Menu';
import useStyles from './UpdateEmployee.style';
import { LinkStateToProps, LinkDispatchToProps } from '../../containers/EmployeesList';
import { INewEmployee } from '../../models/EmployeeModel';
import { employeeController } from '../../controllers/EmployeeController';
import { useParams, useHistory } from 'react-router-dom';

type Props = LinkStateToProps & LinkDispatchToProps;

const UpdateEmployee: React.FC<Props> = ((props) => {    
    const classes = useStyles();
    let { id } = useParams();
    const history = useHistory();

    const controller = employeeController;
    controller.setProps(props);    
    
    const employee = props.employees.find((employee) => parseInt(employee.id) === parseInt(id))
    
    const [employee_name, setName] = useState(employee ? employee.employee_name : '');
    const [employee_age, setAge] = useState(employee ? employee.employee_age : '');
    const [employee_salary, setSalary] = useState(employee ? employee.employee_salary : '');

    const handleSubmit = () => {
        const isValid = employee_name.length > 0
            && employee_salary.length > 0 
            && employee_age.length > 0;

        if(isValid && employee?.id !== undefined) {
            const employeeToUpdate: INewEmployee = {
                name: employee_name,
                age: employee_age,
                salary: employee_salary,
            }
            controller.updateEmployee(employeeToUpdate, employee.id);       
        } else {
            console.log('Model is not valid');
        }
    }
    
    return (
        <Grid
         container
         direction='column'
         component='form'         
         className={classes.addContainer}
         >
            <Grid item>
                <Typography variant='h4' align="center">
                    Adauga un nou angajat
                </Typography>
                <Menu />
            </Grid>
            <Grid container spacing={3} direction="column" item className={classes.inputsContainer}>
                <Grid item>
                    <TextField
                        className={classes.inputWidth}
                        required
                        id="outlined-required"
                        label="Name"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={employee_name}
                        variant="outlined"
                        placeholder="Introdu numele"
                        onChange={(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => setName(e.currentTarget.value)}
                    /> 
                </Grid>          
                <Grid item>
                    <TextField
                        className={classes.inputWidth}
                        id="outlined-number"
                        defaultValue={employee_salary}
                        label="Salary"
                        type="number"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="outlined"
                        placeholder='Introdu salariul'
                        onChange={(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => setSalary(e.currentTarget.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        className={classes.inputWidth}
                        id="outlined-number"
                        defaultValue={employee_age}
                        label="Age"
                        type="number"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="outlined"
                        placeholder='Introdu varsta'
                        onChange={(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => setAge(e.currentTarget.value)}
                    /> 
                </Grid>
                <Grid item className={classes.centerText}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            handleSubmit();
                            history.push('/');
                        }}
                    >
                        Modifica datele
                    </Button>
                </Grid>       
            </Grid>
        </Grid>    
    );
});
    
export default UpdateEmployee;
