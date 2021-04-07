import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListItem = ({ userId, person, delay, animation, following, update }) => {
	const [isFollowing, setIsFollowing] = useState(following);

	const toggleFollow = async () => {
		let toggleAction = isFollowing ? 'removeFollow' : 'addFollow';
		setIsFollowing(!isFollowing);
		await axios.post(`http://localhost:8080/loadLists/${toggleAction}`, {
			otherId: person._id,
			userId: userId,
		});
	};

	return (
		<div
			className={`listItem ${animation}`}
			style={{ animationDelay: `${delay * 75}ms` }}
		>
			<Avatar style={{ margin: '0 10px' }} />
			<div className="listItem__userInfo">
				<div className="listItem__name">
					<h4>{person?.name}</h4>
					<Link className="link" to={`/profile/${person?.userName.slice(1)}`}>
						{person?.userName}
					</Link>
				</div>
				<div>
					<p>{person?.aboutMe}</p>
				</div>
			</div>
			<div className="listItem__buttonContainer">
				<button
					className={isFollowing ? 'following' : 'notFollowing'}
					onClick={async () => {
						await toggleFollow();
						update();
					}}
				>
					{isFollowing ? 'Following' : 'Follow'}
				</button>
			</div>
		</div>
	);
};

export default ListItem;
