import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../../components/mainPage/Sidebar';
import Feed from '../../components/mainPage/Feed';
import Trend from '../../components/mainPage/Trend';
import axios from 'axios';

const MainPage = ({ login, isLoggedIn }) => {
	const [feedPosts, setFeedPosts] = useState(null);
	const [user, setUser] = useState(null);
	const { userId } = useParams();

	useEffect(() => {
		const getUserAndFeed = async () => {
			console.log(isLoggedIn);
			const profile = await axios.get(`http://localhost:8080/home/${userId}`);
			login(true);
			setUser(profile.data.user);
			setFeedPosts(profile.data.allPosts);
		};

		getUserAndFeed();
	}, [userId, login, isLoggedIn]);

	return (
		<div className="mainPage">
			<SideBar username={user?.userName} />
			<Feed userId={user?._id} posts={feedPosts} />
			<Trend />
		</div>
	);
};

export default MainPage;
