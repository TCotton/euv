const vm = new Vue({
	el: '#app',
	data: {
		counter: 0,
		x: 0,
		y: 0,
	},
	methods: {
		increase: function(step, event) {
			return this.counter += step;
		},
		updateCoordinates: function(event) {
			this.x = event.clientX;
			this.y = event.clientY;
		},
		alertMe: function() {
			alert('YES!');
		}
	},
	template: `<div id="app">
								<button v-on:click="increase(2, $event)">Click me</button>
								<p>{{ counter }}</p>
								<p v-on:mousemove="updateCoordinates">
								Coordinates: {{x}} / {{y}}
								<span v-on:mousemove.stop="">Dead spot</span>
								</p>
								<input type="text" v-on:keyup.enter.space="alertMe" />
						</div>`
})
