import { useState } from 'react';

const AddBoard = ({ setIsBoardFormActive, createNewBoard }) => {
  const [inputObj, setInputObj] = useState({
    bname: '',
    bcolor: '',
  });
  return (
    <div className='addBoardPage'>
      <div className='boardForm'>
        <div>
          <label htmlFor='bname'>Board Name</label>
          <input
            type='text'
            id='bname'
            placeholder='Enter Board Title'
            value={inputObj.bname}
            onChange={(e) =>
              setInputObj((prev) => {
                return { ...prev, bname: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor='bcolor'>Color</label>
          <input
            type='text'
            id='bcolor'
            placeholder='Enter any color'
            value={inputObj.bcolor}
            onChange={(e) =>
              setInputObj((prev) => {
                return { ...prev, bcolor: e.target.value };
              })
            }
          />
        </div>
        <div className='buttonboard'>
          <button
            className='submitboard'
            onClick={() => createNewBoard(inputObj)}
          >
            Add Board
          </button>
          <button
            className='cancelboard'
            onClick={() => setIsBoardFormActive(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddBoard;
