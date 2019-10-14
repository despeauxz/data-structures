function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return 2 * pow(x, n-1);
    }
}

function factorial(n) {
    if (n===1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

function reverseInput(array) {
    var reversedArray = [];
    var clonedArray = [...array];

    var addItem = function(orderedArray) {
        if (orderedArray.length > 0) {
            reversedArray.push(orderedArray.pop());
            addItem(orderedArray);
        }
        return;
    };
    addItem(clonedArray);
    return reversedArray;
}

function recursiveMultiplier(array, num) {
    if(array.length === 0) {
        return array;
    }
    var last = array.pop();
    recursiveMultiplier(array, num);
    array.push(last*num);
    return array;
}


console.log(pow(2, 4));
console.log(factorial(5));
console.log(reverseInput([1,2,3,4,5]));
console.log(recursiveMultiplier([1,2,3], 3));