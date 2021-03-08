import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

const SinglePost = ({ post, timePosted, increaseLike }) => {
	const [comments, setComments] = useState(post.comments);
	const [retweets, setRetweets] = useState(post.retweets);
	const [favorite, setFavorite] = useState(post.favorite);
	const [forwarded, setForwarded] = useState(post.forwarded);
	return (
		<div className="singlePost">
			<div className="singlePost__avatarContainer">
				<Avatar>F</Avatar>
			</div>
			<div className="singlePost__content">
				<div className="singlePost__userInfo">
					<h4>{post.user.name}</h4>
					<h4 className="textColor">{post.user.username}</h4>{' '}
					<span>&#183;</span>
					<h4 className="textColor">{timePosted + 'm'}</h4>
				</div>
				<div className="singlePost__message">
					<h3>{post.message}</h3>
				</div>
				<div className="singlePost__icons">
					<div>
						<ModeCommentOutlinedIcon
							fontSize="small"
							style={{ margin: ' 0 10px' }}
							onClick={() => {
								setComments((prevState) => prevState + 1);
								increaseLike(post._id, 'comments');
							}}
						/>{' '}
						{comments}
					</div>
					<div>
						<RepeatOutlinedIcon
							fontSize="small"
							style={{ margin: ' 0 10px' }}
							onClick={() => {
								setRetweets((prevState) => prevState + 1);
								increaseLike(post._id, 'retweets');
							}}
						/>{' '}
						{retweets}
					</div>
					<div>
						<FavoriteBorderOutlinedIcon
							fontSize="small"
							style={{ margin: ' 0 10px' }}
							onClick={() => {
								setFavorite((prevState) => prevState + 1);
								increaseLike(post._id, 'favorite');
							}}
						/>{' '}
						{favorite}
					</div>
					<div>
						<PublishOutlinedIcon
							fontSize="small"
							style={{ margin: ' 0 10px' }}
							onClick={() => {
								setForwarded((prevState) => prevState + 1);
								increaseLike(post._id, 'forwarded');
							}}
						/>{' '}
						{forwarded}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SinglePost;
