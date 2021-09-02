import * as React from 'react';
import avi from '../images/avi.jpeg';
import { Counter, Meta } from '../components';

const Link = ({ label, href }) => (
  <a className={`underline`} href={href} target="_blank" rel="noreferrer">
    {label}
  </a>
);

const Projects = () => (
  <div>
    <span style={{ borderRight: 'none' }}>- </span>
    <Link
      label="react-link-preview"
      href="https://www.npmjs.com/package/@dhaiwat10/react-link-preview"
    />
    <br />

    <span>- </span>
    <Link label="Supabase" href="https://github.com/supabase/supabase" />
    <br />

    <span>- </span>
    <Link label="daily.dev" href="https://github.com/dailydotdev/apps" />
    <br />

    <span>- </span>
    <Link
      label="Project Lockdown"
      href="https://github.com/TheIOFoundation/ProjectLockdown/"
    />
    <br />

    <span>- </span>
    <Link
      label="react-agora"
      href="https://www.npmjs.com/package/react-agora"
    />
    <br />

    <span>- </span>
    <Link
      label="Ropsten Faucet"
      href="https://github.com/dhaiwat10/ropsten-faucet"
    />
    <br />

    <span>- </span>
    <Link label="Zen" href="https://github.com/Dhaiwat10/zenquotes" />
    <br />

    <span>- </span>
    <Link label="Barça Universal" href="https://barcauniversal.com" />
    <br />

    <span>- </span>
    <Link
      label="Clean Twitter"
      href="https://github.com/dhaiwat10/clean-twitter"
    />
  </div>
);

const IndexPage = () => {
  // Scroll to top on first render
  React.useEffect(() => {
    scrollToTop();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      <Meta />
      <div
        id="container"
        className="flex flex-col bg-accentedBlack font-mono text-white mx-auto p-4 sm:p-4 md:p-16 lg:px-32 lg:py-16 lg:flex-row xl:flex-row xl:px-64"
        style={{
          width: '90%',
          minHeight: '100vh',
          fontSize: '18px',
          maxHeight: 'fit-content',
        }}
      >
        <img
          className="rounded-full h-32 mx-auto mb-8 lg:order-2 xl:order-2 lg:h-40 lg:ml-auto lg:mr-0 xl:h-64 xl:ml-auto xl:mr-0"
          src={avi}
          alt="Avatar"
        />
        <div className="content lg:order-1 xl:order-1 flex flex-col gap-6">
          <p>&gt; Hi!<span role="img" aria-label="wave">👋</span> I'm Dhaiwat. I am a 20-year-old software engineer.</p>

          <p>&gt; <span role="img" aria-label="lightning">⚡️</span> I am highly proficient with:</p>
          <ul>
            <li>- React</li>
            <li>- TypeScript</li>
            <li>- Serverless</li>
          </ul>

          <p>
            &gt; <span role="img" aria-label="writing">✍</span> I write about building quality software at{' '}
            <a
              id="blog-link"
              href="https://blog.dhaiwatpandya.com"
              target="_blank"
              rel="noreferrer"
            >
              my blog
            </a>{' '}
            and{' '}
            <a
              id="blog-link"
              href="https://www.youtube.com/watch?v=rZZItYsH8qg"
              target="_blank"
              rel="noreferrer"
            >
              speak at conferences
            </a>
            .{' '}
          </p>

          <div className="flex gap-16">
            <Counter
              number={500000}
              text="users reached"
              color="#ff7092"
            />
            <Counter number={20000} text="readers reached" color="#ffde82" />
          </div>

          <p>&gt; <span role="img" aria-label="heart">❤️</span> Live projects that I have worked on:</p>
          <Projects />

          <p>&gt; <span role="img" aria-label="hammer">🔨</span> What I can build for you:</p>
          <ul>
            <li>- A full-stack web app</li>
            <li>- An ethereum smart contract</li>
            <li>- A Chrome extension</li>
            <li>- A Discord bot</li>
          </ul>

          <p>&gt; Impressed? <span role="img" aria-label="eyes">👀</span> Let's talk! 👇🏼</p>
          <div className="bottom-links mt-4 fadeIn">
            <Link label="Email" href="mailto:dhaiwatpandya@gmail.com" />
            <Link label="GitHub" href="https://github.com/Dhaiwat10" />
            <Link label="Blog" href="https://blog.dhaiwatpandya.com" />
            <Link
              label="LinkedIn"
              href="https://linkedin.com/in/dhaiwat-pandya"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
