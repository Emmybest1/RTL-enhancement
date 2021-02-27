import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/home.component';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
