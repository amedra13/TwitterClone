import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

const SinglePost = ({ post }) => {
	return (
		<div className="singlePost">
			<div className="singlePost__avatarContainer">
				<Avatar>F</Avatar>
			</div>
			<div className="singlePost__content">
				<div className="singlePost__userInfo">
					<h3>
						{post.twittername} {post.twitterHandle} * {post.timePosted}
					</h3>
				</div>
				<div className="singlePost__message">
					<h3>{post.message}</h3>
				</div>
				<div className="singlePost__icons">
					<div>
						<ModeCommentOutlinedIcon fontSize="small" /> {post.comments}
					</div>
					<div>
						<RepeatOutlinedIcon fontSize="small" /> {post.retweets}
					</div>
					<div>
						<FavoriteBorderOutlinedIcon fontSize="small" /> {post.favorite}
					</div>
					<div>
						<PublishOutlinedIcon fontSize="small" /> {post.forwarded}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SinglePost;
