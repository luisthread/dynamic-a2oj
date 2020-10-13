import React, { createContext, useState } from 'react';
import problems from '../data/problems.json';
export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [ user, setUser ] = useState(null);
	const [ solved, setSolved ] = useState([ ...problems ]);
	const [ currentTab, setCurrentTab ] = useState(0);

	const value = {
		user,
		setUser,
		solved,
		setSolved,
		currentTab,
		setCurrentTab
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
