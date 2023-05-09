import { TiDelete } from 'react-icons/ti';
const Sidebar = ({ boards, setIsBoardFormActive, updateActiveBoard, deleteIxBoard }) => {
  return (
    <nav>
      <div className='Tboards'>
        {boards.map((board, index) => (
          <div
            key={`TB${index}`}
            className='Tboard'
            style={{ backgroundColor: `${board.bcolor}` }}
          >
            <p
              onClick={() => {
                updateActiveBoard(board);
              }}
            >
              {board.bname}
            </p>
            <TiDelete
              className='delBicon'
              onClick={() => deleteIxBoard(board.index)}
            />
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
