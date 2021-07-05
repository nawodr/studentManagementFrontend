import './App.css';
import Header from './components/Header';
import AddStudent from './components/addStudent';
import viewStudent from './components/viewStudent';
// import updateStudent from './components/updateStudent';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Route path="/" exact component = {viewStudent}/>
          <Route path="/add" exact component = {AddStudent}/>
          <Route path="/update/:id" exact component = {updateStudent}/>
      </div>
    </Router>
    
  );
}

export default App;
