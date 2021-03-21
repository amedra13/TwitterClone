import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const Comments = ({ comments }) => {
	const [message, setMessage] = useState('');
	return (
		<div className="comments">
			{comments &&
				comments.map((comment, i) => (
					<div key={i} className="comment__container">
						<Avatar
							style={{ width: '25px', height: '25px', margin: '0 10px' }}
						/>
						<Link
							to={`/profile/${comment.username?.slice(1)}`}
							className="username"
						>
							{comment.username}
						</Link>
						<p>{comment.message}</p>
					</div>
				))}
			<div className="comments__input">
				<Avatar style={{ width: '25px', height: '25px', margin: '0 10px' }} />
				<input
					type="text"
					placeholder="Write a reply.."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button>Send</button>
			</div>
		</div>
	);
};

export default Comments;
