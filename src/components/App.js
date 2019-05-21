import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm'
import seedColors from '../helpers/seedColors';

import { generatePalette } from '../helpers/colorHelpers';

const App = () => {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  }

  useEffect(() => {
    const syncLocalStorage = () => {
      window.localStorage.setItem('palettes', JSON.stringify(palettes));
    }
    syncLocalStorage();
  }, [palettes])

  const findPalette = id => {
    return palettes.find((palette) => {
      return palette.id === id;
    })
  }

  const removePalette = async id => {
    let palId = [...palettes];
    let newPalette = await palId.filter(palette => palette.id !== id);
    setPalettes(newPalette);
  }

  return (
    <Switch>
      <Route exact path="/" render={(routeProps) => <PaletteList removePalette={removePalette} {...routeProps} palettes={palettes} />} />
      <Route exact path="/palette/new" render={(routeProps) => <NewPaletteForm savePalette={savePalette} palettes={palettes} {...routeProps} />} />
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />} />
      <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => <SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalette(findPalette(routeProps.match.params.paletteId))} {...routeProps} />} />
    </Switch>
  );
}

export default App;
