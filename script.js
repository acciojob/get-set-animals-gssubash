//complete this code
function Animal(specie) {
	this._species = specie;

	Object.defineProperty(this,'species',{
		get:function () {
			return this._species;
		}
	});   
} 

Animal.prototype.makeSound = function () {
	console.log(`The ${this._species} makes a sound`);
} 

function Cat(params) {
	Animal.call(this,params);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.purr = function () {
	console.log('purr');
}


function Dog(params) {
	Animal.call(this,params);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
	console.log('woof');
}



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
