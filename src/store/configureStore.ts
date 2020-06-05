import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from "redux-thunk";
import { employeesReducer } from './reducers/reducers';
import { AppActions } from './actions/types';

export const rootReducer = combineReducers({
    employees: employeesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )    
);