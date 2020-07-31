import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Routes
import Portfolio from './routes/Portfolio/Portfolio';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Route exact path='/' component={Portfolio} />

				<Footer />
			</div>
		</Router>
	);
}

export default App;
