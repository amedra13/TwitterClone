import React, { useState, useEffect } from 'react';
import Sidebar from '../components/mainPage/Sidebar';
import Trend from '../components/mainPage/Trend';
import ListItem from '../components/lists/ListItem';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../store/actions/index';

const Lists = ({
	user,
	following,
	followers,
	onLoadLists,
	onReloadFollowing,
	onReloadFollowers,
}) => {
	const [active, setActive] = useState('following');

	useEffect(() => {
		const loadLists = async () => {
			const response = await axios.get(
				`http://localhost:8080/reloadFollowing/${user?._id}`
			);
			onReloadFollowing(response.data.list);
		};
		loadLists();
	}, [user, onReloadFollowing]);

	const reloadFollowing = async () => {
		const response = await axios.get(
			`http://localhost:8080/reloadFollowing/${user?._id}`
		);
		onReloadFollowing(response.data.list);
	};
	const reloadFollowers = async () => {
		const response = await axios.get(
			`http://localhost:8080/reloadFollowers/${user?._id}`
		);
		console.log(response.data.list);
		onReloadFollowers(response.data.list);
	};

	return (
		<div className="lists">
			<Sidebar username={user?.userName} userId={user?._id} />
			<div className="lists__container">
				<div className="lists__links">
					<h3
						className={`${active === 'following' && 'listActive'}`}
						onClick={() => {
							reloadFollowing();
							setActive('following');
						}}
					>
						Following
					</h3>
					<h3
						className={`${active === 'followers' && 'listActive'}`}
						onClick={() => {
							reloadFollowers();
							setActive('followers');
						}}
					>
						Followers
					</h3>
				</div>
				<div className="lists__following">
					{active === 'following' &&
						following?.map((person, i) => (
							<ListItem
								key={person._id}
								userId={user._id}
								person={person}
								delay={i}
								animation="slideRight"
								following={true}
								update={reloadFollowing}
							/>
						))}
				</div>
				<div
					className="lists__followers"
					onClick={() => console.log('Following List => ', following)}
				>
					{active === 'followers' &&
						followers?.map((person, i) => (
							<ListItem
								key={person._id}
								userId={user._id}
								person={person}
								delay={i}
								animation="slideLeft"
								following={following.some(
									(user) => user.userName === person?.userName
								)}
								update={reloadFollowing}
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
		onReloadFollowing: (list) => dispatch(actions.reloadFollowing(list)),
		onReloadFollowers: (list) => dispatch(actions.reloadFollowers(list)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
