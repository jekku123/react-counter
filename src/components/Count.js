import './Count.css';

const Count = ({ count, error }) => {
  return (
    <div
      className={
        (error && `count broken`) ||
        (count === 0 && `count`) ||
        (count % 2 === 0 ? 'count even' : 'count odd')
      }
    >
      {count}
    </div>
  );
};

export default Count;
