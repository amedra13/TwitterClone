import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const ListItem = ({ name, username, aboutMe, delay, animation }) => {
	return (
		<div
			className={`listItem ${animation}`}
			style={{ animationDelay: `${delay * 75}ms` }}
		>
			<Avatar style={{ margin: '0 10px' }} />
			<div className="listItem__userInfo">
				<div className="listItem__name">
					<h4>{name}</h4>
					<Link className="link" to={`/profile/${username.slice(1)}`}>
						{username}
					</Link>
				</div>
				<div>
					<p>{aboutMe}</p>
				</div>
			</div>
			<div className="listItem__buttonContainer">
				<button>Follow</button>
			</div>
		</div>
	);
};

export default ListItem;
