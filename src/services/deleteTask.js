export const deleteTask = (id, index, boards) => {
  const newboard = boards.map((board) => {
    if (board.index === index) {
      delete board.data.tasks[id];

      const nB = {
        ...board,
        data: {
          ...board.data,
          columns: {
            'column-1': {
              ...board.data.columns['column-1'],
              taskIds: board.data.columns['column-1'].taskIds.filter((ti) => {
                return ti != id;
              }),
            },
            'column-2': {
              ...board.data.columns['column-2'],
              taskIds: board.data.columns['column-2'].taskIds.filter((ti) => {
                return ti != id;
              }),
            },
            'column-3': {
              ...board.data.columns['column-3'],
              taskIds: board.data.columns['column-3'].taskIds.filter((ti) => {
                return ti != id;
              }),
            },
            'column-4': {
              ...board.data.columns['column-4'],
              taskIds: board.data.columns['column-4'].taskIds.filter((ti) => {
                return ti != id;
              }),
            },
          },
        },
      };
      return nB;
    }
    return board;
  });
  return newboard;
};
