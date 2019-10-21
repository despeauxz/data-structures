function Stack(capacity) {
    this.capacity = capacity || Infinity;
    this.dataStore = [];
    this.top = 0;
}

Stack.prototype.push = function(element) {
    if (this.top < this.capacity) {
        return this.dataStore[this.top++] = element;
    }
    return 'Max capacity already reached. Remove element before adding a new one.';
}

Stack.prototype.peek = function() {
    return this.dataStore[this.top-1];
}

Stack.prototype.pop = function() {
    if (this.top === 0) {
        return 'No element inside the stack. Add element before poping.'
    }
    var value = this.dataStore[--this.top];
    delete this._storage[this._count];
    if (this.top < 0) {
        this.top = 0;
    }
    return value;
}

Stack.prototype.clear = function() {
    return this.top = 0;
}

Stack.prototype.length = function() {
    return this.top;
}

var stack = new Stack();
stack.push("Adam");
stack.push("Mariam");
stack.pop();
console.log(stack.dataStore);

var isPalindrome = function(word) {
    var s = new Stack();
    for(var i = 0;i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }

    if (word === rword) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

var factorial = function(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(4));

// Example of things Stack can be used is
// - Palindrome
// - Factorial