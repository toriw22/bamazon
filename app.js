var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Now1CanTalk",
	database: "bamazonDB"

});

connection.connect(function(err){
	if (err) throw err;
	askItems();
});

function askItems () {	
	connection.query("SELECT name, price, stock_quantity FROM products", function (err, res){
		if (err) throw err;
		console.log(res);
	
		inquirer.prompt([
			{
				type: "list",
				name: "item",
				message: "Which item would you like to buy?",
				choices: function() {
					var choicesArr = [];
					for (var i = 0; i < res.length; i++){
						choicesArr.push(res[i].name);
					}
					return choicesArr;
				}
			},
			{
				type: "input",
				name: "quantity",
				message: "How many would you like to purchase?",
				default: 1,
				validate: function (input){
					var done = this.async();
					setTimeout(function(){
						var inputInt = parseInt(input);
						if (isNaN(inputInt) == true) {
							done("Please enter a number to select the desired quantity.");
							return;
						}
					done(null, true);
					}, 300);
				}
			}
		]).then(function(choice) {
			
			var itemChosen;
			for (var i = 0; i < res.length; i++){
				if (choice.item == res[i].name) {
					itemChosen = res[i];
				}
			}
			if (itemChosen.stock_quantity >= choice.quantity) {
				console.log("Congratulations! You have purchased " + choice.quantity + " " +itemChosen.name + "[s].");
				var newQuantity = itemChosen.stock_quantity - choice.quantity;
				connection.query(
					"UPDATE products SET ? WHERE ?",
					[
						{
							stock_quantity: newQuantity
						},
						{
							name: itemChosen.name
						}
					],
					function(err) {
						if (err) throw err;
						askItems();
					})
			}

			else{
				console.log("Sorry! Insufficient quantity!");
				askItems();
			}
		});
	});	
}

