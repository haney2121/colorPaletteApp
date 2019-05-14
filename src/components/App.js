import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
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
      <Route exact path="/" render={() => <h1>Palette List goes here</h1>} />
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />} />
    </Switch>
  );
}

export default App;
