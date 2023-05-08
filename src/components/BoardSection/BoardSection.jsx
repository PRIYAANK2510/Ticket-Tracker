import Column from '../Column/Column';

const BoardSection = ({ activeBoardData }) => {
  return (
    <div className='container'>
      {activeBoardData.columnOrder.map((columnId) => {
        const column = activeBoardData.columns[columnId];
        const tasks = column.taskIds.map((taskId) => activeBoardData.tasks[taskId]);
        console.log(tasks);

        return (
          <Column
            key={column.id}
            column={column}
            tasks={tasks}
          />
        );
      })}
    </div>
  );
};
export default BoardSection;
