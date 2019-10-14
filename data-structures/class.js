var Building = function(floors) {
    this.what = "Building";
    this.floors = floors;
}

Building.prototype.countFloors = function() {
    console.log(`I have ${this.floors} floors`);
}

var Duplex = function(floors) {
    this.note = "This is a Duplex";
    Building.call(this, floors);
}

Duplex.prototype = Object.create(Building.prototype);

const myHouse = new Duplex(3);
myHouse.countFloors();