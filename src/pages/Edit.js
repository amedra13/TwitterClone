import React, { useState } from 'react';
import Sidebar from '../components/mainPage/Sidebar';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Trend from '../components/mainPage/Trend';
import DeleteModal from '../components/Modals/DeleteModal';
import axios from 'axios';
import * as actions from '../store/actions/index';

const Edit = ({ user, onLogout }) => {
	const history = useHistory();
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [aboutMe, setAboutMe] = useState('');
	const [location, setLocation] = useState('');
	const [error, setError] = useState(null);
	const [errMessage, setErrMessage] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const updateUser = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`http://localhost:8080/updateUser/${user?._id}`,
				{
					name: name,
					oldUsername: user.userName,
					newUsername: username,
					aboutMe: aboutMe,
					location: location,
				}
			);
			const { errors, errField } = response.data;
			if (errField) {
				setError(errField);
				setErrMessage(errors);
			} else {
				history.push(`/home/${user._id}`);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const modalHandler = () => {
		setIsModalOpen(!isModalOpen);
	};
	const deleteAccount = async () => {
		await axios.post(`http://localhost:8080/deleteAccount`, {
			id: user._id,
			username: user.userName,
		});
		onLogout();
		history.push('/');
	};
	return (
		<div className="edit">
			<Sidebar />
			<div className="edit__container">
				<h3>{user?.name}'s settings</h3>
				<div className="edit__account">
					<h2>Change your account</h2>
					<form onSubmit={updateUser}>
						<div className="form__section">
							<div>
								<label htmlFor="name">Current Name</label>
							</div>
							<div>
								<input
									id="name"
									type="text"
									placeholder="Change your name..."
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								{error === 'name' && (
									<p style={{ color: 'red', margin: '5px' }}>{errMessage}</p>
								)}
							</div>
						</div>
						<div className="form__section">
							<div>
								<label htmlFor="username">Current Username</label>
							</div>
							<div>
								<input
									id="username"
									type="text"
									placeholder={`${user?.userName}`}
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
								{error === 'newUsername' && (
									<p style={{ color: 'red', margin: '5px' }}>{errMessage}</p>
								)}
							</div>
						</div>
						<div className="form__section">
							<div>
								<label htmlFor="aboutMe">Current Info</label>
							</div>
							<div>
								<input
									id="aboutMe"
									type="text"
									placeholder="Tell us whats new??"
									value={aboutMe}
									onChange={(e) => setAboutMe(e.target.value)}
								/>
								{error === 'aboutMe' && (
									<p style={{ color: 'red', margin: '5px' }}>{errMessage}</p>
								)}
							</div>
						</div>
						<div className="form__section">
							<div>
								<label htmlFor="location">Current Location</label>
							</div>
							<div>
								<input
									id="location"
									type="text"
									placeholder="Tell us your new location.."
									value={location}
									onChange={(e) => setLocation(e.target.value)}
								/>
								{error === 'location' && (
									<p style={{ color: 'red', margin: '5px' }}>{errMessage}</p>
								)}
							</div>
						</div>
						<div className="form__buttonContainer">
							<button className="changeInfo" type="submit">
								Change Info
							</button>
						</div>
					</form>
					<div className="deleteContainer">
						<button className="delete" onClick={() => setIsModalOpen(true)}>
							DELETE ACCOUNT
						</button>
					</div>
				</div>
				<DeleteModal
					isOpen={isModalOpen}
					modalHandler={modalHandler}
					deleteFunction={deleteAccount}
				/>
			</div>
			<Trend />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.main.user,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onLogout: () => dispatch(actions.logout()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
