import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm'
import seedColors from '../helpers/seedColors';

import { generatePalette } from '../helpers/colorHelpers';

const App = () => {
  const [palettes, setPalettes] = useState(seedColors);

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette])
  }

  const findPalette = id => {
    return palettes.find((palette) => {
      return palette.id === id;
    })
  }

  return (
    <Switch>
      <Route exact path="/" render={(routeProps) => <PaletteList {...routeProps} palettes={palettes} />} />
      <Route exact path="/palette/new" render={(routeProps) => <NewPaletteForm savePalette={savePalette} palettes={palettes} {...routeProps} />} />
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />} />
      <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => <SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalette(findPalette(routeProps.match.params.paletteId))} {...routeProps} />} />
    </Switch>
  );
}

export default App;
