import React from 'react';

import Palette from './Palette';
import seedColors from '../helpers/seedColors';

import { generatePalette } from '../helpers/colorHelpers';

const App = () => {
  console.log(generatePalette(seedColors[4]))
  return (
    <div>
      <Palette {...seedColors[1]} />
    </div>
  );
}

export default App;
