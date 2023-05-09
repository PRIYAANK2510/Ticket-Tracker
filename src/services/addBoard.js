export const addBoard = (obj, boards) => {
  let i = 1;
  if (boards.length !== 0) {
    i = boards[boards.length - 1].index + 1;
  }
  const tempObj = {
    ...obj,
    index: i,
    data: {
      tasks: {},
      columns: {
        'column-1': { id: 'column-1', title: 'To-Do', taskIds: [] },
        'column-2': { id: 'column-2', title: 'Work in Progress', taskIds: [] },
        'column-3': { id: 'column-3', title: 'In Review', taskIds: [] },
        'column-4': { id: 'column-4', title: 'Done', taskIds: [] },
      },
      columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
    },
  };

  return tempObj;
};
