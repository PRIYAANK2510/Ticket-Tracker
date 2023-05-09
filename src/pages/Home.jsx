import { useState } from 'react';
import AddBoard from '../components/AddBoard/AddBoard';
import AddTask from '../components/AddTask/AddTask';
import BoardSection from '../components/BoardSection/BoardSection';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { addBoard } from '../services/addBoard';
import { addTask } from '../services/addTask';
import { initialBoard } from '../services/initialBoard';

const Home = () => {
  const [boards, setBoards] = useState(initialBoard);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isBoardFormActive, setIsBoardFormActive] = useState(false);
  const [isTaskFormActive, setIsTaskFormActive] = useState(false);
  //Create New Board
  const createNewBoard = (obj) => {
    const tempObj = addBoard(obj, boards);
    setBoards((prev) => {
      return [...prev, tempObj];
    });
    setIsBoardFormActive(false);
    setActiveIndex(boards[boards.length - 1].index + 1);
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

  return (
    <div className='App'>
      <Sidebar
        boards={boards}
        setIsBoardFormActive={setIsBoardFormActive}
        updateActiveBoard={updateActiveBoard}
      />
      {isBoardFormActive && (
        <AddBoard
          setIsBoardFormActive={setIsBoardFormActive}
          createNewBoard={createNewBoard}
        />
      )}
      {isTaskFormActive && (
        <AddTask
          setIsTaskFormActive={setIsTaskFormActive}
          createNewTask={createNewTask}
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
        <BoardSection
          activeBoardData={
            boards.filter((board) => {
              return board.index === activeIndex;
            })[0].data
          }
        />
      </main>
    </div>
  );
};
export default Home;
