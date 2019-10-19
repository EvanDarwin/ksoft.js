const Image = require('./Image');
const RedditPost = require('./RedditPost');

class RedditImage extends Image {
	constructor({ image_url, source, title, subreddit, upvotes, downvotes, nsfw, author }) {
		super({ url: image_url, nsfw, tag: 'reddit' });
		this.post = new RedditPost({ title, subreddit, upvotes, downvotes, author, link: source });
	}
}

module.exports = RedditImage;