import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Routes
import Portfolio from './routes/Portfolio/Portfolio';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Presto from './routes/Portfolio Articles/Presto';
import Yevgeniy from './routes/Portfolio Articles/Yevgeniy';
import LASC from './routes/Portfolio Articles/LASC';
import JSArt from './routes/Portfolio Articles/JSArt';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/presto' component={Presto} />
					<Route exact path='/yevgeniy' component={Yevgeniy} />
					<Route exact path='/lascabling' component={LASC} />
					<Route exact path='/jsart' component={JSArt} />
					<Route path='/' component={Portfolio} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
