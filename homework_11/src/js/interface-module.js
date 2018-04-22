import $ from "jquery";
export default {
	init: function(){
		this.$root = $('#root');
	},
	render: function(){
		this.$root.append('<input id = "first-input" class = "input" type="text" placeholder = "First number...">');
		this.$root.append('<input id = "second-input" class = "input" type="text" placeholder = "Second number...">');
		let signs = ['+','-','*',':'];
		for(let i = 0; i< signs.length; i++){
			this.$root.append(`<button class="button${i}">${signs[i]}</button>`);
		}
		this.$root.append('<input id = "result-input" class = "input" type="text" placeholder = "Result...">');
		this.$root.append('<button class="clear-button">C</button>');
	}
}




