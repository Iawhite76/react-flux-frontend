var React = require('react'),
		SideBarNavStore = require('../stores/SideBarNavStore'),
		SideBarNavActions = require('../actions/SideBarNavActions');

function getStateFromStore() {
	return {
		categories: SideBarNavStore.getAll()
	}
}

var SideBarNav = React.createClass({
	onChange(e) {
		this.setState(getStateFromStore());
		this.setState({searchString:e.target.value});
	},

	getInitialState() {
		return {
			categories: [],
			searchString: ''
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
		let searchString = this.state.searchString.trim().toLowerCase(),
				categories = this.state.categories;

		if(searchString.length > 0){
	    // We are searching. Filter the results.

	    categories = categories.filter(function(category){
	        return category.name.toLowerCase().match( searchString );
	    });
		}

		return (
			<div>
				<input type="text" value={this.state.searchString} onChange={this.onChange} placeholder="Type here" />
				<ul> 
					{ categories.map(function(l){
					    return <a href={l.url}><li>{l.name}</li></a>
					}) }
				</ul>
			</div>
    );

	}

});

module.exports = SideBarNav;
