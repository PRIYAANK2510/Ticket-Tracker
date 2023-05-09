import { MdAddTask } from 'react-icons/md';
const Header = ({ activeBoard, setIsTaskFormActive }) => {
  return (
    <header>
      <h1>{activeBoard.bname}</h1>
      <MdAddTask
        className='addTaskIcon'
        onClick={() => setIsTaskFormActive(true)}
      />
    </header>
  );
};
export default Header;
