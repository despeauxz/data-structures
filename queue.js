function Queue() {
    this.dataStore = [];
}

Queue.prototype.enqueue = function(element) {
    this.dataStore.push(element);
}

Queue.prototype.dequeue = function() {
    return this.dataStore.shift();
}

Queue.prototype.size = function() {
    return this.dataStore.length;
}

Queue.prototype.front = function() {
    return this.dataStore[0];
}

Queue.prototype.back = function() {
    return this.dataStore[this.dataStore.length - 1];
}

Queue.prototype.toString = function() {
    var retString = "";
    for(var i = 0;i < this.dataStore.length;++i) {
        retString += this.dataStore[i] + "\n";
    }

    return retString;
}

Queue.prototype.empty = function() {
    if (this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(4);
queue.enqueue("John");
queue.enqueue("Doe");
queue.dequeue();
console.log(queue.empty());
