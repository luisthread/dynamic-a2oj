export const handleChangeUser = (solved, setSolved, setUser) => {
	const newSolved = [ ...solved ];
	newSolved.forEach((sol) => {
		sol[4] = false;
	});
	setSolved([ ...newSolved ]);
	setUser(null);
};
