import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	inputField: {
		margin: '10px 0',
		borderColor: '#00b4d8 ',
	},
	button: {
		backgroundColor: '#00b4d8',
		color: 'white',
	},
}));

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	let history = useHistory();
	const classes = useStyles();

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:8080/signup', {
				email: email,
				password: password,
			})
			.then((res) => {
				history.push(`/createAccount/${res.data.userId}`);
			})
			.catch((err) => console.log(err));

		setEmail('');
		setPassword('');
	};

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
						<form onSubmit={submitHandler}>
							<TextField
								className={classes.inputField}
								variant="outlined"
								placeholder="Email"
								size="small"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								className={classes.inputField}
								variant="outlined"
								placeholder="Password"
								size="small"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div className="formBottom">
								<Button
									className={classes.button}
									variant="contained"
									type="submit"
								>
									Get Started
								</Button>
								<p>
									Have an Account? <a href="/login">Log in</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
