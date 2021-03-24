import React, { useState } from 'react';
import StockPhoto from '../../images/avatarStock.jpg';
import Dora from '../../images/Dora.jpg';
import { useHistory, Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import Comments from '../Comments';
import { connect } from 'react-redux';

const SinglePost = ({ user, post, timePosted, delay, increaseLike }) => {
	const [showComments, setShowComments] = useState(false);
	const [retweets, setRetweets] = useState(post.retweets);
	const [forwarded, setForwarded] = useState(post.forwarded);
	const history = useHistory();

	const srcImage = post.user.username === '@doradadestroya' ? Dora : StockPhoto;

	return (
		<div className="singlePost" style={{ animationDelay: `${delay * 75}ms` }}>
			<div className="singlePost__avatarContainer">
				<Avatar src={srcImage} />
			</div>
			<div className="singlePost__content">
				<div className="singlePost__userInfo">
					<h4>{post.user.name}</h4>
					<Link className="link" to={`/profile/${post.user.username.slice(1)}`}>
						{post.user.username}
					</Link>
					{/* <h4 className="textColor">{post.user.username}</h4>{' '} */}
					<span>&#183;</span>
					<h4 className="textColor">{timePosted + 'm'}</h4>
				</div>
				<div
					className="singlePost__message"
					onClick={() => history.push(`/status/${post._id}`)}
				>
					<h3>{post.message}</h3>
				</div>
				<div className="singlePost__icons">
					<div>
						<ModeCommentOutlinedIcon
							fontSize="small"
							style={{ margin: ' 0 10px' }}
							onClick={() => {
								setShowComments(!showComments);
							}}
						/>{' '}
						{post?.comments.length}
					</div>
					<div>
						<RepeatOutlinedIcon
							fontSize="small"
							style={{ margin: ' 0 10px' }}
							onClick={() => {
								setRetweets((prevState) => prevState + 1);
								// increaseLike(post._id, 'retweets');
							}}
						/>{' '}
						{retweets}
					</div>
					<div>
						<FavoriteBorderOutlinedIcon
							fontSize="small"
							style={{ margin: ' 0 10px' }}
							onClick={() => {
								// increaseLike(post._id, 'favorite');
								increaseLike(post._id, user?.userName);
							}}
						/>{' '}
						{post?.favorite.length}
					</div>
					<div>
						<PublishOutlinedIcon
							fontSize="small"
							style={{ margin: ' 0 10px' }}
							onClick={() => {
								setForwarded((prevState) => prevState + 1);
								// increaseLike(post._id, 'forwarded');
							}}
						/>{' '}
						{forwarded}
					</div>
				</div>
				{showComments && (
					<Comments comments={post.comments} postId={post._id} />
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
	};
};

export default connect(mapStateToProps)(SinglePost);
