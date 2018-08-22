(function(){

  function Phone(brand, price, color, os, memory) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.os = os;
  this.memory = memory;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + " Operating system: " + this.os + " and memory size is " + this.memory + ".");
}

  var iPhone6S = new Phone("Apple", 2250, "silver", "iOS 11", "64GB");
  var samsungGalS6 = new Phone("Samsung Galaxy S6", 1500, "black", "Android 7","32GB");
  var onePlusOne  = new Phone("OnePlus One", 1800, "gold", "Android 8","128GB");
  iPhone6S.printInfo();
  samsungGalS6.printInfo();
  onePlusOne.printInfo();

})();
