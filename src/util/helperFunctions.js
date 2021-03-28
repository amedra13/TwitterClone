import axios from 'axios';

export const getTime = (date) => {
	const datePosted = new Date(date);
	const dateNow = new Date();
	const diffInMilliSeconds = Math.abs(dateNow - datePosted) / 1000;
	return Math.floor(diffInMilliSeconds / 60) % 60;
};

export const getTest = async (postId, username) => {
	const response = await axios.post('http://localhost:8080/like/:postId', {
		username: username,
	});
	console.log(response.data.message);
};

export const likeHandler = async (postId, username) => {
	await axios.post(`http://localhost:8080/like/${postId}`, {
		username: username,
	});
};



export const bookmarkHandler = async (postId, id) => {
	await axios.post(
		`http://localhost:8080/bookmarks/${postId}`,
		{
			userId: id,
		}
	);
};