import './index.css';

const Button = ({ text, handler, value }) => {
  return (
    <button onClick={handler} value={value}>
      {text}
    </button>
  );
};

export default Button;
