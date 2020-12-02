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
/* import Sharlat from './routes/Portfolio Articles/Sharlat'; */
import LASC from './routes/Portfolio Articles/LASC';
import JSArt from './routes/Portfolio Articles/JSArt';
import Email from './routes/Portfolio Articles/Email';
import Memorize from './routes/Portfolio Articles/Memorize';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Switch>
					<Route path='/lascabling' component={LASC} />
					{/* <Route path='/sharlat' component={Sharlat} /> */}
					<Route path='/email-api' component={Email} />
					<Route path='/memorize' component={Memorize} />
					<Route path='/presto' component={Presto} />
					<Route path='/jsart' component={JSArt} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact} />
					<Route path='/' component={Portfolio} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
