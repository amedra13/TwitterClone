import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

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

const FollowButton = ({ user, profileUser, followingList, updateFollow }) => {
	const classes = useStyles();
	const [following, setFollowing] = useState(false);
	const [isUser, setIsUser] = useState(false);

	useEffect(() => {
		const listOfIds = followingList?.map((person) => person._id);
		const isFollowing = listOfIds?.includes(profileUser?._id);
		const sameUser = user?.userName === profileUser?.userName;
		setFollowing(isFollowing);
		setIsUser(sameUser);
	}, [followingList, user, profileUser]);

	const toggleFollow = async () => {
		try {
			let toggleAction = following ? 'removeFollow' : 'addFollow';
			await axios.post(`http://localhost:8080/loadLists/${toggleAction}`, {
				otherId: profileUser?._id,
				userId: user?._id,
			});
			setFollowing(!following);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Button
			onClick={() => {
				toggleFollow();
				updateFollow();
			}}
			className={`${classes.button} ${isUser && classes.hidden} ${
				following && classes.isFollowing
			}`}
		>
			{following ? 'Following' : 'Follow'}
		</Button>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
		profileUser: state.profile.profileUser,
	};
};

export default connect(mapStateToProps)(FollowButton);
