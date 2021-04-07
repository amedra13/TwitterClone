import React from 'react';

const FriendSearch = ({ person }) => {
	return (
		<div className="friendSearch">
			<p>{person.name}</p>
			<p>{person.userName}</p>
		</div>
	);
};

export default FriendSearch;
