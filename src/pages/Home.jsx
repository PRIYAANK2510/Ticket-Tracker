import { useState } from 'react';
import AddBoard from '../components/AddBoard/AddBoard';
import BoardSection from '../components/BoardSection/BoardSection';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  const [boards, setBoards] = useState([
    {
      bname: 'First Board',
      bcolor: '#AA4AB0',
      data: {
        tasks: {
          1: { id: '1', ttitle: 'Hello', tdescription: 'Configure Next.js application' },
          2: { id: '2', ttitle: 'Yay', tdescription: 'Configure Next.js application' },
          3: { id: '3', ttitle: 'Diablo', tdescription: 'Configure Next.js application' },
          4: { id: '4', ttitle: 'Klaus', tdescription: 'Configure Next.js application' },
          5: { id: '5', ttitle: 'SLow', tdescription: 'Configure Next.js application' },
          6: { id: '6', ttitle: 'Defat', tdescription: 'Configure Next.js application' },
        },
        columns: {
          'column-1': { id: 'column-1', title: 'To-Do', taskIds: [1, 2, 3, 4, 5, 6] },
          'column-2': { id: 'column-2', title: 'Work in Progress', taskIds: [] },
          'column-3': { id: 'column-3', title: 'In Review', taskIds: [] },
          'column-4': { id: 'column-4', title: 'Done', taskIds: [] },
        },
        columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
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
        <BoardSection activeBoardData={activeBoard.data} />
      </main>
    </div>
  );
};
export default Home;
