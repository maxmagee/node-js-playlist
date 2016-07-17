var events = require('events');
var util = require('util');

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var bob = new Person('bob');

var people = [james, mary, bob];

people.forEach(function(person) {
  person.on('speak', function(message) {
    console.log(person.name + ' said: ' + message);
  });
});

james.emit('speak', 'hey dudes');
mary.emit('speak', 'hi James!');
