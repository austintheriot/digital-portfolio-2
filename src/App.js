import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Routes
import Portfolio from './routes/Portfolio/Portfolio';
import About from './routes/About/About';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Route exact path='/' component={Portfolio} />
				<Route exact path='/about' component={About} />

				<Footer />
			</div>
		</Router>
	);
}

export default App;
