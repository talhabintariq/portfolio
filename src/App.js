import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Test from './components/MoviesSearch/test';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/test" component={Test} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
