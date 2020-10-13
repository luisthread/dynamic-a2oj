import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import React, { Fragment } from 'react';
import LadderList from './LadderList';
import Navbar from './Navbar';

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<LadderList />
			<Button startIcon={<GitHubIcon />} href="https://github.com/luisthread" target="_blank" rel="noopener">
				Luisthread
			</Button>
		</Fragment>
	);
};

export default Home;
