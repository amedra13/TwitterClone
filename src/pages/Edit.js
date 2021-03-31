import React, { useState } from 'react';
import Sidebar from '../components/mainPage/Sidebar';
import { connect } from 'react-redux';
import Trend from '../components/mainPage/Trend';
import axios from 'axios';

const Edit = ({ user }) => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [aboutMe, setAboutMe] = useState('');
	const [location, setLocation] = useState('');
	const updateUser = (e) => {
		e.preventDefault();
		axios.post(`http://localhost:8080/updateUser/${user?._id}`, {
			name: name,
			username: username,
			aboutMe: aboutMe,
			location: location,
		});
	};
	return (
		<div className="edit">
			<Sidebar username={user?.userName} userId={user?._id} />
			<div className="edit__container">
				<h3>{user?.name}'s settings</h3>
				<div className="edit__account">
					<h2>Change your account</h2>
					<form onSubmit={updateUser}>
						<div className="form__section">
							<div>
								<label htmlFor="name">Current Name</label>
							</div>
							<div>
								<input
									id="name"
									type="text"
									placeholder="Change your name..."
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
						</div>
						<div className="form__section">
							<div>
								<label htmlFor="username">Current Username</label>
							</div>
							<div>
								<input
									id="username"
									type="text"
									placeholder={`${user?.userName}`}
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
						</div>
						<div className="form__section">
							<div>
								<label htmlFor="aboutMe">Current Info</label>
							</div>
							<div>
								<input
									id="aboutMe"
									type="text"
									placeholder="Tell us whats new??"
									value={aboutMe}
									onChange={(e) => setAboutMe(e.target.value)}
								/>
							</div>
						</div>
						<div className="form__section">
							<div>
								<label htmlFor="location">Current Location</label>
							</div>
							<div>
								<input
									id="location"
									type="text"
									placeholder="Tell us your new location.."
									value={location}
									onChange={(e) => setLocation(e.target.value)}
								/>
							</div>
						</div>
						<div className="form__buttonContainer">
							<button className="changeInfo" type="submit">
								Change Info
							</button>
						</div>
					</form>
					<div className="deleteContainer">
						<button className="delete">DELETE ACCOUNT</button>
					</div>
				</div>
			</div>
			<Trend />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
	};
};

export default connect(mapStateToProps)(Edit);
