import React from 'react';
import SideBar from '../../components/Sidebar';
import Feed from '../../components/Feed';
import Trend from '../../components/Trend';

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
