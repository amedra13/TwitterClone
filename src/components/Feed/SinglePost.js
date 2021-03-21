import React, { useState } from 'react';
import StockPhoto from '../../images/avatarStock.jpg';
import Dora from '../../images/Dora.jpg';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

const SinglePost = ({ post, timePosted, increaseLike, delay }) => {
	const [comments, setComments] = useState(post.comments);
	const [retweets, setRetweets] = useState(post.retweets);
	const [favorite, setFavorite] = useState(post.favorite);
	const [forwarded, setForwarded] = useState(post.forwarded);

	const srcImage = post.user.username === '@doradadestroya' ? Dora : StockPhoto;

	return (
		<div className="singlePost" style={{ animationDelay: `${delay * 100}ms` }}>
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
