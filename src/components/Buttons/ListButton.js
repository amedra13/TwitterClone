import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	button: {
		fontFamily: "'Raleway', sans-serif",
		color: 'rgba(26, 26, 26, 0.795)',
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

const ListButton = ({ IconComponent, listItem, username, userId }) => {
	const classes = useStyles();

	const id = userId ? userId : username?.slice(1);

	return (
		<div className="listButton">
			<NavLink to={`/${listItem.toLowerCase()}/${id}`} activeClassName="active">
				<IconComponent style={{ color: 'inherit', margin: '0 10px' }} />
				{listItem}
			</NavLink>
		</div>
	);
};

export default ListButton;
