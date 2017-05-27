var BODYLIMIT = 120;

// Vue.js app

var app = new Vue({
	el: '#app',
	data: {
		projects: projects,
		searchInput: ''
	},
	watch: {
		searchInput: function(val, oldVal){
			searchProjects(val)
		}
	},
	filters: {
		wrapBody: function(text){
			if (text.length > BODYLIMIT){
				return text.substr(0, BODYLIMIT) + '...'
			} else {
				return text
			}
		}
	}
})

/*
 * searchProject
 * filters through the projects and shows the results
 * :query: The string to search for
 */
function searchProjects(query){
	p = []
	for (let i of projects){
		if (i['name'].search(query) > -1){
			p.push(i)
		}
	}
	app.projects = p
	// set background
	// use nextTick to wait for DOM update
	Vue.nextTick(setPatterns)
}

/*
 * setPatterns
 * sets patterns for each of the cards
 */
function setPatterns(){
	for (let p of app.projects){
		var pattern = GeoPattern.generate(p.name)
		$('.project-' + p.id).css('background-image', pattern.toDataUrl())
	}
}

/*
 * initPage
 * initializes the page once all deps have been loaded
 */
function initPage(){
	setPatterns()
}