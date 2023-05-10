export const addTask = (obj, index, boards) => {
  const newBOARD = boards.map((board) => {
    if (board.index === index) {
      const bkeys = Object.keys(board.data.tasks);
      const lastindex = bkeys.length - 1;
      let newIndex = 1;
      if (lastindex >= 0) {
        const lastkey = bkeys[lastindex];
        newIndex = parseInt(board.data.tasks[lastkey].id) + 1;
      }

      const newD = {
        ...board,
        data: {
          ...board.data,
          tasks: {
            ...board.data.tasks,
            [newIndex]: {
              ...obj,
              id: newIndex,
            },
          },
          columns: {
            ...board.data.columns,
            'column-1': {
              ...board.data.columns['column-1'],
              taskIds: [...board.data.columns['column-1'].taskIds, newIndex],
            },
          },
        },
      };
      return newD;
    }
    return board;
  });
  return newBOARD;
};
