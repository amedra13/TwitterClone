import React from 'react';
import SingleTrend from '../Trends/SingleTrend';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	searchTwitter: {
		border: 'none',
		backgroundColor: 'rgba(187, 214, 240, 0.301)',
		padding: '6px',
		borderRadius: '25px',
		width: '90%',
	},
}));

const Trend = () => {
	const classes = useStyles();

	const fakeTrend = {
		section: 'worldwide',
		hashTag: '#BreakingNews',
		numberOfTweets: '125k',
		numberOfPeople: 5123,
	};
	const fakeTrend2 = {
		section: 'pets',
		hashTag: '#CatAttack',
		numberOfTweets: '233k',
		numberOfPeople: 3462,
	};
	const fakeTrend3 = {
		section: 'sport',
		hashTag: '#SportsCards',
		numberOfTweets: '55k',
		numberOfPeople: 53245,
	};
	return (
		<div className="trend">
			<div className="trendContainer">
				<div className="trend__searchbar">
					<Input
						className={classes.searchTwitter}
						placeholder="Seach Twitter"
						disableUnderline
						fullWidth
						startAdornment={
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						}
					/>
				</div>

				<div className="trend__sections">
					<div className="trend__title">
						<h2>Trends for you</h2>
						<SettingsOutlinedIcon style={{ color: '#00b4d8' }} />
					</div>

					<SingleTrend trend={fakeTrend} />
					<SingleTrend trend={fakeTrend3} />
					<SingleTrend trend={fakeTrend2} />
					<SingleTrend trend={fakeTrend} />
					<SingleTrend trend={fakeTrend3} />

					<div className="trend__showMore">
						<h5>Show More</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trend;
