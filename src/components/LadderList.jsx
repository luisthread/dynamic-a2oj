import { Container, Paper, Tab, Tabs } from '@material-ui/core';
import React, { Fragment, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Ladder from './Ladder';

const LadderList = () => {
	const { solved, currentTab, setCurrentTab } = useContext(UserContext);
	const handleValueChange = (event, newValue) => {
		setCurrentTab(newValue);
	};

	const TabPanel = ({ children, index }) => {
		return (
			<div role="tabpanel" hidden={currentTab !== index}>
				{currentTab === index && <Container maxWidth="sm">{children}</Container>}
			</div>
		);
	};

	return (
		<Fragment>
			<Paper square elevation={3}>
				<Tabs
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
					value={currentTab}
					onChange={handleValueChange}
				>
					<Tab label="1300" id={0} />
					<Tab label="1300 extra" id={1} />
					<Tab label="1400" id={2} disabled />
					<Tab label="1400 extra" id={3} disabled />
					<Tab label="1500" id={4} disabled />
					<Tab label="1500 extra" id={5} disabled />
				</Tabs>
			</Paper>
			<TabPanel index={0}>
				<Ladder solved={solved.filter(s => s[3] === "1300")} />
			</TabPanel>
			<TabPanel index={1}>
				<Ladder solved={solved.filter(s => s[3] === "1300e")} />
			</TabPanel>
			<TabPanel index={2}>
				<Ladder solved={solved.filter(s => s[3] === "1400")} />
			</TabPanel>
			<TabPanel index={3}>
				<Ladder solved={solved.filter(s => s[3] === "1400e")} />
			</TabPanel>
			<TabPanel index={4}>
				<Ladder solved={solved.filter(s => s[3] === "1500")} />
			</TabPanel>
			<TabPanel index={5}>
				<Ladder solved={solved.filter(s => s[3] === "1500e")} />
			</TabPanel>
			
		</Fragment>
	);
};

export default LadderList;
