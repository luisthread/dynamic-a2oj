import React, { Fragment, useContext, useEffect, useState } from 'react';
import fetch from 'unfetch';
import useSWR from 'swr';
import { Avatar, Button, CircularProgress, InputBase, Snackbar, Tooltip } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import { UserContext } from '../context/UserContext';
import { hashSolvedProblems } from '../utils/Hash';
import { handleChangeUser } from '../utils/ChangeUser';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
	inputRoot: {
		color: 'inherit',
		marginLeft: 'auto'
	},
	inputInput: {
		padding: theme.spacing(1),
		transition: theme.transitions.create('width'),
		width: '20ch',
		[theme.breakpoints.up('sm')]: {
			width: '16ch',
			'&:focus': {
				width: '20ch'
			}
		},
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		borderRadius: theme.shape.borderRadius
	},
	btn: {
		marginRight: theme.spacing(1)
	}
}));

const fetchUrl = async (url) => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (error) {
		return {
			status: 'FAILED',
			result: error
		};
	}
};

function useFetchLastProblem(username) {
	const { data, error } = useSWR(`https://codeforces.com/api/user.status?handle=${username}&count=5`, fetchUrl);

	return {
		lastest: data,
		isError: error
	};
}

const UsernameForm = () => {
	const classes = useStyles();
	const [ username, setUsername ] = useState('');
	const { user, setUser, solved, setSolved } = useContext(UserContext);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ openSnackBar, setOpenSnackBar ] = useState(false);
	const { lastest, isError } = useFetchLastProblem(username);

	useEffect(
		() => {
			if (user && !isError && lastest && lastest.status === 'OK') {
				setSolved(hashSolvedProblems(solved, lastest));
			}
		},
		[ lastest ]
	);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		const userInfo = await fetchUrl(`https://codeforces.com/api/user.info?handles=${username}`);
		if (userInfo.status === 'OK') {
			setUser(userInfo.result[0]);
		} else {
			setOpenSnackBar(true);
			setIsLoading(false);
			return;
		}

		const solvedProblems = await fetchUrl(`https://codeforces.com/api/user.status?handle=${username}`);
		if (solvedProblems.status !== 'OK') {
			return;
		}

		setSolved(hashSolvedProblems(solved, solvedProblems));
		setUsername('');
		setIsLoading(false);
	};

	if (isLoading) {
		return <CircularProgress size={30} color="inherit" />;
	}

	return (
		<Fragment>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={openSnackBar}
				autoHideDuration={3000}
				onClose={() => setOpenSnackBar(false)}
			>
				<Alert onClose={() => setOpenSnackBar(false)} severity="error">
					User not found
				</Alert>
			</Snackbar>
			{user ? (
				<Fragment>
					<Tooltip arrow placement="left" title="Logout">
						<Button
							color="inherit"
							className={classes.btn}
							onClick={() => handleChangeUser(solved, setSolved, setUser)}
						>
							{user.handle}
						</Button>
					</Tooltip>
					<Avatar src={user.avatar} alt={user.handle} />
				</Fragment>
			) : (
				<form onSubmit={(event) => handleSubmit(event)}>
					<InputBase
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput
						}}
						placeholder="Codeforces handle"
						onChange={(event) => setUsername(event.target.value)}
						value={username}
					/>
				</form>
			)}
		</Fragment>
	);
};

export default UsernameForm;
