var app1 = new Vue({
	el : '#content',
	data : {
		content : 'Hello! click above link to nevigate different tab',
		name : 'Like',
		title : 'Home',
		display : 'HOME',
		editIndex : null
	},
	methods : {
		home : function() {
			this.title = "Home"
			this.display = "HOME"
		},
		create : function() {
			this.title = "Create"
			this.display = "CREATE"
		},
		update : function() {
			this.title = "Update"
			this.display = "UPDATE"
		},
		deleteE : function() {
			this.title = "Delete"
			this.display = "DELETE"
		},
		other : function() {
			this.title = "Other"
			this.display = "OTHER"
		},
		search : function() {
			this.title = "Search"
			this.display = "SEARCH"
		},
		hasToBeEdit : function(index) {
			return index == this.editIndex;
		},
		toBeEdit : function(index) {
			this.editIndex = index
		},
		resetEdit : function() {
			this.editIndex = null
		}
	}
});