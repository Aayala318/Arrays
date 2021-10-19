// PUSH 1
function pushToFront(arr, val) {
    var temp1 = arr[0], temp2 = arr[1];
    for (var i = 0; i < arr.length && temp1 != undefined; i++) {
        arr[i+1] = temp1;
        temp1 = temp2;
        temp2 = arr[i+2];
    }
    arr[0] = val;
}
var myArr = [5,3,9,7,2];
pushToFront(myArr,2);
console.log(myArr);

// PUSH 2
function pushToFrontV2(arr, val) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = val;
}
var arr1 = [4,8,3,7,5];
pushToFrontV2(arr1,2)
console.log(arr1);

// POP 
function popFront(arr) {
    var returnVal = arr[0];
    for (var i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop();
    return returnVal;
}
var test1 = [5,7,1,4,6];
var result1 = popFront(test1);
console.log(result1);
console.log(test1);

// INSERT AT
function insertAt(arr, val, ind) {
    for (var i = arr.length - 1; i >= ind; i--) {
        arr[i+1] = arr[i];
    }
    arr[ind] = val;
}
var test1 = [4,7,8,2,5,1];
insertAt(test1,3,10);
console.log(test1);

// REMOVE AT 
function removeAt(arr, ind) {
    ind = Math.floor(ind);
    if (ind >= arr.length || ind < 0) {
        return null;
    }
    var returnVal = arr[ind];
    for (var i = ind + 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop();
    return returnVal;
}
var someArr1 = [4,8,3,10,5,1,3];
var result1 = removeAt(someArr1,4);
console.log(someArr1);

// SWAP PAIRS 
function swapPairs(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}
var test1 = [1,2,3,4];
swapPairs(test1);
console.log(test1);

// NESTED LOOPS
// REMOVE DUPLICATES 
function removeDupesV1(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] == arr[i]) {
            while (arr[i+1] == arr[i]) {
                removeAt(arr,i+1);
            }
        }
    }
}
var x = [1,1,2,2,2,3,3,3,3,4,4];
removeDupesV1(x);
console.log(x);

// ONE LOOP 
// REMOVE DUPLICATES 
function removeDupesV2(arr) {
    if (arr.length <= 1) {
        return;
    }
    var lastUniqueVal = arr[0];
    var nextUniqueInd = 1;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != lastUniqueVal) {
            lastUniqueVal = arr[i];
            arr[nextUniqueInd] = arr[i];
            nextUniqueInd++;
        }
    }
    arr.length = nextUniqueInd;
}
var randomArr = [2,2,6,6,7,7,7,8,11,9,9];
removeDupesV2(randomArr);
console.log(randomArr);