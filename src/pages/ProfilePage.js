import React, { useEffect } from 'react';
import SinglePost from '../components/Feed/SinglePost';
import LoadingPost from '../components/Feed/LoadingPosts';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/mainPage/Sidebar';
import Trend from '../components/mainPage/Trend';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import FollowButton from '../components/Buttons/FollowButton';

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: '140px',
		height: '140px',
		position: 'absolute',
		top: '-75px',
		left: '0',
		border: '5px solid white',
	},
	button: {
		color: '#00b4d8',
		margin: '10px',
		fontWeight: 'bold',
		border: '1px solid #00b4d8',
		borderRadius: '30px',
		padding: '10px',
		'&:hover': {
			backgroundColor: '#b0f1ff77',
		},
	},
	hidden: {
		visibility: 'hidden',
	},
	icon: {
		color: '#00b4d8',
		margin: '0 5px',
	},
}));

const ProfilePage = ({ user, profileUser, profilePosts, onSetProfile }) => {
	const { username } = useParams();
	const classes = useStyles();

	useEffect(() => {
		const getProfileUser = async () => {
			const result = await axios.get(
				`http://localhost:8080/profile/${username}`
			);

			onSetProfile(result.data.profile, result.data.posts);
		};

		getProfileUser();
	}, [username, onSetProfile]);

	const getTime = (date) => {
		const datePosted = new Date(date);
		const dateNow = new Date();
		const diffInMilliSeconds = Math.abs(dateNow - datePosted) / 1000;
		return Math.floor(diffInMilliSeconds / 60) % 60;
	};

	return (
		<div className="profilePage">
			<Sidebar username={user?.userName} userId={user?._id} />
			<div className="profile">
				<div className="profile__info">
					<div className="profile__img">
						<img src={profileUser?.profileImage} alt="" />
					</div>
					<div className="profile__bottom">
						<div className="profile__user">
							<Avatar className={classes.avatar}>AM</Avatar>
							<FollowButton />
						</div>
						<div className="profile__content">
							<div>
								<div className="flex">
									<h2>{profileUser?.name}</h2>
									<VerifiedUserIcon className={classes.icon} />
								</div>
								<p className="gray">{profileUser?.userName}</p>
							</div>
							<div>
								<p>{profileUser?.aboutMe}</p>
							</div>
							<div className="profile__links gray">
								<div>
									<LocationOnOutlinedIcon />
									<p>{profileUser?.location}</p>
								</div>
								<div>
									<LinkOutlinedIcon />
									<p>{'location'}</p>
								</div>
								<div>
									<EventNoteOutlinedIcon />
									<p>{'10/10/20'}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="profile__feed">
					{profilePosts ? (
						profilePosts.map((singlePost) => {
							return (
								<SinglePost
									key={singlePost._id}
									post={singlePost}
									timePosted={getTime(singlePost.createdAt)}
								/>
							);
						})
					) : (
						<LoadingPost />
					)}
				</div>
			</div>
			<Trend />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
		profileUser: state.profileUser,
		profilePosts: state.profilePosts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSetProfile: (user, posts) => dispatch(actions.setProfile(user, posts)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
