import {React} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from "./Navigation";
import EmployeeList from "./EmployeeList";
import NotFound from './NotFount';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';
import ViewUser from './ViewUser';

function App() {
  return (
   <Router>
      <div className="App">
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/add-user" component={AddUser}></Route>
          <Route exact path="/update-user/:id" component={UpdateUser}></Route>
          <Route exact path="/delete-user/:id" component={DeleteUser}></Route>
          <Route exact path="/view-user/:id" component={ViewUser}></Route>
          <Route exact path="/" component={EmployeeList}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
   </Router>
  );
}

export default App;
