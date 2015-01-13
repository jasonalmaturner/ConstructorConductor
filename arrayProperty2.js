//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here

String.prototype.reverse = function(){
	var returnedString = string.split('');
	returnedString.reverse();
	var string = this.join('');
};

String.prototype.reverse = function(){
	return this.split('').reverse().join('');
}

var test = 'Cruncha muncha cruncha muncha fritos in my butt';
test.reverse();

var name = 'Jason';

name.reverse();
'nosaJ'

'Turner'.reverse();
'renruT'