import * as React from 'react';
import commaNumber from 'comma-number';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon-16x16.png';
import thumb from '../images/thumb.png';

const Counter = ({ text, number,  color }) => {

  return (
    <div className="flex flex-col ml-0">
      <span className="font-bold text-2xl" style={{ color }}>
        {commaNumber(number)}+
      </span>
      <span>{text}</span>
    </div>
  );
};

const Meta = () => {
  const description =
    'I am Dhaiwat - a 20-year-old software engineer skilled with Blockchain, React, TypeScript and more!';

  return (
    <Helmet>
      <meta property="og:image" content={`https://dhaiwat.com${thumb}`} />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dhaiwat10" />
      <meta name="twitter:creator" content="@dhaiwat10" />
      <meta name="twitter:title" content="Dhaiwat Pandya - Software Engineer" />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https://dhaiwat.com${thumb}`}
      />

      <title>Dhaiwat Pandya</title>
      <link rel="icon" href={favicon} />
    </Helmet>
  );
};

export { Counter, Meta };
