import './App.css';
import Todoform from './Todoform';
import { useState } from 'react';

function App() {

  let [task, setTask] = useState(["prima task"]);



  return (
    <div className="App">
    <h1>TODO LIST</h1>
    <Todoform />
     <p>{task}</p>
    </div>
  );
}

export default App;
