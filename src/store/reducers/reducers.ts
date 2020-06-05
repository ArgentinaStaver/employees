import { EmployeeActionTypes, ADD_ALL_EMPLOYEES, ADD_EMPLOYEE, UPDATE_EMPLOYEE, REMOVE_EMPLOYEE } from "../actions/types";
import { IEmployee } from '../../models/EmployeeModel';

const initialState: IEmployee[] = [];

const employeesReducer = (
    state = initialState,
    action: EmployeeActionTypes,
): IEmployee[] => {
    switch (action.type) {
        case ADD_ALL_EMPLOYEES:
            return [...action.employees];
        case ADD_EMPLOYEE:
            return [...state, action.employee];
        case UPDATE_EMPLOYEE:
            return state.map(employee => {
                if (employee.id === action.employee.id) {
                  return {
                    ...employee,
                    ...action.employee,
                  };
                } else {
                  return employee;
                }
              }); 
        case REMOVE_EMPLOYEE:
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
}

export { employeesReducer };