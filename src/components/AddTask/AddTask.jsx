import { useState } from 'react';

const AddTask = ({ setIsTaskFormActive, createNewTask }) => {
  const [inputObj, setInputObj] = useState({
    ttitle: '',
    tdescription: '',
  });
  return (
    <div className='addTaskPage'>
      <div className='taskForm'>
        <h1>Add Task</h1>
        <div>
          <label htmlFor='ttitle'>Title</label>
          <input
            type='text'
            id='ttitle'
            placeholder='Enter Title'
            value={inputObj.ttitle}
            onChange={(e) =>
              setInputObj((prev) => {
                return { ...prev, ttitle: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor='tdescription'>Description</label>
          <textarea
            type='text'
            id='tdescription'
            placeholder='Enter Description'
            value={inputObj.tdescription}
            onChange={(e) =>
              setInputObj((prev) => {
                return { ...prev, tdescription: e.target.value };
              })
            }
          />
        </div>
        <div className='buttonboard'>
          <button
            className='submittask'
            onClick={createNewTask}
          >
            Add Task
          </button>
          <button
            className='canceltask'
            onClick={() => setIsTaskFormActive(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddTask;
