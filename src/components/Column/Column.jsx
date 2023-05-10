import Card from '../Card/Card';

const Column = ({ column, tasks, deleteIxTask }) => {
  return (
    <div className='box'>
      <h2>{column.title}</h2>
      <div className='section'>
        {tasks.map((task, index) => (
          <Card
            key={`card${index}`}
            task={task}
            deleteIxTask={deleteIxTask}
          />
        ))}
      </div>
    </div>
  );
};
export default Column;
