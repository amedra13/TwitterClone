import React from 'react';
import Sidebar from '../components/mainPage/Sidebar';
import Trend from '../components/mainPage/Trend';
import { connect } from 'react-redux';

const Lists = ({ user }) => {
	return (
		<div className="lists">
			<Sidebar username={user?.userName} userId={user?._id} />
			<div className="lists__container">
				<div className="lists__links">
					<h3>Following</h3>
					<h3>Followers</h3>
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

export default connect(mapStateToProps)(Lists);
