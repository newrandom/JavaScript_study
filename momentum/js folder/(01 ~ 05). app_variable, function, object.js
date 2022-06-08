// 계산기 변수를 만들고
// 그 안에 function과 object 제작하기
const calculator = {
    add : function(a,b){
        console.log(a + b);
    },
    minus : function(a,b){
        console.log(a - b);
    },
    multiple : function(a,b){
        console.log(a * b);
    },
    divide : function(a,b){
        console.log(a / b);
    },
    power : function(a, b){
        console.log(a ** b);
    }
};

calculator.add(5, 2);
calculator.minus(5, 2);
calculator.multiple(5, 2);
calculator.divide(5, 2);
calculator.power(5, 2);
