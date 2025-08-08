import { useState } from 'react';

function Todoform({ aggiungiTask }) {
let [newTask, setNewTask] = useState("");
const handleSubmit = (e) => {
  e.preventDefault();
  if(newTask.trim() !== ""){
    console.log(newTask);
    aggiungiTask(newTask);
    setNewTask("");
  }};

  return (
      <form onSubmit={handleSubmit}>
      <input onChange={(e)=>setNewTask(e.target.value)} value={newTask}  type="text" placeholder="nuova task" />
      <button type='submit'>aggiungi</button>
      </form>
    );
};
export default Todoform;