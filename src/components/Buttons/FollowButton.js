import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import axios from 'axios';

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
	isUser,
	isFollowing,
	profileUser,
	currentUser,
	onUpdateFollow,
}) => {
	const classes = useStyles();

	const toggleFollow = async (isFollowing, profileUser, currentUser) => {
		try {
			const followingList = await axios.post('http://localhost:8080/follow', {
				isFollowing: isFollowing,
				username: profileUser,
				currentUserId: currentUser,
			});
			console.log(followingList);
			onUpdateFollow(followingList.data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Button
			onClick={() => toggleFollow(isFollowing, profileUser, currentUser)}
			className={`${classes.button} ${isUser && classes.hidden} ${
				isFollowing && classes.isFollowing
			}`}
		>
			{isFollowing ? 'Following' : 'Follow'}
		</Button>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpdateFollow: (list) => dispatch(actions.updateFollow(list)),
	};
};

export default connect(null, mapDispatchToProps)(FollowButton);
