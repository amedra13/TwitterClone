import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const useStyles = makeStyles((theme) => ({
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
	isFollowing: {
		backgroundColor: '#00b4d8',
		color: 'white',
	},
	hidden: {
		visibility: 'hidden',
	},
}));

const FollowButton = ({
	user,
	profileUser,
	isUser,
	isFollowing,
	onFollowStatus,
	onUpdateFollow,
}) => {
	const classes = useStyles();

	useEffect(() => {
		const isFollowing = user?.following?.indexOf(profileUser?._id) !== -1;
		const isUser = user?.userName === profileUser?.userName;
		onFollowStatus(isUser, isFollowing);
	});

	const toggleFollow = async () => {
		console.log(profileUser);
		try {
			const followingList = await axios.post('http://localhost:8080/follow', {
				isFollowing: isFollowing,
				profileId: profileUser?._id,
				currentUserId: user._id,
			});
			console.log(followingList.data.updatedFollow);
			onUpdateFollow(followingList.data.updatedFollow);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Button
			onClick={() => toggleFollow()}
			className={`${classes.button} ${isUser && classes.hidden} ${
				isFollowing && classes.isFollowing
			}`}
		>
			{isFollowing ? 'Following' : 'Follow'}
		</Button>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
		profileUser: state.profile.profileUser,
		isUser: state.main.isUser,
		isFollowing: state.main.isFollowing,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFollowStatus: (isUser, following) =>
			dispatch(actions.followStatus(isUser, following)),
		onUpdateFollow: (list) => dispatch(actions.updateFollow(list)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
