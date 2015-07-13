var React = require('react'),
		SideBarNavStore = require('../stores/SideBarNavStore'),
		SideBarNavActions = require('../actions/SideBarNavActions');

function getStateFromStore() {
	return {
		categories: SideBarNavStore.getAll()
	}
}

var SideBarNav = React.createClass({
	onChange() {
		this.setState(getStateFromStore());
	},

	getInitialState() {
		return {
			categories: []
		};
	},

	componentDidMount() {
		SideBarNavStore.addChangeListener(this.onChange);
		SideBarNavActions.getCategories();
	},

	componentWillUnmount() {
		SideBarNavStore.removeChangeListener(this.onChange);
	},

	render() {
		console.log(this.state.categories);
		var categories = this.state.categories.map(function(comment, index) {
			return (
				<div className='comment' key={'comment-' + index}>
					{comment.name}
				</div>		
			)
		});

		return (
			<div className='categories'>
				{categories}
			</div>
		);
	}

});

module.exports = SideBarNav;
