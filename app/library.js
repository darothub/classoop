'use strict'

var Sport = function (name, height, weight){
	this.name = name;
	this.height = height;
	this.weight = weight;
}
Sport.prototype.run = function(distance){
	this.distance = distance;
	this.legs = 2;
	return "hi i am " + this.name + "\n" + "and i can run with " + this.legs + "over " + this.distance;
}	

var Football = function(){
	Sport.call(this)
}
var Athletics = function(){
	Sport.call(this)
}

module.exports = {
	Sport : Sport
};