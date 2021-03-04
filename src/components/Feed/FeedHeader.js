import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import FlareIcon from '@material-ui/icons/Flare';
import Avatar from '@material-ui/core/Avatar';
import CropOriginalOutlinedIcon from '@material-ui/icons/CropOriginalOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

const FeedHeader = () => {
	return (
		<div className="feedHeader">
			<div className="feedHeader__title">
				Welcome
				<IconButton>
					<FlareIcon fontSize="large" />
				</IconButton>
			</div>
			<div className="feedHeader__form">
				<div>
					<Avatar>AM</Avatar>
				</div>
				<div>
					<input type="text" placeholder="What's Happening" />
					<div>
						<CropOriginalOutlinedIcon fontSize="small" />
						<GifOutlinedIcon fontSize="small" />
						<InsertChartOutlinedIcon fontSize="small" />
						<SentimentSatisfiedOutlinedIcon fontSize="small" />
					</div>
				</div>
				<div>
					<Button> Tweet </Button>
				</div>
			</div>
		</div>
	);
};

export default FeedHeader;
