//Order object definitions
function Order(name) {
	this.name = name;
	this.items = [];
	this.check_in = Date.now();
	this.check_out = 0;
	this.wait_time = 0;
}
//setting constructor type
Order.prototype = {
	constructor: Order
};
//
//methods:
//
Order.prototype = {
	getName		: function() {
								return this.name;
							},
	addItem		: function(item) {
								this.items.push(item);
							},
	toString	:	function() {
								console.log(this.check_in);
							}
};

function getOrderEntry() {
	this.cust_name = document.getElementById('cust_name').value;
	var to_add = new Order(this.cust_name);
	this.order_items = document.getElementById('order_items');
	console.log(this.cust_name);
}
