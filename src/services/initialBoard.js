export const initialBoard = [
  {
    index: 1,
    bname: 'First Board',
    bcolor: '#AA4AB0',
    data: {
      tasks: {
        1: {
          id: '1',
          ttitle: 'Java',
          tdescription: 'Lorem ipsum dolor sit amet, consectetur. ',
        },
        2: {
          id: '2',
          ttitle: 'Python',
          tdescription: 'Lorem ipsum dolor sit amet, consectetur. ',
        },
        3: {
          id: '3',
          ttitle: 'React',
          tdescription: 'Lorem ipsum dolor sit amet, consectetur. ',
        },
      },
      columns: {
        'column-1': { id: 'column-1', title: 'To-Do', taskIds: [1, 2, 3] },
        'column-2': { id: 'column-2', title: 'Work in Progress', taskIds: [] },
        'column-3': { id: 'column-3', title: 'In Review', taskIds: [] },
        'column-4': { id: 'column-4', title: 'Done', taskIds: [] },
      },
      columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
    },
  },
];
