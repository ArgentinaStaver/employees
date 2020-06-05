import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../store/actions/actionCreators';
import { IEmployee } from '../models/EmployeeModel';
import { AppState } from '../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../store/actions/types';
import Home from '../components/Home/Home';


export interface LinkStateToProps {
    employees: IEmployee[];
}

export interface LinkDispatchToProps {
    addAllEmployeesAction: (employees: IEmployee[]) => void;
    removeEmployeeAction: (id: string) => void;
    addEmployeeAction: (employee: IEmployee) => void;
    updateEmployeeAction: (employee: IEmployee) => void; 
}

const mapStateToProps = (state: AppState, ownProps: IEmployee): LinkStateToProps => ({
    employees: state.employees,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: IEmployee): LinkDispatchToProps => ({
    addAllEmployeesAction: bindActionCreators(actionCreators.addAllEmployeesAction, dispatch),
    removeEmployeeAction: bindActionCreators(actionCreators.removeEmployeeAction, dispatch),
    addEmployeeAction: bindActionCreators(actionCreators.addEmployeeAction, dispatch),
    updateEmployeeAction: bindActionCreators(actionCreators.updateEmployeeAction, dispatch),
});

const EmployeesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default EmployeesList;