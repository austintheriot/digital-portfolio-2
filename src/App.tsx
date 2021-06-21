/* global window */
import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Routes } from 'types';
import { analytics } from './config';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './routes/Portfolio/Portfolio';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Presto from './routes/Articles/Presto';
import LASC from './routes/Articles/LASC';
import JSArt from './routes/Articles/JSArt';
import Email from './routes/Articles/Email';
import Memorize from './routes/Articles/Memorize';
import { CanvasLab } from './routes/Articles/CanvasLab/CanvasLab';

function App() {
  const location = useLocation();

  useEffect(() => {
    analytics.logEvent('page_view', {
      page_path: location.pathname,
      page_location: window.location.href,
    });
  }, [location]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={Routes.LASC} component={LASC} />
        <Route path={Routes.EMAIL} component={Email} />
        <Route path={Routes.MEMORIZE} component={Memorize} />
        <Route path={Routes.PRESTO} component={Presto} />
        <Route path={Routes.JSART} component={JSArt} />
        <Route path={Routes.ABOUT} component={About} />
        <Route path={Routes.CONTACT} component={Contact} />
        <Route path={Routes.CANVAS_LAB} component={CanvasLab} />
        <Route path={Routes.HOME} component={Portfolio} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
