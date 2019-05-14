import React from 'react';

import Palette from './Palette';
import seedColors from '../helpers/seedColors';

const App = () => {
  return (
    <div>
      <Palette {...seedColors[1]} />
    </div>
  );
}

export default App;
