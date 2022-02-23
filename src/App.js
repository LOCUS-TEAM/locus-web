import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutError from './layouts/LayoutError';

// Views 
import Home from './views/Home';
import Invite from './views/Invite';
import Discord from './views/Discord';
import NotFound from './views/NotFound';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute path="/main" component={Home} layout={LayoutDefault} />
          <AppRoute path="/invite/:service" component={Invite} layout={LayoutDefault} />
          <AppRoute path="/discord" component={Discord} layout={LayoutDefault} />
          <AppRoute path="/" component={NotFound} layout={LayoutError} />
        </Switch>
      )} />
  );
}

export default App;
