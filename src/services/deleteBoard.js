export const deleteBoard = (index, boards) => {
  return boards.filter((board) => {
    if (board.index !== index) {
      return board;
    }
  });
};
