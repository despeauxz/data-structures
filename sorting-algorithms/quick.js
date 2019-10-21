function quicksort(array, low, high) {
    if (low === undefined) low = 0;
    if (high === undefined) high = array.length -1;
    if (low < high) {
        var part = partition(array, low, high);
        quicksort(array, low, part-1);
        quicksort(array, part+1, high);
    }
    if (high-low === array.length-1) return array;
}

function partition(arr, lo, hi) {
    var pivot = arr[hi];
    var pivotLoc = lo;

    for(var i = lo;i < hi ;i++) {
        if (arr[i] <= pivot) {
            swap(arr, pivotLoc, i);
            pivotLoc++;
        }
    }
    swap(arr, pivotLoc, hi);
    return pivotLoc;
}

function swap(arr, i1, i2) {
    if(i1 === i2) return;
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    console.log('swapped', arr[i1], arr[i2]);
    return arr;
}

console.log(quicksort([1,5,87,4,12, 70]));
