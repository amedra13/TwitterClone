import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState(null);
	const [errField, setErrField] = useState(null);
	const classes = useStyles();
	const history = useHistory();

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:8080/login', {
				email: email,
				password: password,
			})
			.then((res) => {
				const { errors, errField } = res.data;
				if (errors) {
					setErrorMsg(errors);
					setErrField(errField);
				} else {
					localStorage.setItem('token', res.data.token);
					history.push(`/home`);
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="login">
			<div className="login__container">
				<div className="login__header">
					<TwitterIcon className={classes.icon} />
					<h2>Login to Twitter</h2>
				</div>
				<form onSubmit={submitHandler}>
					{errField === 'email' && <h4 className="error">{errorMsg}</h4>}
					<CssTextField
						variant="outlined"
						placeholder="Email"
						value={email}
						error={errField === 'email'}
						fullWidth
						onChange={(e) => setEmail(e.target.value)}
					/>
					{errField === 'password' && <h4 className="error">{errorMsg}</h4>}
					<CssTextField
						variant="outlined"
						placeholder="Password"
						type="password"
						value={password}
						error={errField === 'password'}
						fullWidth
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button type="submit" variant="outlined" className={classes.button}>
						Login
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
