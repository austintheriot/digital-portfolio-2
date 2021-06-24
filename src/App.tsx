/* global window */
import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Routes } from 'types';
import Loading from 'components/Loading/Loading';
import { analytics } from './config';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './routes/Portfolio/Portfolio';

function App() {
  const location = useLocation();

  useEffect(() => {
    analytics.logEvent('page_view', {
      page_path: location.pathname,
      page_location: window.location.href,
    });
  }, [location]);

  const LASC = lazy(() => import('routes/Articles/LASC'));
  const Email = lazy(() => import('routes/Articles/Email'));
  const Memorize = lazy(() => import('routes/Articles/Memorize'));
  const Presto = lazy(() => import('routes/Articles/Presto'));
  const JSArt = lazy(() => import('routes/Articles/JSArt'));
  const About = lazy(() => import('routes/About/About'));
  const Contact = lazy(() => import('routes/Contact/Contact'));
  const CanvasLab = lazy(() => import('routes/Articles/CanvasLab/CanvasLab'));

  return (
    <div className="App">
      <Header />
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route path={Routes.LASC} exact component={LASC} />
          <Route path={Routes.EMAIL} exact component={Email} />
          <Route path={Routes.MEMORIZE} exact component={Memorize} />
          <Route path={Routes.PRESTO} exact component={Presto} />
          <Route path={Routes.JSART} exact component={JSArt} />
          <Route path={Routes.ABOUT} exact component={About} />
          <Route path={Routes.CONTACT} exact component={Contact} />
          <Route path={Routes.CANVAS_LAB} exact component={CanvasLab} />
          <Route path={Routes.HOME} exact component={Portfolio} />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
