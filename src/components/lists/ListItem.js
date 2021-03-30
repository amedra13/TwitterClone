import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListItem = ({ userId, person, delay, animation, following }) => {
	const [isFollowing, setIsFollowing] = useState(following);

	const toggleFollow = async () => {
		if (isFollowing) {
			const response = await axios.post(
				'http://localhost:8080/loadLists/removeFollow',
				{
					otherUsername: person.userName,
					userId: userId,
				}
			);
			setIsFollowing(!isFollowing);
			console.log(response.data.message);
		} else {
			const response = await axios.post(
				'http://localhost:8080/loadLists/addFollow',
				{
					otherUsername: person.userName,
					userId: userId,
				}
			);
			setIsFollowing(!isFollowing);
			console.log(response.data.message);
		}
	};
	return (
		<div
			className={`listItem ${animation}`}
			style={{ animationDelay: `${delay * 75}ms` }}
		>
			<Avatar style={{ margin: '0 10px' }} />
			<div className="listItem__userInfo">
				<div className="listItem__name">
					<h4>{person.name}</h4>
					<Link className="link" to={`/profile/${person.userName.slice(1)}`}>
						{person.userName}
					</Link>
				</div>
				<div>
					<p>{person.aboutMe}</p>
				</div>
			</div>
			<div className="listItem__buttonContainer">
				<button
					className={isFollowing ? 'following' : 'notFollowing'}
					onClick={() => toggleFollow()}
				>
					{isFollowing ? 'Following' : 'Follow'}
				</button>
			</div>
		</div>
	);
};

export default ListItem;
