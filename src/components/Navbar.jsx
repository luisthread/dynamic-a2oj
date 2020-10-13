import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import UsernameForm from './UsernameForm';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	dynamic: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
			marginRight: theme.spacing(1)
		}
	},
	title: {
		flexGrow: 1
	}
}));

const Navbar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
						<MenuIcon />
					</IconButton>
					<Typography className={classes.dynamic} variant="h6" noWrap>
						Dynamic
					</Typography>
					<Typography className={classes.title} variant="h6" noWrap>
						A2OJ
					</Typography>
					<UsernameForm />
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
