import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';

const Signup = () => {
	return (
		<div className="signup">
			<div className="signup__left">
				<div className="signup__leftContainer">
					<div className="signup__desc">
						<SearchIcon fontSize="large" />
						<h3>Follow your Interests</h3>
					</div>
					<div className="signup__desc">
						<PeopleOutlineIcon fontSize="large" />
						<h3>Hear what people are talking about</h3>
					</div>
					<div className="signup__desc">
						<ModeCommentOutlinedIcon fontSize="large" />
						<h3>Join the Conversation</h3>
					</div>
				</div>
			</div>
			<div className="signup__right">
				<h1>SignUp Component</h1>
			</div>
		</div>
	);
};

export default Signup;
