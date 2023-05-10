import Column from '../Column/Column';

const BoardSection = ({ activeBoardData, deleteIxTask }) => {
  return (
    <div className='container'>
      {activeBoardData.columnOrder.map((columnId) => {
        const column = activeBoardData.columns[columnId];
        const tasks = column.taskIds.map((taskId) => activeBoardData.tasks[taskId]);

        return (
          <Column
            key={column.id}
            column={column}
            tasks={tasks}
            deleteIxTask={deleteIxTask}
          />
        );
      })}
    </div>
  );
};
export default BoardSection;
