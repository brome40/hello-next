import React from 'react';
import { readFile, writeFile } from '../utils/file-utils';

const DATABASE_PATH = '/src/database.json';

let { hits } = JSON.parse(
  readFile(DATABASE_PATH)
);

hits += 1;

writeFile(
  DATABASE_PATH,
  JSON.stringify({ hits })
);

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number {hits}.</p>
    </main>
  );
}

export default Home;
