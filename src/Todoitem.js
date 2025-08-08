function Todoitem({ task, rimuoviTask }) {
  return (
   <li>{task.task} <button onClick={() => rimuoviTask(task.id)}>rimuovi</button></li>
  );
}   
export default Todoitem;