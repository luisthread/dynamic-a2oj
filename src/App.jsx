import React, { createContext, useState } from 'react';
import Ladders from './components/Ladders';
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
			<Ladders />
		</UserProvider>
	);
};

export default App;
