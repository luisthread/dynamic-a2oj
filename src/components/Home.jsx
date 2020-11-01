import React from 'react';
import { Typography, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
	root: {
	  width: '95%',
	  maxWidth: "960px",
	  textAlign: "center",
	  padding: "2rem 0",
	  margin: "0 auto"
	},
	actions: {
		marginTop: "2rem"
	},
	button: {
		margin: "0 .5rem"
	}
  });

const Home = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant="h2" component="h1" gutterBottom>
				Dynamic A2OJ
			</Typography>
			<Typography variant="h5" component="h2" gutterBottom>
				A simple A2OJ ladder app for upsolving ploblems.
			</Typography>
			<Typography variant="h5" component="h2" gutterBottom>
				Check your Codeforces progress without any registration.
			</Typography>
			<div className={classes.actions}>
				<Button className={classes.button} variant="contained" startIcon={<GitHubIcon />} href="https://github.com/luisthread/dynamic-a2oj" target="_blank" rel="noopener">
					Github
				</Button>
				<Link to="/ladders">
				<Button className={classes.button} variant="contained" endIcon={<ArrowForwardIcon />} color="primary">Get Started</Button></Link>
			</div>
		</div>
	);
};

export default Home;
