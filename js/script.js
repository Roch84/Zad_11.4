function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver"),
	GalaxyS6 = new Phone ("Samsung", 3880, "gold"),
	OnePlus = new Phone ("Microsoft", 4503, "black");

iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlus.printInfo();