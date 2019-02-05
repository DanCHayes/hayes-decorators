import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './Routes/App/App';
import Contact from './Routes/Contact/Contact';
import Gallery from './Routes/Gallery/Gallery';
import * as serviceWorker from './serviceWorker';

const Routing = (
		<Router>
			<div>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/contact'>Contact</Link>
					<Link to='/gallery'>Gallery</Link>
					<Route exact path="/" component={App} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/gallery" component={Gallery} />
				</nav>
			</div>
		</Router>

	)

ReactDOM.render(Routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
