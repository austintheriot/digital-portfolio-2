import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { analytics } from './config';

//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Routes
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
				<Route path='/lascabling' component={LASC} />
				<Route path="/email-api" component={Email} />
				<Route path="/memorize" component={Memorize} />
				<Route path="/presto" component={Presto} />
				<Route path="/jsart" component={JSArt} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/canvas-lab" component={CanvasLab} />
				<Route path="/" component={Portfolio} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
