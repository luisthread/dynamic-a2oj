import {
	Link,
	makeStyles,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(4),
		overflow: 'hidden'
	},
	ac: {
		backgroundColor: '#00e676',
		color: theme.palette.common.black
	}
}));

const Ladder = ({ solved }) => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper} className={classes.paper}>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell>Name</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{solved.map((s, id) => (
						<TableRow key={id} className={s[4] ? classes.ac : ''}>
							<TableCell>{id + 1}</TableCell>
							<TableCell>
								<Link
									target="_blank"
									rel="noopener"
									className={s[4] ? classes.ac : ''}
									color="secondary"
									href={`https://codeforces.com/problemset/problem/${s[1]}/${s[2]}`}
								>
									{s[0]}
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Ladder;
