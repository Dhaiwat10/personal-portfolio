import * as React from 'react';
import commaNumber from 'comma-number'

const Counter = ({ text, number, speed = 500, color }) => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      if (counter !== number) {
        setCounter((counter) => counter + speed);
      }
    }, 50);
  }, [counter, number, speed]);

  return (
    <div className='flex flex-col ml-0'>
      <span
        className='font-bold text-2xl'
        style={{ color }}
      >
        {commaNumber(counter)}+
      </span>
      <span>{text}</span>
    </div>
  );
};

export { Counter };
