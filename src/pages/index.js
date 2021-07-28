import * as React from 'react';
import cursor from '../images/cursor.gif';
import avi from '../images/avi.jpeg';
import { Counter, Meta } from '../components';

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
    <Link label='Supabase' href='https://github.com/supabase/supabase' />
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

    <span>- </span>
    <Link
      label='Clean Twitter'
      href='https://github.com/dhaiwat10/clean-twitter'
    />
  </div>
);

const Blog = () => {
  let msg = `> ✍ I write about building quality software at `;
  let msg2 = ` and `;

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
            href='https://www.youtube.com/watch?v=rZZItYsH8qg'
            target='_blank'
            rel='noreferrer'
          >
            speak at conferences
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
        <Counter number={16000} text='readers reached' color='#ffde82' />
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
      <Meta />
      <div
        id='container'
        className='flex flex-col bg-accentedBlack font-mono text-white mx-auto p-4 sm:p-4 md:p-16 lg:px-32 lg:py-16 lg:flex-row xl:flex-row xl:px-64'
        style={{
          width: 'fit-content',
          minHeight: '100vh',
          fontSize: '18px',
          maxHeight: 'fit-content',
        }}
      >
        <img
          className='fadeIn rounded-full h-32 mx-auto mb-8 lg:order-2 xl:order-2 lg:h-40 lg:ml-auto lg:mr-0 xl:h-64 xl:ml-auto xl:mr-0'
          src={avi}
          alt='Avatar'
        />
        <div className='content lg:order-1 xl:order-1'>
          {INPUT.slice(0, counter)
            .split('')
            .map((item, index) => {
              if (item === '\n') {
                return <br key={index} />;
              } else if (item === '%') {
                return <Projects key={index} />;
              } else if (item === '~') {
                return <Blog key={index} />;
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
      </div>
    </main>
  );
};

export default IndexPage;
