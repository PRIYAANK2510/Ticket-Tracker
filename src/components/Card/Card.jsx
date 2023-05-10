import { RxCross2 } from 'react-icons/rx';
const Card = ({
  task,
  deleteIxTask,
  colindex,
  setIsEditFormActive,
  handleInitialFinal,
  handledragEnd,
}) => {
  return (
    <div
      className='card'
      draggable
      onDragStart={() => handleInitialFinal({ initial: colindex, tskId: task.id })}
      onDragEnd={handledragEnd}
    >
      <div
        className='carddata'
        onClick={() => setIsEditFormActive(task.id)}
      >
        <h1>{task.ttitle}</h1>
        <p>{task.tdescription}</p>
      </div>
      <div
        className='delicon'
        onClick={() => deleteIxTask(task.id)}
      >
        <RxCross2 />
      </div>
    </div>
  );
};
export default Card;
