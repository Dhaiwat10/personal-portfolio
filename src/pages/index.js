import * as React from 'react';

const INPUT =
  "Hi I'm Dhaiwat. George William Russell is a British racing driver currently competing in Formula One, contracted to Williams. He was the 2018 FIA Formula 2 Champion for ART and the 2017 GP3 Series Champion.";

// markup
const IndexPage = () => {
  const [counter, setCounter] = React.useState(1);
  const [completed, setCompleted] = React.useState(false);

  React.useEffect(() => {
    if (counter === INPUT.length - 1) {
      setCompleted(true);
    }

    if (!completed) {
      setTimeout(() => {
        setCounter((counter) => counter + 1);
      }, [50]);
    }
  }, [counter]);

  return (
    <main>
      <title>Home Page</title>
      <div
        className="bg-accentedBlack font-mono p-4 text-white"
        style={{ width: '100%', height: '100vh' }}
      >
        {INPUT.split('')
          .slice(0, counter)
          .map((item, index) => (
            <span key={index}>{item}</span>
          ))}
      </div>
    </main>
  );
};

export default IndexPage;
