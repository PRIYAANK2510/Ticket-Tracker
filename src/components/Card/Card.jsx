import { RxCross2 } from 'react-icons/rx';
const Card = ({ task, deleteIxTask }) => {
  return (
    <div className='card'>
      <div className='carddata'>
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
