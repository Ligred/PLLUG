function min(a, b) {
    if (a > b) {
        return b;
    }
    return a;
}

console.log( min(2, 3) );

//////////////////////////////////////////////////////

function isEven(num) {
    if (num < 0) {
        return "not a positive number"
    } else {
        if (num === 0) {
            return true;
        } else if (num === 1) {
            return false;
        } else {
            return isEven(num - 2);
        }
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/////////////////////////////////////////////////////////////

function countBs(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") count++;
    }
    return count;
}

console.log ( countBs("BBC") );

function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) count++;
    }
    return count;
}

console.log( countChar("kakkerlak", "k") );

//////////////////////////////////////////////////////////////

function range(a, b, step) {
    let arr = [];
    b = (step > 0 || !arguments[2]) ? b + 1 : b - 1;
    for (let i = a; i !== b;) {
        arr.push(i);
        i += (step) ? step : 1;
    }
    return arr;
}

function sum (arr) {
    return arr.reduce(function (sum, current) {
        return sum + current;
    });
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

//////////////////////////////////////////////////////////////

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(arr) {
    let mid = Math.floor(arr.length / 2);
    let end = arr.length - 1;
    let temp;

    for (let i = 0; i < mid; i++) {
        temp = arr[i];
        arr[i] = arr[end];
        arr[end] = temp;
        end--;
    }
}

let arrayValue = [1, 2, 3, 4, 5, 6, 7];

reverseArrayInPlace(arrayValue);
console.log(arrayValue);

