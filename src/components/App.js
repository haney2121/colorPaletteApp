import React from 'react';

import Palette from './Palette';
import seedColors from '../helpers/seedColors';

import { generatePalette } from '../helpers/colorHelpers';

const App = () => {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
