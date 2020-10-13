import { Container, Paper, Tab, Tabs } from '@material-ui/core';
import React, { Fragment, useContext, useState } from 'react';
import { UserContext } from '../App';
import Ladder from './Ladder';

const TabPanel = ({ children, value, index }) => {
	return (
		<div role="tabpanel" hidden={value !== index}>
			{value === index && <Container maxWidth="sm">{children}</Container>}
		</div>
	);
};

const LadderList = () => {
	const { solved } = useContext(UserContext);
	const [ value, setValue ] = useState(0);
	const handleValueChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Fragment>
			<Paper square elevation={3}>
				<Tabs
					indicatorColor="secondary"
					textColor="secondary"
					variant="scrollable"
					scrollButtons="auto"
					value={value}
					onChange={handleValueChange}
				>
					<Tab label="1300" id={0} />
					<Tab label="1300 extra" id={1} />
					<Tab label="1400" id={2} />
					<Tab label="1400 extra" id={3} />
					<Tab label="1500" id={4} />
					<Tab label="1500 extra" id={5} />
					<Tab label="1600" id={6} />
					<Tab label="1600 extra" id={7} />
					<Tab label="1700" id={8} />
					<Tab label="1700 extra" id={9} />
					<Tab label="1800" id={10} />
					<Tab label="1800 extra" id={11} />
					<Tab label="1900" id={12} />
					<Tab label="1900 extra" id={13} />
					<Tab label="2000" id={14} />
					<Tab label="2000 extra" id={15} />
					<Tab label="2100" id={16} />
					<Tab label="2100 extra" id={17} />
					<Tab label="2200" id={18} />
					<Tab label="2200 extra" id={19} />
				</Tabs>
			</Paper>
			<TabPanel value={value} index={0}>
				<Ladder solved={solved} level="1300" />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Ladder solved={solved} level="1300e" />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Ladder solved={solved} level="1400" />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Ladder solved={solved} level="1400e" />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<Ladder solved={solved} level="1500" />
			</TabPanel>
			<TabPanel value={value} index={5}>
				<Ladder solved={solved} level="1500e" />
			</TabPanel>
			<TabPanel value={value} index={6}>
				<Ladder solved={solved} level="1600" />
			</TabPanel>
			<TabPanel value={value} index={7}>
				<Ladder solved={solved} level="1600e" />
			</TabPanel>
			<TabPanel value={value} index={8}>
				<Ladder solved={solved} level="1700" />
			</TabPanel>
			<TabPanel value={value} index={9}>
				<Ladder solved={solved} level="1700e" />
			</TabPanel>
			<TabPanel value={value} index={10}>
				<Ladder solved={solved} level="1800" />
			</TabPanel>
			<TabPanel value={value} index={11}>
				<Ladder solved={solved} level="1800e" />
			</TabPanel>
			<TabPanel value={value} index={12}>
				<Ladder solved={solved} level="1900" />
			</TabPanel>
			<TabPanel value={value} index={13}>
				<Ladder solved={solved} level="1900e" />
			</TabPanel>
			<TabPanel value={value} index={14}>
				<Ladder solved={solved} level="2000" />
			</TabPanel>
			<TabPanel value={value} index={15}>
				<Ladder solved={solved} level="2000e" />
			</TabPanel>
			<TabPanel value={value} index={16}>
				<Ladder solved={solved} level="2100" />
			</TabPanel>
			<TabPanel value={value} index={17}>
				<Ladder solved={solved} level="2100e" />
			</TabPanel>
			<TabPanel value={value} index={18}>
				<Ladder solved={solved} level="2200" />
			</TabPanel>
			<TabPanel value={value} index={19}>
				<Ladder solved={solved} level="2200e" />
			</TabPanel>
		</Fragment>
	);
};

export default LadderList;
