import React from 'react';
import SideBar from '../../components/mainPage/Sidebar';
import Feed from '../../components/mainPage/Feed';
import Trend from '../../components/mainPage/Trend';

const MainPage = () => {
	return (
		<div className="mainPage">
			<SideBar />
			<Feed />
			<Trend />
		</div>
	);
};

export default MainPage;
