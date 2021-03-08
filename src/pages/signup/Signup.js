import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	inputField: {
		margin: '5px 0',
		color: '#00b4d8 !important',
	},
	button: {
		backgroundColor: '#00b4d8',
		color: 'white',
	},
}));

const Signup = () => {
	const classes = useStyles();

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
				<div className="signup__rightContainer">
					<div className="signup__rightHeader">
						<TwitterIcon style={{ color: '#00b4d8' }} fontSize="large" />
						<h2>See what is happening in the world right now</h2>
						<h5>Join Twitter today.</h5>
					</div>
					<div className="signup__rightForm">
						<form action="">
							<TextField
								className={classes.inputField}
								variant="outlined"
								placeholder="Email"
							/>
							<TextField
								className={classes.inputField}
								variant="outlined"
								placeholder="Password"
							/>
							<div className="formBottom">
								<Button className={classes.button} variant="contained">
									Get Started
								</Button>
								<p>Have an Account?</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
