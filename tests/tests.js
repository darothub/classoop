'use strict';
require('jasmine');
// var assert = chai.assert;
// var expect = chai.expect;
// var should = chai.should();
var myApp = require('../app/library.js');

  describe("Sport Class: Create a sportperson, make him run", function() {

    it("The sportperson should be a type of `object`, and an instance of the `Sport` class", function() {
      var messi = new Sport('footballer', 5.3, 60);
      expect(typeof footballer).toEqual(typeof {});
      expect(footballer instanceof Sport).toBeTruthy();
    });

    it("The name, height and weight of the sport person should be a property of the Sport", function() {
      var ronaldo  = new Sport('footballer', 5.8, 70);
      expect(football.name).toBe('footballer');
      expect(footballer.height).toBe(5.8);
	  expect(footballer.weight).toBe(70);
    });

    it("The sportperson shoud have two(2) legs except in paralympics", function() {
      var messi  = new Sport('footballer', 5.3, 60);
      expect(messi.legs).toBe(2);

      var ronaldo = new Sport('footballer', 5.8, 70);
      expect(ronaldo.legs).toBe(2);
      ronaldo.run(10);
      expect(ronaldo.distance).toBe(10);
      expect((function(){return new Sport('Usain', 'Federer');}()).legs).toBe(2);
    });

    it("The sportperson shoud have two (2) legs except for paralympics", function() {
      var person  = new Sport('MAN', 3.5 , 70);
      expect(man.legs).toBe(0);
      

      
    });

    

  });
