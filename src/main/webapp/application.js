var app1 = new Vue({
	el : '#content',
	data : {
		content : 'Hello! click above link to nevigate different tab',
		name : 'Like',
		title : 'Home',
		display : 'HOME',
		editIndex : null,
		submenu : { entity : 'MENU', flag : false},
		student:{id:null,name:null,address:null,contactNumber:null,partOfClass:[]},
		teacher:{id:null,name:null,address:null,qualification:null,expertInSubject:[]},
		subject:{id:null,name:null,teachersId:[],subjectArePartOfClass:[]},
		attendance:{id:null,date:null,attendanceBy:null,attendanceForClass:null,availableStudentsOnDate:[]},
		class:{id:null,name:null,students:[]} ,
		dynamicFormData : null
	},
	methods : {
		entity : function(p) {
			this.submenu.entity = p
			this.submenu.flag = p != 'HOME' ? true : false
			this.display = "ALL"
		},
		home : function() {
			this.title = "Home"
			this.display = "HOME"
		},
		create : function(p) {
			this.title = "Create"
			this.display = "CREATE"
			this.prepareDynamicForm(p.entity,this.display)
		},
		update : function(p) {
			this.title = "Update"
			this.display = "UPDATE"
			this.prepareDynamicForm(p.entity,this.display)
		},
		deleteE : function(p) {
			this.title = "Delete"
			this.display = "DELETE"
			this.prepareDynamicForm(p.entity,this.display)
		},
		search : function(p) {
			this.title = "Search"
			this.display = "SEARCH"
			this.prepareDynamicForm(p.entity,this.display)
		},
		hasToBeEdit : function(index) {
			return index == this.editIndex;
		},
		toBeEdit : function(index) {
			this.editIndex = index
		},
		resetEdit : function() {
			this.editIndex = null
		},
		prepareDynamicForm : function(forEntity, operation) {
			var e = forEntity.toLowerCase()
			this.dynamicFormData = Object.keys(app1._data[e])
		}
	}
});