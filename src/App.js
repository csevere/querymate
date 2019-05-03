import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AuthCard from './Components/AuthCard';

function App() {
	return (
		<div>
			<NavBar name = "Querymate" />
			<BrowserRouter>
				<Route path="/" exact component={AuthCard}/>
				<Route path="/home" exact component={Home}/>
			</BrowserRouter>
		</div>
	);
}

export default App;

//<code className="identifier"><pre>.create-template</pre></code>