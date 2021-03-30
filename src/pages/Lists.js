import React, { useState, useEffect } from 'react';
import Sidebar from '../components/mainPage/Sidebar';
import Trend from '../components/mainPage/Trend';
import ListItem from '../components/lists/ListItem';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../store/actions/index';

const Lists = ({ user, following, followers, onLoadLists }) => {
	const [active, setActive] = useState('following');

	useEffect(() => {
		const loadLists = async () => {
			const response = await axios.get(
				`http://localhost:8080/loadLists/${user?._id}`
			);
			onLoadLists(response.data.followersList, response.data.followingList);
		};
		loadLists();
	}, [user, onLoadLists]);

	return (
		<div className="lists">
			<Sidebar username={user?.userName} userId={user?._id} />
			<div className="lists__container">
				<div className="lists__links">
					<h3
						className={`${active === 'following' && 'active'}`}
						onClick={() => setActive('following')}
					>
						Following
					</h3>
					<h3
						className={`${active === 'followers' && 'active'}`}
						onClick={() => setActive('followers')}
					>
						Followers
					</h3>
				</div>
				<div
					className="lists__following"
					// onClick={() => console.log(following)}
				>
					{active === 'following' &&
						following?.map((person, i) => (
							<ListItem
								key={person._id}
								userId={user._id}
								person={person}
								delay={i}
								animation="slideRight"
								following={user.following.includes(person.userName)}
							/>
						))}
				</div>
				<div
					className="lists__followers"
					// onClick={() => console.log(followers)}
				>
					{active === 'followers' &&
						followers?.map((person, i) => (
							<ListItem
								key={person._id}
								userId={user._id}
								person={person}
								delay={i}
								animation="slideLeft"
								following={user.following.includes(person.userName)}
							/>
						))}
				</div>
			</div>
			<Trend />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
		following: state.lists.following,
		followers: state.lists.followers,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onLoadLists: (followers, following) =>
			dispatch(actions.loadLists(followers, following)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
