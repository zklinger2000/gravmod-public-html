//Customer object definitions
function Customer(name) {
	this.name = name;
	this.order = [];
	this.check_in = Date.now();
	this.check_out = 0;
	this.wait_time = 0;
}
//setting constructor type
Customer.prototype = {
	constructor: Customer
};
//
//methods:
//
Customer.prototype = {
	readName	: function(element) {
								console.log(element);
							},
	addItem		: function(item) {
								this.order.push(item);
							},
	toString	:	function() {
								console.log(this.check_in);
							}
};

function Take_Order(obj) {
	console.log(obj.toString());
}
