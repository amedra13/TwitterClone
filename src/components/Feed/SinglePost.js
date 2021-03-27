import React, { useState } from 'react';
import StockPhoto from '../../images/avatarStock.jpg';
import Dora from '../../images/Dora.jpg';
import { useHistory, Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import Comments from '../Comments';
import { connect } from 'react-redux';

const SinglePost = ({
	user,
	post,
	timePosted,
	delay,
	increaseLike,
	updateFeed,
	bookmarkHandler,
}) => {
	const [showComments, setShowComments] = useState(false);
	const [retweets, setRetweets] = useState(post.retweets);
	const history = useHistory();

	const srcImage = post.user.username === '@doradadestroya' ? Dora : StockPhoto;
	const userLikes = post.favorite.includes(user.userName);
	const favorited = userLikes ? 'pink' : 'rgba(136, 145, 150, 0.658)';

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
						<FavoriteIcon
							fontSize="small"
							style={{
								margin: ' 0 10px',
								color: `${favorited}`,
							}}
							onClick={() => {
								// increaseLike(post._id, 'favorite');
								increaseLike(post._id, user?.userName);
							}}
						/>{' '}
						{post?.favorite.length}
					</div>
					<div>
						<BookmarkBorderOutlinedIcon
							fontSize="small"
							style={{ margin: ' 0 10px' }}
							onClick={() => {
								bookmarkHandler(post._id, user?._id);
							}}
						/>{' '}
						{post?.saved.length}
					</div>
				</div>
				{showComments && (
					<Comments
						comments={post.comments}
						postId={post._id}
						updateComments={updateFeed}
					/>
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
