import React from 'react';
import Sidebar from '../components/mainPage/Sidebar';
import { connect } from 'react-redux';
import Trend from '../components/mainPage/Trend';

const Edit = ({ user }) => {
	return (
		<div className="edit">
			<Sidebar username={user?.userName} userId={user?._id} />
			<div className="edit__container">
				<h3>{user?.name}'s settings</h3>
				<div className="edit__account">
					<h1>Change your account</h1>
					<form action="">
						<div>
							<label htmlFor="name">Current Name</label>
							<input id="name" type="text" placeholder="Change your name..." />
						</div>
						<div>
							<label htmlFor="username">Current Username</label>
							<input
								id="username"
								type="text"
								placeholder={`${user?.userName}`}
							/>
						</div>
						<div>
							<label htmlFor="aboutMe">Current Info</label>
							<input
								id="aboutMe"
								type="text"
								placeholder="Tell us whats new??"
							/>
						</div>
						<div>
							<label htmlFor="location">Current Location</label>
							<input
								id="location"
								type="text"
								placeholder="Tell us your new location.."
							/>
						</div>
						<button type="submit">Change Info</button>
					</form>
					<div>
						<button>DELETE ACCOUNT</button>
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
