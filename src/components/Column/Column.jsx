import Card from '../Card/Card';

const Column = ({
  column,
  tasks,
  deleteIxTask,
  setIsEditFormActive,
  handleInitialFinal,
  handledragEnd,
}) => {
  return (
    <div className='box'>
      <h2>{column.title}</h2>
      <div
        className='section'
        onDragOver={(e) => {
          e.preventDefault();
          handleInitialFinal({ final: column.id });
        }}
      >
        {tasks.map((task, index) => (
          <Card
            key={`card${index}`}
            task={task}
            colindex={column.id}
            deleteIxTask={deleteIxTask}
            setIsEditFormActive={setIsEditFormActive}
            handleInitialFinal={handleInitialFinal}
            handledragEnd={handledragEnd}
          />
        ))}
      </div>
    </div>
  );
};
export default Column;
