export const getTime = (date) => {
	const datePosted = new Date(date);
	const dateNow = new Date();
	const diffInMilliSeconds = Math.abs(dateNow - datePosted) / 1000;
	return Math.floor(diffInMilliSeconds / 60) % 60;
};
