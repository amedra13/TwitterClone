import React from 'react';
import { NavLink } from 'react-router-dom';

const ListButton = ({ IconComponent, listItem, username, userId }) => {
	const profileName = '/' + username?.slice(1);
	const link = listItem === 'More' ? 'editAccount' : listItem.toLowerCase();
	let linkTo;
	if (username) {
		linkTo = `/${link}${profileName}`;
	} else {
		linkTo = `/${link}`;
	}

	return (
		<div className="listButton">
			<NavLink to={linkTo} activeClassName="active">
				<IconComponent style={{ color: 'inherit', margin: '0 10px' }} />
				{listItem}
			</NavLink>
		</div>
	);
};

export default ListButton;
