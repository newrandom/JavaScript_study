/* 주석은 이렇게 써야 한답니다. */

/* alert('hi');        /* alert function : 경고문 띄우기 */
// console.log(5 + 2);
// console.log(5 * 2);
// console.log(5 / 2);

// variable 적용하기 : const name = value

const a = 10;   // const : 상수, a를 변수로 만듦.
const b = 2;    // b를 변수로 하는 값을 지정

console.log(a + b);
console.log(a * b);
console.log(a / b);


const myName = 'nico';
        // javascript에서 변수의 이름은 camel 기법을 쓴다.
        // python에서는 snake 기법을 쓴다. '_'

// myName = 'nicolas'   // const 로 지정한 변수는 이렇게 바꿀 수 없다.
                        // 에러 발생시킴.

console.log(myName)
console.log('hello ' + myName)
                        // 변수의 값이 string 이기 때문에, 
            // string 으로 감싸주어야 한다.


// 자바스크립트에서 변수를 정해주는 3가지 방법 : let, const, var

// const : 상수, 값이 바뀔수 없음을 나타냄, 변수를 바꿀 필요가 없으면 쓴다. 
            // 만약 const로 지정한 변수의 값을 바꾸게 되면 에러가 발생 
// let : 업데이트가 잦은 변수를 사용 할 때 주로 사용한다.
// var : 상수, 수정가능한 변수 상관없이 사용가능
        // 가장 큰 리스크는 바뀌면 안되는 변수가 바뀔때 오류문을 출력하지 않는다는 것.
        // 그래서 var는 잘 사용하지 않는 것으로 하자

let newName = 'nicol'
console.log(newName)
newName = 'nicolas'
console.log(newName)


