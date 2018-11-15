import React, { Component } from 'react';
import Posts from './posts_list';
import SelectedPostList from './selected_posts_list';

class App extends Component {
	render() {
		return (
			<div>
				<h4>Selected posts</h4>
				<SelectedPostList />
				<br />
				<h4>All posts</h4>
				<Posts />
			</div>
		);
	}
}

export default App;
