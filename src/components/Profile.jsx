import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	makeStyles,
	Typography
} from '@material-ui/core';
import React, { Fragment, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { handleChangeUser } from '../utils/ChangeUser';

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: '10rem',
		height: '10rem',
		marginBottom: theme.spacing(2)
	},
	card: {
		maxWidth: '100%',
		width: 300,
		textAlign: 'center',
		marginTop: theme.spacing(3)
	},
	title: {
		fontSize: 14
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	container: {
		display: 'flex',
		justifyContent: 'center'
	}
}));

const Profile = () => {
	const classes = useStyles();
	const { user, solved, setSolved, setUser } = useContext(UserContext);

	if (!user) {
		return (
			<Container className={classes.container}>
				<Box m={3}>
					<Typography variant="h5">Please enter your Codeforces handle</Typography>
				</Box>
			</Container>
		);
	}

	return (
		<Container className={classes.container}>
			<Card className={classes.card}>
				<Box m={3}>
					<CardContent className={classes.content}>
						<Avatar alt={user.handle} src={user.titlePhoto} className={classes.avatar} />
						{user.firstName && (
							<Fragment>
								<Typography className={classes.title} variant="textSecondary">
									Name
								</Typography>
								<Typography variant="h4" gutterBottom>
									{user.firstName} {user.lastName || ''}
								</Typography>
							</Fragment>
						)}
						<Typography className={classes.title} variant="textSecondary">
							Handle
						</Typography>
						<Typography variant="h5" gutterBottom>
							{user.handle}
						</Typography>
						<Typography className={classes.title} variant="textSecondary">
							Rank
						</Typography>
						<Typography variant="h5">{user.rank}</Typography>
						<Typography className={classes.title} variant="textSecondary">
							max({user.maxRank})
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							color="secondary"
							disableElevation
							onClick={() => handleChangeUser(solved, setSolved, setUser)}
						>
							Logout
						</Button>
					</CardActions>
				</Box>
			</Card>
		</Container>
	);
};

export default Profile;
