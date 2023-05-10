export const editTask = (id, index, boards, obj) => {
  const newboard = boards.map((board) => {
    if (board.index === index) {
      const nB = {
        ...board,
        data: {
          ...board.data,
          tasks: {
            ...board.data.tasks,
            [id]: { id: id, ...obj },
          },
        },
      };
      return nB;
    }
    return board;
  });
  return newboard;
};
