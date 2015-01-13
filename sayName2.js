//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age){
	this.name = name;
	this.age = age;
}


//Now create three instances of Person with data you make up

  //code here
var jason = new Person('Jason', 27);
var jacob = new Person('Jacob', 21);
var david = new Person('David', 27);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function(){
	alert(this.name);
}

jason.sayName();

var Car = function(color, make, model) {
	this.color = color;
	this.make = make;
	this.model = model;
}

Car.prototype.drive = function() {
	alert('Driving');
};

Car.prototype.stop = function() {
	alert('Stopping');
}

var car1 = new Car('Red', 'Ford', 'Fiesta');
var car2 = new Car('Blue', 'Ford', 'Fiesta');