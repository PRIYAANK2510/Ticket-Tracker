import { TiDelete } from 'react-icons/ti';
const Sidebar = ({ boards, setIsBoardFormActive, updateActiveBoard }) => {
  return (
    <nav>
      <div className='Tboards'>
        {boards.map((board, index) => (
          <div
            key={`TB${index}`}
            className='Tboard'
            style={{ backgroundColor: `${board.bcolor}` }}
            onClick={() => {
              updateActiveBoard(board);
            }}
          >
            <p>{board.bname}</p>
            <TiDelete className='delBicon' />
          </div>
        ))}
      </div>

      <div
        className='addBoard'
        onClick={() => setIsBoardFormActive(true)}
      >
        <p>Add Board</p>
      </div>
    </nav>
  );
};
export default Sidebar;
