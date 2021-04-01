import axios from 'axios';

export const likeHandler = async (postId, id) => {
	await axios.post(`http://localhost:8080/like/${postId}`, {
		userId: id,
	});
};

export const bookmarkHandler = async (postId, id) => {
	await axios.post(`http://localhost:8080/bookmarks/${postId}`, {
		userId: id,
	});
};
