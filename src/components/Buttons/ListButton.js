import React from 'react';
import { NavLink } from 'react-router-dom';

const ListButton = ({ IconComponent, listItem, username, userId }) => {
	const id = userId ? userId : username?.slice(1);
	const link = listItem === 'More' ? 'editAccount' : listItem.toLowerCase();

	return (
		<div className="listButton">
			<NavLink to={`/${link}/${id}`} activeClassName="active">
				<IconComponent style={{ color: 'inherit', margin: '0 10px' }} />
				{listItem}
			</NavLink>
		</div>
	);
};

export default ListButton;
