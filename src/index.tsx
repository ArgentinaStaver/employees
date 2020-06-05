import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux'
import EmployeesList from './containers/EmployeesList';
import AddNewEmployee from './containers/AddEmployeeContainer';
import * as serviceWorker from './serviceWorker';
import { store } from './store/configureStore';
import UpdateEmployeeContainer from './containers/UpdateEmployeeContainer';

ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path='/' exact component={EmployeesList} />
          <Route path='/addEmployee' component={AddNewEmployee} />
          <Route path='/updateEmployee/:id' component={UpdateEmployeeContainer} />
        </div>
      </Router>  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
