import React from 'react';
import Ladders from './components/Ladders';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import Home from './components/Home';
import UserProvider from './context/UserContext';
import Profile from './components/Profile';

const App = () => {
	return (
		<UserProvider>
			<CssBaseline />
			<Container>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/ladders">
						<Ladders />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
				</Switch>
			</Container>
		</UserProvider>
	);
};

export default App;
