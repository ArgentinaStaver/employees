import axios from 'axios';
import { IEmployee, INewEmployee } from '../models/EmployeeModel';


class EmployeeService {
    public mapToEmployeeModel = (data: any): IEmployee => ({
        id: data.id,
        employee_name: data.name,
        employee_salary: data.salary,
        employee_age: data.age,
    });

    public getEmployees = async (): Promise<any> => {
        try {
            const { data } = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
            return data;
        } catch(error) {
            return 'error';
        }
    }

    public addEmployee = async (employee: INewEmployee): Promise<any> => {
        try{     
            const response = await axios.post('http://dummy.restapiexample.com/api/v1/create', employee);               
            if (response.status === 200) {      
                return { status: 'success', data: this.mapToEmployeeModel(response.data.data) }
            }
        } catch(error) {
           return 'error';
        }
    }

    public updateEmployee = async(employee: INewEmployee, id: string): Promise<any> => {
        try {
            
            const response = await axios.put(`http://dummy.restapiexample.com/api/v1/update/${id}`, employee);
            if(response.status === 200) {
                // Am sarit peste API response pentru ca vine null in data...
                return { status: 'success', data: this.mapToEmployeeModel({id, ...employee}) }
            }
        } catch(error){
            return 'error';
        }
    }

    public removeEmployee = async(id: string): Promise<any> => {
        try {
            const response = await axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`);
            if (response.status === 200) {
                return { status: 'success'}
            }
        } catch(error) {
            return { status: 'error'};
        }
    }
}

const employeeService = new EmployeeService();

export default employeeService;