//1. Print odd numbers in an array

//Anonymous Function
let arr = [1, 2, 4, 2, 5, 7, 2];
let oddNum = function (arr) {
    return arr.filter((elem) => {
        return elem % 2 !== 0;
    })
}
console.log(oddNum(arr).join(" "));

//IIFE
let arr = [1, 2, 4, 2, 5, 7, 2];
(function () {
    arr = arr.filter((elem) => {
        return elem % 2 !== 0;
    })
    console.log(arr);
})()

//---------------------------------------------------------------------------------------------------------------------------------------//

//2. Convert all the strings to title caps in a string array

//Anonymous Function
let stringArr = ["my", "name", "is", "harsh"];
let titleCase = function (strArr) {
    return strArr.map((str) => {
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    })
}
console.log(titleCase(stringArr));

//IIFE
let stringArr = ["my", "name", "is", "harsh"];
(function () {
    let titleCase = stringArr.map((str) => {
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    })
    console.log(titleCase);
})();

//---------------------------------------------------------------------------------------------------------------------------------------//

//3. Sum of all numbers in an array

//Anonymous Function
let arr = [1, 1, 2, 34, 5, 7];
let sum = function (arr) {
    return arr.reduce((acc, item) => {
        return acc + item;
    }, 0)
}
console.log(sum(arr));

//IIFE 
let arr = [1, 1, 2, 34, 5, 7];
(function () {
    let sum = arr.reduce((acc, item) => {
        return acc + item;
    }, 0);
    console.log(sum);
})();


//---------------------------------------------------------------------------------------------------------------------------------------//

//4.Return all the prime numbers in an array

let isPrime = (n) => {
    if (n <= 1) {
        return false;
    } else if (n == 2) {
        return true;
    } else if (n % 2 == 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0)
            return false;
    }
    return true;
}

//Anonymous Function
let arr = [1, 3, 5, 7, 2, 6, 7, 9];
let getPrimeNumbers = function (arr) {
    return arr.filter((num) => {
        return isPrime(num);
    })
}

console.log(getPrimeNumbers(arr));

//IIFE
let arr = [1, 3, 5, 7, 2, 6, 7, 9];
(function (arr) {
    let primeNoArray = arr.filter((num) => {
        return isPrime(num);
    })
    console.log(primeNoArray);
})(arr);

//---------------------------------------------------------------------------------------------------------------------------------------//

//5. Return all the palindromes in an array

let isPalindrome = (str) => {
    return str.split("").reverse().join("") === str;
}

//Anonymous Function
let arr = ['abc', 'aba', 'abba', 'aaba'];
let getPalindromesInArr = function (arr) {
    return arr.filter((str) => {
        return isPalindrome(str);
    })
}
console.log(getPalindromesInArr(arr));

//IIFE
let arr = ['abc', 'aba', 'abba', 'aaba'];
(function (arr) {
    arr = arr.filter((str) => {
        return isPalindrome(str);
    });
    console.log(arr);
})(arr);

//---------------------------------------------------------------------------------------------------------------------------------------//

//6. Return median of two sorted arrays of same size

//Anonymous Function
let arr1 = [1, 12, 15, 26, 38];
let arr2 = [2, 13, 17, 30, 45];
let getMedianOfArrays = function (arr1, arr2, n) {
    let i = 0;
    let j = 0;
    let m1 = -1, m2 = -1;
    for (let count = 0; count <= n; count++) {
        if (i == n) {
            m1 = m2;
            m2 = arr2[0];
            break;
        } else if (j == n) {
            m1 = m2;
            m2 = arr1[0];
            break;
        }
        if (arr1[i] <= arr2[j]) {
            m1 = m2;
            m2 = arr1[i];
            i++;
        } else {
            m1 = m2;
            m2 = arr2[j];
            j++;
        }
    }
    return (m1 + m2) / 2;
}
console.log(getMedianOfArrays(arr1, arr2, arr1.length));

//IIFE
let arr1 = [1, 12, 15, 26, 38];
let arr2 = [2, 13, 17, 30, 45];
(function (arr1, arr2, n) {
    let i = 0;
    let j = 0;
    let m1 = -1, m2 = -1;
    for (let count = 0; count <= n; count++) {
        if (i == n) {
            m1 = m2;
            m2 = arr2[0];
            break;
        } else if (j == n) {
            m1 = m2;
            m2 = arr1[0];
            break;
        }
        if (arr1[i] <= arr2[j]) {
            m1 = m2;
            m2 = arr1[i];
            i++;
        } else {
            m1 = m2;
            m2 = arr2[j];
            j++;
        }
    }
    console.log((m1 + m2) / 2);
})(arr1, arr2, arr1.length);

//---------------------------------------------------------------------------------------------------------------------------------------//

//7. Remove duplicates from an array

//Anonymous Function

let arr = [1, 1, 3, 4, 1, 4];
let removeDuplicates = function (arr) {
    return arr.filter((num, index) => {
        return arr.indexOf(num) === index;
    })
}
console.log(removeDuplicates(arr));

//IIFE

let arr = [1, 1, 3, 4, 1, 4];
(function (arr) {
    arr = arr.filter((num, index) => {
        return arr.indexOf(num) === index;
    });
    console.log(arr);
})(arr);

//---------------------------------------------------------------------------------------------------------------------------------------//

//8. Rotate an array by k times and return the rotated array.


//Anonymous Function

let arr = [1, 2, 3, 4, 5, 6, 7];
let noOfRotation = 5;
let rotateArray = function (arr, n) {
    for (let i = 1; i <= n; i++) {
        let elem = arr.shift();
        arr.push(elem);
    }
    return arr;
}
console.log(rotateArray(arr, noOfRotation));

//IIFE 
let arr = [1, 2, 3, 4, 5, 6, 7];
let noOfRotation = 5;
(function (arr, n) {
    for (let i = 1; i <= n; i++) {
        let elem = arr.shift();
        arr.push(elem);
    }
    console.log(arr);
})(arr, noOfRotation)