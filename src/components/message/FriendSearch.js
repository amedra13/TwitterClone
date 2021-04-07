import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const FriendSearch = ({ person, clickFunction }) => {
	const { _id } = person;
	return (
		<div className="friendSearch" onClick={() => clickFunction(_id)}>
			<Avatar style={{ marginLeft: '10px' }} />
			<p className="name">{person.name}</p>
			<p className="username">{person.userName}</p>
		</div>
	);
};

export default FriendSearch;
