import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostsList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	handlePostSelect = (event, { id }) => {
		const { selectPost, deslectPost } = this.props;
		event.target.checked ? selectPost(id) : deslectPost(id);
	};

	renderPost = (post) => {
		return (
			<li className="list-group-item" key={post.id}>
				<input type="checkbox" onChange={(event) => this.handlePostSelect(event, post)} /> {post.title}
			</li>
		);
	};

	render() {
		// console.log(this.props);
		const { posts } = this.props;
		return <ul className="list-group">{_.map(posts, this.renderPost)}</ul>;
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchPosts: () => {
			dispatch(actions.fetchPosts());
		},
		selectPost: (id) => {
			dispatch(actions.selectPost(id));
		},
		deslectPost: (id) => {
			dispatch(actions.deslectPost(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
