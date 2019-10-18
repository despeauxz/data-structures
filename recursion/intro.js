function reverse(array) {
    let revArray = [];
    const clonedArray = [...array];
    var addItems = function(orderedArray) {
        if (orderedArray.length > 0) {
            revArray.push(orderedArray.pop());
            addItems(orderedArray);
        }
        return;
    }
    addItems(clonedArray);
    return revArray;
}


function recursiveCountDown(n) {
    while (n > 0) {
        console.log(n);
        return recursiveCountDown(--n);
    }
}


function exponent(base, exp) {
    if (exp === 1) {
        return base;
    }

    return base * exponent(base, --exp);
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

console.log(reverse([1,2,3,4,5,6]));
console.log(recursiveCountDown(20));
console.log(exponent(2, 3));
