import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import MoviesSearch from './components/MoviesSearch/MoviesSearch';
import ImageSearch from './components/ImageSearch/ImageSearch';
import WildfireTracker from './components/WildfireTracker/WildfireTracker';
import YoutubeConverter from './components/YoutubeConverter/Converter';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/WildfireTracker" component={WildfireTracker} />
          <Route path="/MoviesSearch" component={MoviesSearch} />
          <Route path="/ImageSearch" component={ImageSearch} />
          <Route path="/YoutubeConverter" component={YoutubeConverter} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
