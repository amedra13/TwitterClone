import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/mainPage/Sidebar';
import Trend from '../../components/mainPage/Trend';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: '150px',
		height: '100%',
	},
	button: {
		color: 'purple',
		border: '1px solid purple',
	},
}));

const ProfilePage = () => {
	const { userId } = useParams();
	const [user, setUser] = useState(null);
	const classes = useStyles();

	useEffect(() => {
		const getUser = async () => {
			const result = await axios.get(`http://localhost:8080/profile/${userId}`);
			console.log(result.data.profile);
			setUser(result.data.profile);
		};
		getUser();
	}, [userId]);

	return (
		<div className="profilePage">
			<Sidebar username={user?.userName} userId={user?._id} />
			<div className="profile">
				<div className="profile__info">
					<div className="profile__img">
						<h5>image background</h5>
					</div>
					<div className="profile__user">
						<Avatar className={classes.avatar}>AM</Avatar>
						<Button className={classes.button}>Follow</Button>
					</div>
					<div className="profile__content">
						<h2>{user?.name}</h2>
						<p>{user?.userName}</p>
						<p>{user?.aboutMe}</p>
						<div className="profile__links">
							<LocationOnOutlinedIcon />
							{user?.location}
							<LinkOutlinedIcon />
							{'location'}
							<EventNoteOutlinedIcon />
							{'10/10/20'}
						</div>
					</div>
				</div>
				<div className="profile__feed">
					<h1>Profile posts</h1>
				</div>
			</div>
			<Trend />
		</div>
	);
};

export default ProfilePage;
