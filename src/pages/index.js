import * as React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon-16x16.png';
import cursor from '../images/cursor.gif';

const Link = ({ label, href, margin = false }) => (
  <a
    className={`underline ${margin && 'mr-12'}`}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {label}
  </a>
);

const Projects = () => (
  <div style={{ marginBottom: '-18px' }} className="fadeIn">
    <span>- </span>
    <Link
      label="Project Lockdown"
      href="https://github.com/TheIOFoundation/ProjectLockdown/"
    />
    <br />

    <span>- </span>
    <Link label="Barça Universal" href="https://barcauniversal.com" />
    <br />

    <span>- </span>
    <Link
      label="Ropsten Faucet"
      href="https://ropsten-faucet.dhaiwatpandya.com"
    />
    <br />

    <span>- </span>
    <Link label="Vof.Is" href="https://vofis.vercel.app" />
    <br />

    <span style={{ borderRight: 'none' }}>- </span>
    <Link label="Zen Quotes" href="https://github.com/Dhaiwat10/zenquotes" />
    <br />

    <span>- </span>
    <Link
      label="Clean Twitter"
      href="https://github.com/dhaiwat10/clean-twitter"
    />
  </div>
);

const INPUT =
  "> Hi!👋 I'm Dhaiwat. I am a 20-year-old freelance software engineer.\n\n> ⚡️ I am highly proficient with:\n- React\n- TypeScript\n- AWS\n- Solidity\n\n> ❤️ Live projects that I have worked on:\n% \n\n> 🔨 What I can build for you:\n- A full-stack web app\n- An ethereum smart contract\n- A Chrome extension\n- A Discord bot\n- And more!\n\n> Impressed? 👀 Let's talk! 👇🏼";

// markup
const IndexPage = () => {
  const [counter, setCounter] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);

  React.useEffect(() => {
    if (counter === INPUT.length) {
      setCompleted(true);
    }

    if (!completed) {
      setTimeout(() => {
        setCounter((counter) => counter + 1);
      }, [25]);
    }
  }, [counter, completed]);

  React.useEffect(() => {
    if (completed) {
      scrollToBottom();
    }
  }, [completed]);

  // Scroll to top on first render
  React.useEffect(() => {
    scrollToTop();
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="I am Dhaiwat - a 20-year-old software engineer skilled with Blockchain, React, TypeScript and more!"
        />
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
        {INPUT.slice(0, counter)
          .split('')
          .map((item, index) => {
            if (item === '\n') {
              return <br key={index} />;
            } else if (item === '%') {
              return <Projects key={index} />;
            } else {
              return item;
            }
          })}
        <img alt="Cursor" src={cursor} id="cursor" />
        {completed && (
          <div className="mt-4 fadeIn">
            <Link
              margin={true}
              label="Email"
              href="mailto:dhaiwatpandya@gmail.com"
            />
            <Link
              margin={true}
              label="GitHub"
              href="https://github.com/Dhaiwat10"
            />
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
