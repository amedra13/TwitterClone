import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';

const Comments = ({ user, comments, postId }) => {
	const [message, setMessage] = useState('');

	const submitComment = async (e) => {
		e.preventDefault();
		await axios.post(`http://localhost:8080/comment/${postId}`, {
			comment: message,
			username: user.userName,
		});
		setMessage('');
	};
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
				<button onClick={(e) => submitComment(e)}>Send</button>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(Comments);
