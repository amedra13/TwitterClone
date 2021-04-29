import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import Comments from '../Comments';
import { connect } from 'react-redux';
import { likeHandler, bookmarkHandler } from '../../util/helperFunctions';

const SinglePost = ({
	user,
	post,
	profileImg,
	timePosted,
	delay,
	updateFeed,
}) => {
	const [showComments, setShowComments] = useState(false);
	const history = useHistory();

	const userLikes = post.favorite.includes(user._id);
	const userSaved = post.saved.includes(user._id);
	const favorited = userLikes ? '#ff99ac' : 'rgba(136, 145, 150, 0.658)';
	const saved = userSaved ? '#38b000' : 'rgba(136, 145, 150, 0.658)';

	return (
		<div className="singlePost" style={{ animationDelay: `${delay * 75}ms` }}>
			<div className="singlePost__avatarContainer">
				<Avatar src={`http://localhost:8080/${post?.creator.img}`} />
			</div>
			<div className="singlePost__content">
				<div className="singlePost__userInfo">
					<h4>{post.creator.name}</h4>
					<Link
						className="link"
						to={`/profile/${post.creator.username.slice(1)}`}
					>
						{post.creator.username}
					</Link>
					<span>&#183;</span>
					<h4 className="textColor">{timePosted}</h4>
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
						/>{' '}
						0
					</div>
					<div>
						<FavoriteIcon
							fontSize="small"
							style={{
								margin: ' 0 10px',
								color: `${favorited}`,
							}}
							onClick={async () => {
								await likeHandler(post._id, user?._id);
								updateFeed();
							}}
						/>{' '}
						{post?.favorite.length}
					</div>
					<div>
						<BookmarkBorderOutlinedIcon
							fontSize="small"
							style={{ margin: ' 0 10px', color: `${saved}` }}
							onClick={async () => {
								await bookmarkHandler(post._id, user?._id);
								updateFeed();
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
