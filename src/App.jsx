import React, { createContext, useState } from 'react';
import Home from './components/Home';
import problems from './data/problems.json';
import CssBaseline from '@material-ui/core/CssBaseline';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [ user, setUser ] = useState(null);
	const [ solved, setSolved ] = useState([ ...problems ]);

	const value = {
		user,
		setUser,
		solved,
		setSolved
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const App = () => {
	return (
		<UserProvider>
			<CssBaseline />
			<Home />
		</UserProvider>
	);
};

export default App;
