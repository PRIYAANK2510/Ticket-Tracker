import { RxCross2 } from 'react-icons/rx';
const Card = ({ task }) => {
  return (
    <div className='card'>
      <h1>{task.ttitle}</h1>
      <p>{task.tdescription}</p>
      <RxCross2 className='delicon' />
    </div>
  );
};
export default Card;
