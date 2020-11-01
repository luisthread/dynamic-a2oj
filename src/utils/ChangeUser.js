export const handleChangeUser = (solved, setSolved, setUser, setUsername) => {
	const newSolved = [ ...solved ];
	newSolved.forEach((sol) => {
		sol[4] = false;
	});
	setSolved([ ...newSolved ]);
	setUser(null);
	setUsername('');
};
