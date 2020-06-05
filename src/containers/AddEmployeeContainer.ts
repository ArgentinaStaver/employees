import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../store/actions/actionCreators';
import { IEmployee } from '../models/EmployeeModel';
import { AppState } from '../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../store/actions/types';
import AddEmployee from '../components/AddEmployee/AddEmployee';


export interface LinkStateToProps {
    employees: IEmployee[];
}

export interface LinkDispatchToProps {
    addEmployeeAction: (employee: IEmployee) => void;
};

const mapStateToProps = (state: AppState, ownProps: IEmployee): LinkStateToProps => ({
    employees: state.employees,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: IEmployee): LinkDispatchToProps => ({
    addEmployeeAction: bindActionCreators(actionCreators.addEmployeeAction, dispatch),
});

const AddNewEmployee = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddEmployee);

export default AddNewEmployee;