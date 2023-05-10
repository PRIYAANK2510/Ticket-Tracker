import { useEffect, useState } from 'react';
import AddBoard from '../components/AddBoard/AddBoard';
import AddTask from '../components/AddTask/AddTask';
import BoardSection from '../components/BoardSection/BoardSection';
import EditTask from '../components/EditTask/EditTask';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { addBoard } from '../services/addBoard';
import { addTask } from '../services/addTask';
import { deleteBoard } from '../services/deleteBoard';
import { deleteTask } from '../services/deleteTask';
import { editTask } from '../services/editTask';
import { initialBoard } from '../services/initialBoard';

const Home = () => {
  const [boards, setBoards] = useState(
    localStorage.getItem('boards')
      ? JSON.parse(localStorage.getItem('boards'))
      : initialBoard
  );
  const [activeIndex, setActiveIndex] = useState(
    localStorage.getItem('activeIndex')
      ? JSON.parse(localStorage.getItem('activeIndex'))
      : 1
  );
  const [isBoardFormActive, setIsBoardFormActive] = useState(false);
  const [isTaskFormActive, setIsTaskFormActive] = useState(false);
  const [isEditFormActive, setIsEditFormActive] = useState(0);

  useEffect(() => {
    localStorage.setItem('boards', JSON.stringify(boards));
  }, [boards]);
  useEffect(() => {
    localStorage.setItem('activeIndex', JSON.stringify(activeIndex));
  }, [activeIndex]);

  //Create New Board
  const createNewBoard = (obj) => {
    const tempObj = addBoard(obj, boards);
    setBoards((prev) => {
      return [...prev, tempObj];
    });
    setIsBoardFormActive(false);
    let i = 1;
    if (boards.length !== 0) {
      i = boards[boards.length - 1].index + 1;
    }
    setActiveIndex(i);
  };

  //Create New Task
  const createNewTask = (obj) => {
    const index = activeIndex;
    const newBoard = addTask(obj, index, boards);
    setBoards(newBoard);
    setIsTaskFormActive(false);
  };

  //Change The Board
  const updateActiveBoard = (obj) => {
    setActiveIndex(obj.index);
  };

  //Delete the Board
  const deleteIxBoard = (index) => {
    const newB = deleteBoard(index, boards);
    if (newB.length === 0) {
      setBoards([]);
    } else {
      setActiveIndex(newB[0].index);
      setBoards(newB);
    }
  };

  //Delete the Task
  const deleteIxTask = (id) => {
    const newB = deleteTask(id, activeIndex, boards);
    setBoards(newB);
  };

  //Edit The Task
  const editIxTask = (id, editObj) => {
    const newB = editTask(id, activeIndex, boards, editObj);
    setBoards(newB);
    setIsEditFormActive(0);
  };

  return (
    <div className='App'>
      <Sidebar
        boards={boards}
        setIsBoardFormActive={setIsBoardFormActive}
        updateActiveBoard={updateActiveBoard}
        deleteIxBoard={deleteIxBoard}
      />
      {/* Board Form */}
      {isBoardFormActive && (
        <AddBoard
          setIsBoardFormActive={setIsBoardFormActive}
          createNewBoard={createNewBoard}
        />
      )}
      {/* Task Form */}
      {isTaskFormActive && (
        <AddTask
          setIsTaskFormActive={setIsTaskFormActive}
          createNewTask={createNewTask}
        />
      )}
      {/* Edit Form */}
      {isEditFormActive !== 0 && (
        <EditTask
          isEditFormActive={isEditFormActive}
          activeBoardData={
            boards.filter((board) => {
              return board.index === activeIndex;
            })[0].data
          }
          setIsEditFormActive={setIsEditFormActive}
          editIxTask={editIxTask}
        />
      )}
      <main>
        <Header
          activeBoard={
            boards.filter((board) => {
              return board.index === activeIndex;
            })[0]
          }
          setIsTaskFormActive={setIsTaskFormActive}
        />
        {boards.length !== 0 && (
          <BoardSection
            activeBoardData={
              boards.filter((board) => {
                return board.index === activeIndex;
              })[0].data
            }
            deleteIxTask={deleteIxTask}
            setIsEditFormActive={setIsEditFormActive}
          />
        )}
      </main>
    </div>
  );
};
export default Home;
