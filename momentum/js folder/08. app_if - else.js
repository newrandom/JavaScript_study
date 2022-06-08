// condition_1

const age = parseInt(prompt('How old are you?'));

// console.log(isNaN(age));
//             // isNaN() : boolean 형식의 값을 반환, 
//             // NaN인 값인 경우 true, 아니면 false



// 조건문
if (isNaN(age)) {
    /// condition === true
    console.log('Please write a number');
} else {
    /// condition === false
    console.log('Thank you for writing your age.');
}