import { useState } from 'react';
import AddBoard from '../components/AddBoard/AddBoard';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  const [boards, setBoards] = useState([
    {
      bname: 'First Board',
      bcolor: '#AA4AB0',
      data: {
        todo: [],
        wip: [],
        inReview: [],
        done: [],
      },
    },
    {
      bname: 'Second Board',
      bcolor: '#004ABC',
      data: {
        todo: [],
        wip: [],
        inReview: [],
        done: [],
      },
    },
  ]);
  const [activeBoard, setActiveBoard] = useState(boards[0]);
  const [isBoardFormActive, setIsBoardFormActive] = useState(false);
  const createNewBoard = (obj) => {
    const tempObj = {
      ...obj,
      data: {
        todo: [],
        wip: [],
        inReview: [],
        done: [],
      },
    };
    setBoards((prev) => {
      return [...prev, tempObj];
    });
    setIsBoardFormActive(false);
  };

  const updateActiveBoard = (obj) => {
    setActiveBoard(obj);
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
      <main>
        <Header activeBoard={activeBoard} />
        <div className='maindd'></div>
      </main>
    </div>
  );
};
export default Home;
