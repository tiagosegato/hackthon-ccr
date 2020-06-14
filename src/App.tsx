import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const Home = lazy(() => import('./screens/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="d-flex justify-content-center" style={{marginTop: '50%'}}>Carregando...</div>}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;