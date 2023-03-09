import { gql, useMutation } from '@apollo/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Title from '@/components/Title';
import { useEffect } from 'react';
import ParseString from '@/graphql/ParseString';

export default function Home() {
  const [parseString, { data, loading, error }] = useMutation(ParseString);
  parseString({ variables: { unparsedString: 'Robert000Smith000123”' } });
  useEffect(() => {}, []);
  return (
    <main>
      <Title>Hello TypeScript!</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </main>
  );
}
