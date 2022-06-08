
// 상태 창 띄우기
// prompt() 

const age_1 = prompt('How old are you?');
            // 창을 띄우고 메시지를 띄우고, 입력창을 띄움.
            // prompt를 띄우면, 뒤의 모든 javascript는 일시정지
            // 하지만 해당 창의 디자인을 바꿀 수 없는, 오래된 구문임.
            // 반환되는 값은 string 값으로 반환된다.

// console.log(age_1)
// console.log(typeof age_1);



// string 숫자를 int 숫자로 바꾸기
// parseInt()
console.log(typeof age_1, typeof parseInt(age_1))

console.log(age_1, parseInt(age_1))



// 한번에 받는 방법.
const age_2 = parseInt(prompt('How old are you?'));

console.log(age_2)
