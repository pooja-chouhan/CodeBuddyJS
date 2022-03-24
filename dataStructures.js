// level {1/2/3}

// level 2

// 1. Write a function to remove all even numbers from an Array.
// ```
// Input array: 
// [1, 3, 4, 6, 7, 8]

const filterArray = (Input) => {
    const filteredData = Input.filter(el => el % 2 !== 0);
    return filteredData;
};


// 2. Replace all the vowels in a string with uppercase vowels.
// ```
// Input string: 'Elie'

const getUpperCaseVowels = (str) => {
    let n = str.length;
    let result = ""
    for (let i = 0; i < n; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"
        ) {
            result += str[i].toUpperCase();
        }
        else {
            result += str[i];
        }
    }
    return result;
}
console.log(getUpperCaseVowels("Elie"))


// 3. Write a function to find the maximum number in an array.
// ```
// Input array: [1, 3, 4, 6, 7, 8, 2, 5]

const getMax = (arr) => {
    let max = 0;
    arr.map(el => {
        if(max < el){
            max = el;
        }
    });
    return max;
}
console.log(getMax([1, 3, 4, 6, 7, 8, 2, 5]))