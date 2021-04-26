import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
		marginTop: '10px',
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
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [aboutMe, setAboutMe] = useState('');
	const [location, setLocation] = useState('');
	const [imgFile, setImageFile] = useState('');
	const [bgImageFile, setBgImage] = useState('');
	const [errorMsg, setErrorMsg] = useState(null);
	const [errorField, setErrorField] = useState(null);
	const history = useHistory();
	const classes = useStyles();

	const createAccount = (e) => {
		e.preventDefault();
		const id = localStorage.getItem('userId');
		if (!id) {
			return;
		}

		const formData = new FormData();
		formData.append('name', name);
		formData.append('username', username);
		formData.append('aboutMe', aboutMe);
		formData.append('location', location);
		formData.append('image', imgFile);
		formData.append('bgImage', bgImageFile);

		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		};
		axios
			.post(`http://localhost:8080/createAccount/${id}`, formData, config)
			.then((result) => {
				const { errors, errField } = result.data;
				if (errors) {
					setErrorMsg(errors);
					setErrorField(errField);
				} else {
					console.log('Submited w/ File!');
					history.push('/home');
				}
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
						{errorField === 'name' && (
							<h4 style={{ color: 'red' }}>{errorMsg}</h4>
						)}
						<h5>Tell us who you are</h5>
						<CssTextField
							variant="outlined"
							placeholder="Name"
							size="small"
							value={name}
							error={errorField === 'name'}
							fullWidth
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="formDiv">
						{errorField === 'username' && (
							<h4 style={{ color: 'red' }}>{errorMsg}</h4>
						)}

						<h5>Pick your unique username. This is how people can find you</h5>
						<CssTextField
							variant="outlined"
							placeholder="Username"
							size="small"
							value={username}
							error={errorField === 'username'}
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
						{errorField === 'aboutMe' && (
							<h4 style={{ color: 'red' }}>{errorMsg}</h4>
						)}
						<h5>Show the world who you are </h5>
						<CssTextField
							variant="outlined"
							placeholder="About Me"
							size="small"
							value={aboutMe}
							error={errorField === 'aboutMe'}
							fullWidth
							onChange={(e) => setAboutMe(e.target.value)}
						/>
					</div>

					<div className="formDiv">
						{errorField === 'location' && (
							<h4 style={{ color: 'red' }}>{errorMsg}</h4>
						)}
						<h5>Twitter community is all over the world!</h5>
						<CssTextField
							variant="outlined"
							placeholder="Location"
							size="small"
							value={location}
							error={errorField === 'location'}
							fullWidth
							onChange={(e) => setLocation(e.target.value)}
						/>
					</div>
					<div className="formDiv">
						{errorField === 'image' && (
							<h4 style={{ color: 'red' }}>{errorMsg}</h4>
						)}
						<h5>Chose a profile picture to show the world!</h5>
						<input
							style={{ display: 'none' }}
							id="imgfile"
							type="file"
							onChange={(e) => setImageFile(e.target.files[0])}
						/>
						<label htmlFor="imgfile">
							<Button component="span" className={classes.button}>
								{imgFile ? imgFile.name : 'Profile Image'}
							</Button>
						</label>
					</div>
					<div className="formDiv">
						{errorField === 'bgImage' && (
							<h4 style={{ color: 'red' }}>{errorMsg}</h4>
						)}
						<h5>Chose a profile picture to show the world!</h5>
						<input
							style={{ display: 'none' }}
							id="bgImagefile"
							type="file"
							onChange={(e) => setBgImage(e.target.files[0])}
						/>
						<label htmlFor="bgImagefile">
							<Button component="span" className={classes.button}>
								{bgImageFile ? bgImageFile.name : 'Background Image'}
							</Button>
						</label>
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
