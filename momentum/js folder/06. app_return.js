const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;

}

const krAge = calculateKrAge(age);

console.log(krAge);



// 이전 시간에는 console.log를 통해 프린트 되는 값들을 확인하는 것에 중점을 두었다.
// 이번 시간에는 return 을 통해 해당 값을 다른 변수에 할당하는 작업을 진행.
const calculator = {
    plus : function(a,b){
        // console.log(a + b);
        return a + b;
    },
    minus : function(a,b){
        // console.log(a - b);
        return a - b;
    },
    multiple : function(a,b){
        // console.log(a * b);
        return a * b;
    },
    divide : function(a,b){
        // console.log(a / b);
        return a / b;
    },
    power : function(a, b){
        // console.log(a ** b);
        return a ** b;
    }
};



const calculatePlus = calculator.plus(2,3);
const calculateMinus = calculator.minus(calculatePlus, 2);
const calculateMultiple = calculator.multiple(2, calculateMinus);
const calculateDivide = calculator.divide(calculatePlus, calculateMinus);
const calculatePower = calculator.power(calculateDivide, calculateMultiple);

// 이후 해당 변수들을 콘솔창에 입력하면 계산 식이 자동으로 뜬다.
// 이는 console.log 와 다른 기능!