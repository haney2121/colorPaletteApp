import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm'
import FourOFour from './FourOFour';
import seedColors from '../helpers/seedColors';
import { generatePalette } from '../helpers/colorHelpers';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Page from '../layout/Page';

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
    <Route render={({ location }) => (
      <TransitionGroup>
        <CSSTransition classNames="page" timeout={500} key={location.key}>
          <Switch location={location}>
            <Route exact path="/" render={(routeProps) => <Page><PaletteList removePalette={removePalette} {...routeProps} palettes={palettes} /> </Page>} />
            <Route exact path="/palette/new" render={(routeProps) => <Page><NewPaletteForm savePalette={savePalette} palettes={palettes} {...routeProps} /></Page>} />
            <Route exact path="/palette/:id" render={(routeProps) => <Page><Palette palette={generatePalette(findPalette(routeProps.match.params.id))} /></Page>} />
            <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => <Page><SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalette(findPalette(routeProps.match.params.paletteId))} {...routeProps} /></Page>} />
            <Route render={() => <FourOFour />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  );
}

export default App;
