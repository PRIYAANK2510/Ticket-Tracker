import Card from '../Card/Card';

const Column = ({ column, tasks, deleteIxTask, setIsEditFormActive }) => {
  return (
    <div className='box'>
      <h2>{column.title}</h2>
      <div className='section'>
        {tasks.map((task, index) => (
          <Card
            key={`card${index}`}
            task={task}
            deleteIxTask={deleteIxTask}
            setIsEditFormActive={setIsEditFormActive}
          />
        ))}
      </div>
    </div>
  );
};
export default Column;
