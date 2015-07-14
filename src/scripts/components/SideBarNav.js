const React = require('react'),
			SideBarNavStore = require('../stores/SideBarNavStore'),
			SideBarNavActions = require('../actions/SideBarNavActions');

function getStateFromStore() {
	return {
		categories: SideBarNavStore.getAllCategories()
	}
}

let SideBarNav = React.createClass({
	onChange() {
		this.setState(getStateFromStore());
	},

	handleChange: function(e){
	    // If you comment out this line, the text box will not change its value.
	    // This is because in React, an input cannot change independently of the value
	    // that was assigned to it. In our case this is this.state.searchString.

	    this.setState({searchString:e.target.value});
    },

	getInitialState() {
		return {
			categories: SideBarNavStore.getAllCategories(),
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
				pages = [],
				categories = this.state.categories.filter(function(el){
					if(el.parent) {
						pages.push({ 
							parentName: el.parent.name, 
							parentID: el.parent.ID, 
							children: [
								{
									childName: el.name, 
									childID: el.ID
								}
							] 
						});
					}
				});

				console.log(pages);

		if(searchString.length > 0){
	    // We are searching. Filter the results.

	    categories = categories.filter(function(category){
	        return category.name.toLowerCase().match( searchString );
	    });
		}

		return (
			<aside className='col-xs-12 col-sm-3' id='react_search'>
				<input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search For Keywords" />
				<ul> 
					{ pages.map(function(page){
					    return (
					    	<a href={page.link}><li>{page.parentName}</li></a>
				    	)
					}) }
				</ul>
			</aside>
    );

	}

});

module.exports = SideBarNav;
