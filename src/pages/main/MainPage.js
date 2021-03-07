import React, { useState, useEffect } from 'react';
import SideBar from '../../components/mainPage/Sidebar';
import Feed from '../../components/mainPage/Feed';
import Trend from '../../components/mainPage/Trend';
import axios from 'axios';

const MainPage = () => {
	const [feedPosts, setFeedPosts] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:8080/feed')
			.then((res) => {
				setFeedPosts(res.data.allPosts);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="mainPage">
			<SideBar />
			<Feed posts={feedPosts} />
			<Trend />
		</div>
	);
};

export default MainPage;
