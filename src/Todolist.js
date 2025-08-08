function Todolist({ tasks }) {
    // This component renders a list of tasks
    // Each task is displayed as a list item

  return (
     <ul>
       {tasks.map((t)=>(
        <li key={t.id}>{t.task}</li>
        ))}
     </ul>
    );
};
export default Todolist;