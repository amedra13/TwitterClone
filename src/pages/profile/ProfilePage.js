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
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

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
	icon: {
		color: '#00b4d8',
		margin: '0 5px',
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
						<img src={user?.profileImage} alt="" />
					</div>
					<div className="profile__bottom">
						<div className="profile__user">
							<Avatar className={classes.avatar}>AM</Avatar>
							<Button className={classes.button}>Follow</Button>
						</div>
						<div className="profile__content">
							<div>
								<div className="flex">
									<h2>{user?.name}</h2>
									<VerifiedUserIcon className={classes.icon} />
								</div>
								<p className="gray">{user?.userName}</p>
							</div>
							<div>
								<p>{user?.aboutMe}</p>
							</div>
							<div className="profile__links gray">
								<div>
									<LocationOnOutlinedIcon />
									<p>{user?.location}</p>
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
					<h1>Profile posts</h1>
				</div>
			</div>
			<Trend />
		</div>
	);
};

export default ProfilePage;
