import React, { Fragment, useContext, useState } from 'react';
import {
	Link as MLink,
	makeStyles,
	List,
	ListItem,
	SwipeableDrawer,
	AppBar,
	Toolbar,
	Typography,
	ListItemIcon,
	ListItemText,
	Divider
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import UsernameForm from './UsernameForm';
import { UserContext } from '../context/UserContext';

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
	},
	list: {
		width: 250
	},
	link: {
		textDecoration: 'none',
		color: theme.palette.common.black
	}
}));

const ListItemLink = ({ children, icon, ...props }) => {
	const classes = useStyles();
	return (
		<Link {...props} className={classes.link}>
			<MLink underline="none" className={classes.link}>
				<ListItem button>
					<ListItemIcon>{icon}</ListItemIcon>
					<ListItemText primary={children} />
				</ListItem>
			</MLink>
		</Link>
	);
};

const Container = ({ children }) => {
	const classes = useStyles();
	const [ openDrawer, setOpenDrawer ] = useState(false);
	const { user } = useContext(UserContext);

	return (
		<Fragment>
			<div className={classes.root}>
				<AppBar position="static" color="primary">
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="open drawer"
							onClick={() => setOpenDrawer(!openDrawer)}
						>
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
				<SwipeableDrawer
					anchor="left"
					open={openDrawer}
					onClose={() => setOpenDrawer(false)}
					onOpen={() => setOpenDrawer(true)}
				>
					<List className={classes.list} onClick={() => setOpenDrawer(!openDrawer)}>
						<ListItemLink to="/" icon={<HomeIcon />}>
							Home
						</ListItemLink>
						<ListItemLink to="/ladders" icon={<InboxIcon />}>
							Ladders
						</ListItemLink>
						{user && (
							<Fragment>
								<Divider />
								<ListItemLink to="/profile" icon={<PersonIcon />}>
									Profile
								</ListItemLink>
							</Fragment>
						)}
					</List>
				</SwipeableDrawer>
			</div>
			{children}
		</Fragment>
	);
};

export default Container;
