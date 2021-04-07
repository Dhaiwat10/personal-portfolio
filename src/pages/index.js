import * as React from 'react';

const INPUT =
  "> Hi!👋 I'm Dhaiwat. I am a 20-year-old freelance software engineer.\n\n> ⚡️ I am highly proficient with:\n- React\n- TypeScript\n- AWS\n- Solidity\n\n> 🔨 What I can build for you:\n- A full-stack web app\n- An ethereum smart contract\n- A Chrome extension\n- A Discord bot\n\n> Impressed? Let's talk.";

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
      }, [25]);
    }
  }, [counter, completed]);

  return (
    <main>
      <title>Home Page</title>
      <div
        className="bg-accentedBlack font-mono text-white p-4 sm:p-4 md:p-16 lg:px-32 lg:py-16 xl:px-64"
        style={{ width: '100%', height: '100vh', fontSize: '18px' }}
      >
        {INPUT.split('')
          .slice(0, counter)
          .map((item, index) => {
            if (item === '\n') {
              return (
                <>
                  <br />
                </>
              );
            } else {
              return <span key={index}>{item}</span>;
            }
          })}
      </div>
    </main>
  );
};

export default IndexPage;
