import './App.css';
import Todoform from './Todoform';
import { useState } from 'react';
import Todolist from './Todolist';

function App() {

  let [tasks, setTasks] = useState([]);
  let aggiungiTask = (newTask) => {
  if (newTask !== ""){
    let updatedtasks = {id : Date.now(), task: newTask};
    setTasks([...tasks, updatedtasks]);
  }
}
let rimuoviTask = (id) => {
  setTasks(tasks.filter((t)=> t.id !== id));

}
  return (
    <div className="App">
    <h1>TODO LIST</h1>
    <Todoform aggiungiTask={aggiungiTask}/>
    <Todolist tasks={tasks} rimuoviTask={rimuoviTask}/>
    </div>
  );

}
export default App;
