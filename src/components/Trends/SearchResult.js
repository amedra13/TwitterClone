import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
const SearchResult = ({ person }) => {
	return (
		<div className="searchResult">
			{person === null ? (
				<div className="search__empty">
					<h4>NO USERS FOUND</h4>
				</div>
			) : (
				<Link
					className="search__link"
					to={`/profile/${person?.userName.slice(1)}`}
				>
					<Avatar
						style={{ width: 40, height: 40, margin: '10px' }}
						variant="rounded"
					>
						AM
					</Avatar>
					<p>
						<span>{person.name}</span> {person.userName}
					</p>
				</Link>
			)}
		</div>
	);
};

export default SearchResult;
