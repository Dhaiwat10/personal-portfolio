import * as React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon-16x16.png';
import thumb from '../images/thumb.png';
import cursor from '../images/cursor.gif';
import { Counter } from '../components';

const Link = ({ label, href }) => (
  <a className={`underline`} href={href} target='_blank' rel='noreferrer'>
    {label}
  </a>
);

const Projects = () => (
  <div style={{ marginBottom: '-18px' }} className='fadeIn'>
    <span style={{ borderRight: 'none' }}>- </span>
    <Link
      label='react-link-preview'
      href='https://www.npmjs.com/package/@dhaiwat10/react-link-preview'
    />
    <br />

    <span>- </span>
    <Link label='daily.dev' href='https://github.com/dailydotdev/apps' />
    <br />

    <span>- </span>
    <Link
      label='Project Lockdown'
      href='https://github.com/TheIOFoundation/ProjectLockdown/'
    />
    <br />

    <span>- </span>
    <Link
      label='Ropsten Faucet'
      href='https://github.com/dhaiwat10/ropsten-faucet'
    />
    <br />

    <span>- </span>
    <Link label='Zen' href='https://github.com/Dhaiwat10/zenquotes' />
    <br />

    <span>- </span>
    <Link label='Barça Universal' href='https://barcauniversal.com' />
    <br />

    {/* <span>- </span>
    <Link label='Vof.Is' href='https://vofis.vercel.app' />
    <br /> */}

    <span>- </span>
    <Link
      label='Clean Twitter'
      href='https://github.com/dhaiwat10/clean-twitter'
    />
  </div>
);

const Blog = () => {
  let msg = `> ✍ I write about building quality software at `;
  let msg2 = ` and run a weekly `;

  return (
    <>
      <div>
        <span className='fadeIn'>
          {msg}{' '}
          <a
            id='blog-link'
            href='https://blog.dhaiwatpandya.com'
            target='_blank'
            rel='noreferrer'
          >
            my blog
          </a>
          <br />
          {msg2}
          <a
            id='blog-link'
            href='https://buttondown.email/dhaiwat'
            target='_blank'
            rel='noreferrer'
          >
            newsletter
          </a>
          .
        </span>
      </div>
      <br />
      <div className='flex gap-16 fadeIn'>
        <Counter
          number={200000}
          text='users reached'
          speed={5000}
          color='#ff7092'
        />
        <Counter number={12000} text='readers reached' color='#ffde82' />
      </div>
    </>
  );
};

const INPUT =
  "> Hi!👋 I'm Dhaiwat. I am a 20-year-old software engineer.\n\n> ⚡️ I am highly proficient with:\n- React\n- TypeScript\n- Serverless\n- Solidity\n\n~\n > ❤️ Live projects that I have worked on:\n% \n\n> 🔨 What I can build for you:\n- A full-stack web app\n- An ethereum smart contract\n- A Chrome extension\n- A Discord bot\n- And more!\n\n> Impressed? 👀 Let's talk! 👇🏼";

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
        <meta property='og:image' content={thumb} />
        <meta charSet='utf-8' />
        <meta
          name='description'
          content='I am Dhaiwat - a 20-year-old software engineer skilled with Blockchain, React, TypeScript and more!'
        />
        <title>Dhaiwat Pandya</title>
        <link rel='icon' href={favicon} />
      </Helmet>
      <div
        id='container'
        className='bg-accentedBlack font-mono text-white p-4 sm:p-4 md:p-16 lg:px-32 lg:py-16 xl:px-64 mx-auto'
        style={{
          width: 'fit-content',
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
            } else if (item === '~') {
              return <Blog />;
            } else {
              return item;
            }
          })}
        <img alt='Cursor' src={cursor} id='cursor' />
        {completed && (
          <div className='bottom-links mt-4 fadeIn'>
            <Link label='Email' href='mailto:dhaiwatpandya@gmail.com' />
            <Link label='GitHub' href='https://github.com/Dhaiwat10' />
            <Link label='Blog' href='https://blog.dhaiwatpandya.com' />
            <Link
              label='LinkedIn'
              href='https://linkedin.com/in/dhaiwat-pandya'
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default IndexPage;
