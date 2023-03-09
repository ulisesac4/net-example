import { gql, useMutation } from '@apollo/client';

import Title from '@/components/Title';

import ParseString from '@/graphql/ParseString';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

export default function Home() {
  const [parseString, { data, loading, error }] = useMutation(ParseString);
  parseString({ variables: { unparsedString: 'Robert000Smith000123”' } });

  return (
    <>
      <header>
        <div className="top-bar">name</div>
      </header>

      <main className="main">
        <div>aergh</div>
      </main>
    </>
  );
}
