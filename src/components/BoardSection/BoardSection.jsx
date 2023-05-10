import Column from '../Column/Column';

const BoardSection = ({ activeBoardData, deleteIxTask, setIsEditFormActive }) => {
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
            setIsEditFormActive={setIsEditFormActive}
          />
        );
      })}
    </div>
  );
};
export default BoardSection;
