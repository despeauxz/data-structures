function Stack() {
    this.dataStore = [];
    this.top = 0;
}

Stack.prototype.push = function(element) {
    return this.dataStore[this.top++] = element;
}

Stack.prototype.peek = function() {
    return this.dataStore[this.top-1];
}

Stack.prototype.pop = function() {
    return this.dataStore[--this.top];
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