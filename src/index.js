import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import App from './Containers/App';
import Contact from './Containers/Contact';
import Gallery from './Containers/Gallery';
import NotFound from './Containers/NotFound';
import './index.css';

const Routing = (
		<Router>
			<div>
				<nav>
					<div>
						<NavLink className='inactive' activeClassName="active" to='/'>Home</NavLink>
					</div>
					<div>
						<NavLink className='inactive' activeClassName="active" to='/contact'>Contact</NavLink>
					</div>
					<div>
						<NavLink className='inactive' activeClassName="active" to='/gallery'>Gallery</NavLink>
					</div>
				</nav>	
				<hr/>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/contact" component={Contact} />
					<Route path="/gallery" component={Gallery} />
					<Route component={NotFound}/>
				</Switch>
			</div>
		</Router>

	)

ReactDOM.render(Routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
