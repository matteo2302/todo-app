import Todoitem from "./Todoitem";

function Todolist({ tasks, rimuoviTask}) {
  return (
     <ul>
       {tasks.map((t)=>(
        <Todoitem key={t.id} task={t} rimuoviTask={rimuoviTask}/>
        ))}
     </ul>
    );
};
export default Todolist;