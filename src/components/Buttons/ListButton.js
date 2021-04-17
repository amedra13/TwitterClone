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
				<IconComponent
					style={{
						color: 'inherit',
						// marginRight: '10',
					}}
					fontSize="large"
				/>
				<p style={{ margin: '0' }}>{listItem}</p>
			</NavLink>
		</div>
	);
};

export default ListButton;
