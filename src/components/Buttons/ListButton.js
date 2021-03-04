import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	button: {
		fontStyle: 'italic',
		color: 'black',
		backgroundColor: 'white',
		'&:hover': {
			color: '#00b4d8',
			backgroundColor: 'rgba(243, 241, 241, 0.836)',
			boxShadow: 'none',
		},
		margin: '10px 0',
		boxShadow: 'none',
		width: '75%',
		borderRadius: '28px',
		transition: 'all 250ms ease-in-out',
		justifyContent: 'flex-start',
	},
}));

const ListButton = ({ IconComponent, listItem }) => {
	const classes = useStyles();

	return (
		<Button
			className={classes.button}
			variant="contained"
			color="primary"
			startIcon={<IconComponent />}
		>
			{listItem}
		</Button>
	);
};

export default ListButton;
