var React = require('react'),
		SideBarNavStore = require('../stores/SideBarNavStore');

function getStateFromStore() {
	return {
		comments: SideBarNavStore.getAll()
	}
}

var SideBarNav = React.createClass({
	onChange() {
		this.setState(getStateFromStore());
	},

	getInitialState() {
		return getStateFromStore();
	},

	componentDidMount() {
		SideBarNavStore.addChangeListener(this.onChange);
	},

	componentWillUnmount() {
		SideBarNavStore.removeChangeListener(this.onChange);
	},

	render() {
		var comments = this.state.comments.map(function(comment, index) {
			return (
				<div className='comment' key={'comment-' + index}>
					{comment.text}
				</div>		
			)
		});

		return (
			<div className='comments'>
				{comments}
			</div>
		);
	}

});

module.exports = SideBarNav;
