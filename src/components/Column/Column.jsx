const Column = ({ column, tasks }) => {
  return (
    <div className='box'>
      <h2>{column.title}</h2>
      <div className='section'>
        {tasks.map((task, index) => (
          <div
            className='card'
            key={`card${index}`}
          >
            <h1>{task.ttitle}</h1>
            <p>{task.tdescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Column;
