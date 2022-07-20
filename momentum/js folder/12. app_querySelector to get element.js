// =========== Class name으로 모든 Element 찾기 ============ //

// const hellos = document.getElementsByClassName('hello');
// console.log(hellos);


// ============ Tag name 으로 모든 Element 찾기 ========== //
// const title = document.getElementsByTagName('h1');
// console.log(title);


// ============ querySelector 로 element 찾기 ======= //
// document.querySelector       : 첫번째 element를 찾기
// document.querySelectorAll    : 모든 elements를 찾기

// const title = document.querySelector('.hello h1');      // CSS 문자의 Class 인 . 과 그 내부 h1
// console.log(title);

const title = document.querySelectorAll('.hello h1');
console.log(title);

// // querySelector로 Id와 하위 element를 찾을 수 있다.
// const title = document.querySelector('#hello form');
// const title = document.getElementById('hello');     // getElementById 는 해당 ID의 element만 가져올 수 있음

// console.log(title)