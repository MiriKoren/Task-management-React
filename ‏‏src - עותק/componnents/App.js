
import { connect } from 'react-redux';
import './App.css';
import {Link,Route,Switch,BrowserRouter } from 'react-router-dom';
import AddToDo from './AddToDo';
import UpdateToDo from './UpdateToDo';
import ToDos from './ToDos';
import Login from './Login';
import Register from './Register';
import HistoryToDos from './HistoryToDos';
function App() {
  return (
  <>
  <Login/>
     {/* {props.message &&<ErrorDialoge message={props.message}/>} */}
    {/* <nav>
    <ul>
    <li>
        <Link to="/">login</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
      <li>
        <Link to="/register">register</Link>
      </li>
      <li>
        <Link to="/todos">todos</Link>
      </li>
      <li>
        <Link to="/addToDo" >add ToDo </Link>
      </li>
      <li>
        <Link to="/updateToDo" >update ToDo </Link>
      </li>
      <li>
        <Link to="/historyToDos" >history ToDos </Link>
      </li>
    </ul>
  </nav>
 <BrowserRouter>
  <Switch>

  <Route  exact path="/">
    <Login/>
  </Route>
  <Route path="/login">
    <Login/>
  </Route>
  <Route path="/register">
    <Register/>
  </Route>
  <Route path="/todos">
    <ToDos/>
  </Route>
  <Route path="/addToDo">
    <AddToDo/>
  </Route>
  <Route path="/updateToDo">
    <UpdateToDo/>
  </Route>
  <Route path="/historyToDos">
    <HistoryToDos/>
  </Route>
  
  </Switch>
  </BrowserRouter> */}
  </>
  
  );
}
const mapStateToProps=(state)=>{
  return {
    message:state.error.message
  }
}
export default connect(mapStateToProps)(App);
