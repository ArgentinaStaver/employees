import employeeService from '../data-services/EmployeeService';
import { INewEmployee } from '../models/EmployeeModel';
import { LinkStateToProps, LinkDispatchToProps } from '../containers/EmployeesList';

type Props = LinkStateToProps & LinkDispatchToProps;

class EmployeeController {
    private props: Props | undefined;

    public setProps(props: Props) {
        this.props = props;
    }

    public loadEmployees = async(): Promise<any> => {
        try{
            const { data } = await employeeService.getEmployees();
            if (data) {
                this.props && this.props.addAllEmployeesAction(data);
            }
        } catch(error) {
            return 'error';
        }
    }

    public removeEmployee = async(id: string): Promise<any> => {
        try{
            const { status } = await employeeService.removeEmployee(id);            
            if(status === 'success') {
                this.props?.removeEmployeeAction(id);  
            }   
        } catch(error) {
            return 'error';
        }
    }

    public saveEmployee = async(employee: INewEmployee): Promise<any> => {
        try{
            const { status, data } = await employeeService.addEmployee(employee);
            if(status === 'success') {              
                this.props?.addEmployeeAction(data);
            }   
        } catch(error) {
            return 'error';
        }
    }

    public updateEmployee = async(employee: INewEmployee, id: string): Promise<any> => {
        try {
            const { status, data } = await employeeService.updateEmployee(employee, id);            
            if(status === 'success') {
              this.props?.updateEmployeeAction(data);  
            }
        } catch(error) {
            return 'error';
        }
    }
}

export const employeeController = new EmployeeController();