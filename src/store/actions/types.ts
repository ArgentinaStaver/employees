import { IEmployee } from '../../models/EmployeeModel';

export const ADD_ALL_EMPLOYEES = 'ADD_ALL_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

export interface AddAllEmployeesAction {
    type: typeof ADD_ALL_EMPLOYEES;
    employees: IEmployee[];   
}

export interface AddEmployee {
    type: typeof ADD_EMPLOYEE;
    employee: IEmployee;
}

export interface UpdateEmployee {
    type: typeof UPDATE_EMPLOYEE;
    employee: IEmployee;
}

export interface RemoveEmployee {
    type: typeof REMOVE_EMPLOYEE;
    id: string;
}

export type EmployeeActionTypes = AddAllEmployeesAction | AddEmployee | UpdateEmployee | RemoveEmployee;

export type AppActions = EmployeeActionTypes;