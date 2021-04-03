import React, { useState, useEffect } from 'react';
import SingleTrend from '../Trends/SingleTrend';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

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
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState(null);
	const [anchorEl, setAnchorEl] = useState(null);

	const classes = useStyles();

	useEffect(() => {
		const searchUser = setTimeout(() => {
			if (search !== '') {
				const inputField = document.getElementById('searchbar');
				// console.log(input);
				console.log(`Looking for ${search}`);
				setAnchorEl(inputField);
				setSearchResults(search);
			}
		}, 800);
		return () => clearTimeout(searchUser);
	}, [search]);

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
						id="searchbar"
						className={classes.searchTwitter}
						placeholder="Seach Twitter"
						disableUnderline
						fullWidth
						value={search}
						autoFocus
						onChange={(e) => {
							setSearch(e.target.value);
						}}
						startAdornment={
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						}
					/>

					<Popover
						open={Boolean(anchorEl)}
						anchorEl={anchorEl}
						onClose={() => setAnchorEl(null)}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						style={{ border: '2px solid green' }}
					>
						<div style={{ borderColor: 'red', width: '320px', height: '50px' }}>
							<p style={{ width: '200px' }}>Looking for {search}</p>
						</div>
					</Popover>
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
