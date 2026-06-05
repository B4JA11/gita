//function filterAndAverage(arr) {
//    var evens = [];
//    var sum = 0;
    
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i] % 2 === 0) {
//            evens.push(arr[i]);
//        }
//    }
    
//    for (var j = 0; j < evens.length; j++) {
//        sum = sum + evens[j];
//    }
    
//    var result = sum / evens.length;
//    return result;
//}
//console.log(filterAndAverage([1, 2, 3, 4, 5, 6]));


//let text = "I love JavaScript";

//function countWords(str) {
//    var wordsArray = str.split(" ");
//    var count = wordsArray.length;
//    return count;
//}
//console.log(countWords(text));



// function isPrime(n) {
//    if (n < 2) {
//        return false;
//    }
//    for (var i = 2; i < n; i++) {
//        if (n % i === 0) {
//            return false;
//        }
//    }
//    return true;
//}
//console.log(isPrime(7));




//words = ["dog", "elephant", "cat", "hippopotamus"];

// function findLongest(arr) {
//     var longest = "";
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].length > longest.length) {
//             longest = arr[i];
//         }
//     }
//     return longest;
// }
// console.log(findLongest(words));







// let arr = [3, 5, 3, 2, 5, 5, 3, 5];

// function mostFrequent(nums) {
//     var maxCount = 0;
//     var mostFrequentNum;

//     for (var i = 0; i < nums.length; i++) {
//         var count = 0;
//         for (var j = 0; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 count++;
//             }
//         }
//         if (count > maxCount) {
//             maxCount = count;
//             mostFrequentNum = nums[i];
//         }
//     }
//     return mostFrequentNum;
// }
// console.log(mostFrequent(arr));





// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// function countOddEven(numbers) {
//     var evenCount = 0;
//     var oddCount = 0;
    
//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenCount++;
//         } else {
//             oddCount++;
//         }
//     }
//     return "Evens: " + evenCount + ", Odds: " + oddCount;
// }
// console.log(countOddEven(nums));






// let nums2 = [10, 2, 33, 5, 7];

//  function findMin(arr) {
//     var min = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(findMin(nums2));



