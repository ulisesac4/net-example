import { gql, useMutation } from '@apollo/client';

import ParseString from '@/graphql/ParseString';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import { useState } from 'react';
import ParseStringDialog from '@/components/ParsedStringDialog';
import Background from '@/components/Background';

export default function Home() {
  const [unparsedString, setUnparsedString] = useState('');
  const [parseString, { data, loading, error }] = useMutation(ParseString);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Background />
      <header>
        <div className="top-bar">
          <Button
            variant="outlined"
            startIcon={<MenuIcon />}
            style={{ color: 'white', borderColor: 'white' }}
          >
            Menu
          </Button>
        </div>
      </header>

      <main className="main">
        <div style={{ textAlign: 'center' }}>
          <h1>Challenge about decoding a string</h1>
          <h2>with the following form: "Robert000Smith000123".</h2>
        </div>
        <div className="main-content">
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            style={{ height: '48px' }}
            value={unparsedString}
            onChange={(event) => {
              setUnparsedString(event.target.value);
            }}
          />
          <Button
            variant="contained"
            color="success"
            style={{ height: '55px' }}
            onClick={() => {
              parseString({ variables: { unparsedString } });
              setIsDialogOpen(true);
            }}
          >
            Decode
          </Button>
        </div>
      </main>
      <div className="overlay" data-loading={loading}></div>
      <ParseStringDialog
        result={data?.parseString?.result || 'n/a'}
        loading={loading}
        handleClose={() => {
          setIsDialogOpen(false);
        }}
        open={isDialogOpen}
      />
      <footer>
        <div>Ulises Avila 2023</div>
      </footer>
    </>
  );
}

export function Head() {
  return <title>DigitalHype Test</title>;
}
