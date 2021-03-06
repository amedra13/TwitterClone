import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
		backgroundColor: '#00b4d8',
		color: 'white',
	},
	icon: {
		color: '#00b4d8',
	},
}));

const CssTextField = withStyles({
	root: {
		'& .MuiOutlinedInput-root': {
			margin: '10px 0',
			'& fieldset': {
				borderColor: '#00b4d8',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#00b4d8',
			},
		},
	},
})(TextField);

const CreateAccount = () => {
	const { userId } = useParams();
	const history = useHistory();
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [aboutMe, setAboutMe] = useState('');
	const [location, setLocation] = useState('');
	const classes = useStyles();

	const createAccount = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:8080/createAccount/${userId}`, {
				name: name,
				username: username,
				aboutMe: aboutMe,
				location: location,
			})
			.then((result) => {
				console.log(result.data.message);
				history.push(`/home/${userId}`);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="createAccount">
			<div className="createAccount__container">
				<div className="createAccount__header">
					<TwitterIcon className={classes.icon} />
					<h2>Create Account</h2>
				</div>
				<form onSubmit={createAccount}>
					<div className="formDiv">
						<h5>Tell us who you are</h5>
						<CssTextField
							variant="outlined"
							placeholder="Name"
							size="small"
							value={name}
							fullWidth
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="formDiv">
						<h5>Pick your unique username. This is how people can find you</h5>
						<CssTextField
							variant="outlined"
							placeholder="Username"
							size="small"
							value={username}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<i style={{ color: '#00b4d8' }}>&#64;</i>
									</InputAdornment>
								),
							}}
							fullWidth
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div className="formDiv">
						<h5>Show the world who you are </h5>
						<CssTextField
							variant="outlined"
							placeholder="About Me"
							size="small"
							value={aboutMe}
							fullWidth
							onChange={(e) => setAboutMe(e.target.value)}
						/>
					</div>

					<div className="formDiv">
						<h5>Twitter community is all over the world!</h5>
						<CssTextField
							variant="outlined"
							placeholder="Location"
							size="small"
							value={location}
							fullWidth
							onChange={(e) => setLocation(e.target.value)}
						/>
					</div>

					<Button type="submit" variant="outlined" className={classes.button}>
						Go to Account
					</Button>
				</form>
			</div>
		</div>
	);
};

export default CreateAccount;
