import { IEmployee } from '../../models/EmployeeModel';
import { ADD_ALL_EMPLOYEES, ADD_EMPLOYEE, UPDATE_EMPLOYEE, REMOVE_EMPLOYEE, AppActions } from './types';
import { Dispatch } from "redux";
import { AppState } from '../configureStore';


export const setAddingAllEmployeesAction = (employees: IEmployee[]): AppActions => ({
  type: ADD_ALL_EMPLOYEES,
  employees,
});

export const addEmployee = (employee: IEmployee): AppActions => ({
  type: ADD_EMPLOYEE,
  employee,
});

export const updateEmployee = (employee: IEmployee): AppActions => ({
  type: UPDATE_EMPLOYEE,
  employee,
});

export const removeEmployee = (id: string): AppActions => ({
  type: REMOVE_EMPLOYEE,
  id,
});

export const addAllEmployeesAction = (employees: IEmployee[]) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setAddingAllEmployeesAction(employees));
  }
}

export const addEmployeeAction = (employee: IEmployee) => { 
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(addEmployee(employee));
  }
}

export const updateEmployeeAction = (employee: IEmployee) => {  
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(updateEmployee(employee));
  }
}

export const removeEmployeeAction = (id: string) => {
  return(dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(removeEmployee(id));
  }
}
