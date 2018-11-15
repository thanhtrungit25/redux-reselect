// Takes a list of posts and post ids, and pick out
// the selected posts
import _ from 'lodash';
import { createSelector } from 'reselect';

const postsSelector = (state) => state.posts;
const selectedPostIdsSelector = (state) => state.selectedPostIds;

const getPosts = (posts, selectedPostIds) => {
	const selectedPosts = _.filter(posts, (post) => _.includes(selectedPostIds, post.id));

	return selectedPosts;
};

export default createSelector(postsSelector, selectedPostIdsSelector, getPosts);
