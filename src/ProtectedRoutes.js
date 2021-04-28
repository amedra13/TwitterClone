import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(null);

	useEffect(() => {
		const checkAuth = async () => {
			let token = localStorage.getItem('token');
			if (!token) {
				setIsAuthenticated(false);
				return;
			}

			const response = await axios.post('http://localhost:8080/checkAuth', {
				token: token,
			});
			setIsAuthenticated(response.data.isAuth);
		};
		checkAuth();
	});

	if (isAuthenticated === null) {
		return <></>;
	}

	return (
		<Route
			{...rest}
			render={(props) =>
				!isAuthenticated ? <Redirect to="/login" /> : <Component {...props} />
			}
		/>
	);
};

export default PrivateRoute;
