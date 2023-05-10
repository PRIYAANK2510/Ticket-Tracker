import { useState } from 'react';

const EditTask = ({ isEditFormActive, activeBoardData, setIsEditFormActive }) => {
  const [editObj, setEditObj] = useState({
    ttitle: activeBoardData.tasks[isEditFormActive].ttitle,
    tdescription: activeBoardData.tasks[isEditFormActive].tdescription,
  });
  return (
    <div className='editTaskPage'>
      <div className='edittaskForm'>
        <h1>Edit Task</h1>
        <div>
          <label htmlFor='ttitle'>Edit Title</label>
          <input
            type='text'
            id='ttitle'
            value={editObj.ttitle}
            onChange={(e) =>
              setEditObj((prev) => {
                return { ...prev, ttitle: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor='tdescription'>Edit Description</label>
          <textarea
            type='text'
            id='tdescription'
            value={editObj.tdescription}
            onChange={(e) =>
              setEditObj((prev) => {
                return { ...prev, tdescription: e.target.value };
              })
            }
          />
        </div>
        <div className='ebuttonboard'>
          <button
            className='edittask'
            onClick={() => {
              console.log('editting');
            }}
          >
            Edit Task
          </button>
          <button
            className='canceledittask'
            onClick={() => setIsEditFormActive(0)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditTask;
