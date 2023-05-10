export const dragdrop = (initial, final, id, boards, index) => {
  if (initial == final) {
    return boards;
  }
  const newBoards = boards.map((board) => {
    if (board.index === index) {
      const updateB = {
        ...board,
        data: {
          ...board.data,
          columns: {
            ...board.data.columns,
            [initial]: {
              ...board.data.columns[initial],
              taskIds: board.data.columns[initial].taskIds.filter((ti) => {
                return ti != id;
              }),
            },
            [final]: {
              ...board.data.columns[final],
              taskIds: [...board.data.columns[final].taskIds, parseInt(id)],
            },
          },
        },
      };
      return updateB;
    }
    return board;
  });
  return newBoards;
};
