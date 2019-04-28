import AWS from '../AWS';

const posts = [
	'#Post 1 \nSome stuff',
	'#Post 2 \nSome other stuff'
];

class Posts {
	constructor() {
	}

	getAllPosts = () => {
		return new Promise((resolve, reject) => {
			resolve(posts);
		});
	}
};

export default Posts;
