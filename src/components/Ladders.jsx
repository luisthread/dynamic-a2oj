import React, { Fragment } from 'react';
import { Box, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LadderList from './LadderList';

const Ladders = () => {
	return (
		<Fragment>
			<LadderList />
			<Box m={'1rem'}>
				<Button startIcon={<GitHubIcon />} href="https://github.com/luisthread" target="_blank" rel="noopener">
					Luisthread
				</Button>
			</Box>
		</Fragment>
	);
};

export default Ladders;
