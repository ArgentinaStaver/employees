import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../store/actions/actionCreators';
import { IEmployee } from '../models/EmployeeModel';
import { AppState } from '../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../store/actions/types';
import UpdateEmployee from '../components/UpdateEmployee/UpdateEmployee';


export interface LinkStateToProps {
    employees: IEmployee[];
}

export interface LinkDispatchToProps {
    updateEmployeeAction: (employee: IEmployee) => void;
};

const mapStateToProps = (state: AppState, ownProps: IEmployee): LinkStateToProps => ({
    employees: state.employees,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: IEmployee): LinkDispatchToProps => ({
        updateEmployeeAction: bindActionCreators(actionCreators.updateEmployeeAction, dispatch),
});

const UpdateEmployeeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateEmployee);

export default UpdateEmployeeContainer;