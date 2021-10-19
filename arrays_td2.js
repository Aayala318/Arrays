// REVERSE 
function reverseArray(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
var myArr = [1,2,3,4,5];
reverseArr(myArr);
console.log(myArr)

// ROTATE 
function rotateArr(arr, moveBy) {
    var actualMovementsNeeded;
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length;
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length;
    }
    if (moveBy > 0) {
        for (var i = 0; i < actualMovementsNeeded; i++) {
            var temp = arr[arr.length - 1];
            for (var k = arr.length - 2; k >= 0; k--) {
                arr[k+1] = arr[k];
            }
            arr[0] = temp;
        }
    } else {
        for (var i = 0; i < actualMovementsNeeded; i++) {
            var temp = arr[0];
            for (var k = 1; k < arr.length; k++) {
                arr[k-1] = arr[k];
            }
            arr[arr.length - 1] = temp;
        }
    }
}
var myArr1 = [5,4,3,2,1];
rotateArr(myArr1,-512908378902);
console.log(myArr1)

// ROTATE V2
function rotateArrV2(arr, moveBy) {
    reverseArr(arr);
    var actualMovementsNeeded;
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length;
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length;
    }
    if (moveBy > 0) {
        reverseArr(arr,0,actualMovementsNeeded - 1);
        reverseArr(arr,actualMovementsNeeded, arr.length - 1);
    } else {
        reverseArr(arr,0,arr.length-actualMovementsNeeded - 1);
        reverseArr(arr, arr.length - actualMovementsNeeded,arr.length - 1);
    }
}

// HELPER FUNCTION
function reverseArr(arr, startingInd = 0, endingInd = arr.length - 1) {
    var numIterations = 0;
    for (var k = startingInd; k < (startingInd+endingInd)/2; k++) {
        var temp = arr[k];
        arr[k] = arr[endingInd - numIterations];
        arr[endingInd - numIterations] = temp;
        numIterations++;
    }
}
var x1 = [10,20,30,40,50,60,70,80];
rotateArrV2(x1,2);
console.log(x1)


// FILTER 
function filterRange(arr, minVal, maxVal) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minVal || arr[i] > maxVal) {
            for (var k = i+1; k < arr.length; k++) {
                arr[k-1] = arr[k];
            }
            arr.length--;
            i--;
        }
    }
}
var myArr2 = [6,4,7,8,2,9];
filterRange(myArr2,3,6);
console.log(myArr2);


// FILTER V2
function filterRangeV2(arr, minVal, maxVal) {
    var nextInd = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= minVal && arr[i] <= maxVal) {
            arr[nextInd] = arr[i];
            nextInd++;
        }
    }
    arr.length = nextInd;
}
var myArr3 = [5,3,4,7,9,1];
filterRange(myArr3,2,4);
console.log(myArr3);


// CONCAT
function concatArrays(arr1, arr2) {
    var newArr = [];
    var curInd = 0;
    for (var i = 0; i < arr1.length; i++) {
        newArr[curInd] = arr1[i];
        curInd++;
    }
    for (var i = 0; i < arr2.length; i++) {
        newArr[curInd] = arr2[i];
        curInd++;
    }
    return newArr;
}
var result1 = concatArrays([3], [5, 'Hello']);
console.log(result1);


// CONCAT V2
function concatArraysV2(arr1, arr2) {
    var newArr = [];
    buildFrom(newArr,arr1);
    buildFrom(newArr,arr2);
    return newArr;
}

function buildFrom(arrayToBuild, arrayFrom) {
    var curInd = arrayToBuild.length;
    for (var i = 0; i < arrayFrom.length; i++) {
        arrayToBuild[curInd] = arrayFrom[i];
        curInd++;
    }
}
var result2 = concatArraysV2([1,'Get',7],[2,'Money']);
console.log(result2);