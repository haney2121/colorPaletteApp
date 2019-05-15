import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from '../helpers/seedColors';

import { generatePalette } from '../helpers/colorHelpers';

const App = () => {

  const findPalette = id => {
    return seedColors.find((palette) => {
      return palette.id === id;
    })
  }

  return (
    <Switch>
      <Route exact path="/" render={(routeProps) => <PaletteList {...routeProps} palettes={seedColors} />} />
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />} />
      <Route exact path="/palette/:paletteId/:colorId" render={() => <h1>Single Color Page</h1>} />
    </Switch>
  );
}

export default App;
