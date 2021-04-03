import React from 'react';
import Avatar from '@material-ui/core/Avatar';
const SearchResult = ({ name, username }) => {
	return (
		<div className="searchResult">
			<Avatar
				style={{ width: 40, height: 40, margin: '10px' }}
				variant="rounded"
			>
				AM
			</Avatar>
			<p>
				<span>{name}</span> {username}
			</p>
		</div>
	);
};

export default SearchResult;
