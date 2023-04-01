import Button from './Button';
import { buttonData } from '../context/buttonData';
import './Buttons.css';

const Buttons = ({ handler }) => {
  return (
    <div className='buttons'>
      {buttonData.map((button) => (
        <Button
          key={button.text}
          handler={handler}
          text={button.text}
          value={button.value}
        />
      ))}
    </div>
  );
};

export default Buttons;
