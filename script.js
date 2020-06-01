// Create an object that represents a "warrior". This warrior has the following properties:

// equipment, a string with the value "shield".
// energy, defaults to the number 100.
// location, an object with two properties: x and y. The values of x and y are numeric.
// a method walk() which updates the warrior's location. For example, if the warrior's location is x:10 and y:5 then walk(2, 0) will update the location to x:12 and y:5.
// a method strike() which uses up energy. For example, if the warrior's energy is at 100 then strike(25) will reduce the energy to 75.
// a method switchEquipment() which changes the equipment property to the argument (a string). switchEquipment("hammer") will change the equipment property of the warrior to "hammer" instead of "shield".

const thisWarrior = {
  equipment: "shield",
  energy: 100,
  location: {
    x: 0,
    y: 0,
  },
  walk: function (over, up) {
    this.location.x += over;
    this.location.y += up;
    console.log(`the warrior's new locations is`, thisWarrior.location);
  },
  strike: function (damage) {
    this.energy -= damage;
    console.log(`the warrior's new energy is`, thisWarrior.energy);
  },
  switchEquipment: function (newEquipment) {
    this.equipment = newEquipment;
    console.log(`the warrior's new location is`, thisWarrior.equipment);
  },
};

thisWarrior.walk(10, 5);
thisWarrior.strike(25);
thisWarrior.switchEquipment("hammer");
