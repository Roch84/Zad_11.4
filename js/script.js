function Phone(brand, price, screen, color) {
	this.brand = brand;
	this.price = price;
	this.screen = screen;
	this.color = color;
	
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " screen size is " + this.screen + " and the price is " + this.price + ".");
	alert("The phone brand is " + this.brand + ", color is " + this.color + " screen size is " + this.screen + " and the price is " + this.price + ".");
}
var iPhone6S = new Phone("Apple", 2250, "18:9", "silver"),
	GalaxyS6 = new Phone ("Samsung", 3880, "14:6", "gold"),
	OnePlus = new Phone ("Microsoft", 4503, "16:8", "black");

iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlus.printInfo();