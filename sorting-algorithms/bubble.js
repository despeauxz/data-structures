function bubbleSort(array) {
    var wall = array.length;

    // Using the while loop
    while (wall >= 0) {
        for (let i = 0; i < wall; i++) {
            if (array[i] > array[i+1]) {
                array = swap(array, i, i+1);
            }
        }
        wall--;
    }

    // Using the nested loop
    // for (let j = 0; j < wall; j++) {
    //     for (let i = 0; i < wall; i++) {
    //         if (array[i] > array[i+1]) {
    //             array = swap(array, i, i+1);
    //         }
    //     }
    //     wall--;
    // }

    return array;
}

function swap(array, i1, i2) {
    // Bitwise Operator "XOR" which means Equivalent OR
    array[i1] ^= array[i2];
    array[i2] ^= array[i1];
    array[i1] ^= array[i2];
    return array;
}

console.log(bubbleSort([1, 5, 2, 7, 9, 5]));