// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
for(i=0; i<array.length; i++) {
    key = array[i];
    j=i-1;
    while(j>=0 && key<array[j]) {
        array[j+1] = array[j]
        j-=1;
    }
        array[j+1] = key;
    
}
return array;
}

module.exports = insertionSort;