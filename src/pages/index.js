import * as React from 'react';

const INPUT =
  "> Hi!👋 I'm Dhaiwat. I am a 20-year-old freelance software engineer.\n\n> ⚡️ I am highly proficient with:\n- React\n- TypeScript\n- AWS\n- Solidity\n\n> ❤️ Live projects that I have worked on:\n% \n\n> 🔨 What I can build for you:\n- A full-stack web app\n- An ethereum smart contract\n- A Chrome extension\n- A Discord bot\n\n> Impressed? Let's talk! 👇🏼";

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
        style={{ width: '100%', minHeight: '100vh', fontSize: '18px', maxHeight: 'fit-content' }}
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
            } else if (item === '%') {
              return (
                <div style={{ marginBottom: '-18px' }} className="fadeIn">
                  <span>- </span>
                  <a
                    className="underline"
                    href="https://projectlockdown.world/"
                  >
                    Project Lockdown
                  </a>
                  <br />

                  <span>- </span>
                  <a className="underline" href="https://barcauniversal.com">
                    Barça Universal
                  </a>
                  <br />

                  <span>- </span>
                  <a className="underline" href="https://vofis.vercel.app">
                    Vof.Is
                  </a>
                  <br />

                  <span>- </span>
                  <a
                    className="underline"
                    href="https://chrome.google.com/webstore/detail/clean-twitter/ibcjnfhpdjinbcmojnmpnokcgfljiebb?hl=en&authuser=0"
                  >
                    Clean Twitter
                  </a>
                  <br />

                  <span style={{ borderRight: 'none' }}>- </span>
                  <a
                    className="underline"
                    href="https://discord.com/oauth2/authorize?client_id=820275367083245578&permissions=0&scope=bot"
                  >
                    Zen Quotes
                  </a>
                </div>
              );
            } else {
              return <span key={index}>{item}</span>;
            }
          })}
        {completed && (
          <div className="mt-4 gap-4 flex fadeIn">
            <a className="underline" href="mailto:dhaiwatpandya@gmail.com">
              Email
            </a>
            <a className="underline" href="https://github.com/Dhaiwat10">
              GitHub
            </a>
            <a
              className="underline"
              href="https://linkedin.com/in/dhaiwat-pandya"
            >
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </main>
  );
};

export default IndexPage;
