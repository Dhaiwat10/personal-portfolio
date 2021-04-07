import * as React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon-16x16.png';

const INPUT =
  "> Hi!👋 I'm Dhaiwat. I am a 20-year-old freelance software engineer.\n\n> ⚡️ I am highly proficient with:\n- React\n- TypeScript\n- AWS\n- Solidity\n\n> ❤️ Live projects that I have worked on:\n% \n\n> 🔨 What I can build for you:\n- A full-stack web app\n- An ethereum smart contract\n- A Chrome extension\n- A Discord bot\n- And more!\n\n> Impressed? 👀 Let's talk! 👇🏼";

const Link = ({ label, href }) => (
  <a className="underline" href={href} target="_blank" rel="noreferrer">
    {label}
  </a>
);

const Projects = () => (
  <div style={{ marginBottom: '-18px' }} className="fadeIn">
    <span>- </span>
    <Link label="Project Lockdown" href="https://projectlockdown.world" />
    <br />

    <span>- </span>
    <Link label="Barça Universal" href="https://barcauniversal.com" />
    <br />

    <span>- </span>
    <Link label="Vof.Is" href="https://vofis.vercel.app" />
    <br />

    <span>- </span>
    <Link
      label="Clean Twitter"
      href="https://chrome.google.com/webstore/detail/clean-twitter/ibcjnfhpdjinbcmojnmpnokcgfljiebb?hl=en&authuser=0"
    />
    <br />

    <span style={{ borderRight: 'none' }}>- </span>
    <Link
      label="Zen Quotes"
      href="https://discord.com/oauth2/authorize?client_id=820275367083245578&permissions=0&scope=bot"
    />
  </div>
);

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

  React.useEffect(() => {
    scrollToBottom();
  }, [counter]);

  const scrollToBottom = () => {
    const lastChild = document.getElementById('container').lastChild;
    lastChild.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dhaiwat Pandya</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <div
        id="container"
        className="bg-accentedBlack font-mono text-white p-4 sm:p-4 md:p-16 lg:px-32 lg:py-16 xl:px-64"
        style={{
          width: '100%',
          minHeight: '100vh',
          fontSize: '18px',
          maxHeight: 'fit-content',
        }}
      >
        {INPUT.split('')
          .slice(0, counter)
          .map((item, index) => {
            if (item === '\n') {
              return (
                <React.Fragment key={index}>
                  <br />
                </React.Fragment>
              );
            } else if (item === '%') {
              return <Projects key={index} />;
            } else {
              return <span key={index}>{item}</span>;
            }
          })}
        {completed && (
          <div className="mt-4 gap-4 flex fadeIn">
            <Link label="Email" href="mailto:dhaiwatpandya@gmail.com" />
            <Link label="GitHub" href="https://github.com/Dhaiwat10" />
            <Link
              label="LinkedIn"
              href="https://linkedin.com/in/dhaiwat-pandya"
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default IndexPage;
