const vm = new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'http://example.co.uk',
		finishLink: '<a href="http://example.co.uk">This is an example</a>'
	},
	methods: {
		sayHello: function() {
			return this.title;
		}
	},
	template: `<div>
								<h1 v-once>{{title}}</h1>
								<p v-html="finishLink"></p>
								<p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
						</div>`
})
