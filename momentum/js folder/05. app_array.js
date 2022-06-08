// array
// const mon = 'mon';
// const tue = 'tue';
// const wed = 'wed';
// const thu = 'thu';
// const fri = 'fri';
// const sat = 'sat';
// const sun = 'sun';


const daysOfWeek = ['mon' , 'tue' , 'wed' , 'thu' , 'fri' , 'sat'];

// console.log(daysOfWeek)

// const nonsense = [1,2,'hello', false,null,true,undefined,'nico']

console.log(daysOfWeek); // , nonsense)
console.log(daysOfWeek[5]);
                    // index 는 python과 동일하다
// console.log(daysOfWeek[:2])
                    // index slicing 은 안되는듯?

daysOfWeek.push('sun');
            // push == append
console.log(daysOfWeek);




// //
const apple = 'apple';
const potato = 'potato';
        // 일일히 variable을 통해 선언할 수도 있지만.




// list array 에 항목 추가하기  : push() //
const toBuy = ['potato','tomato','pizza'];
        // array 형식을 통해 한꺼번에 선언할 수도 있다.
toBuy.push('kimbab')
        // array 형식에는 push를 할 수 있다.
        // python 의 리스트 형식에 append 하는 것과 같음.

console.log(toBuy)



// list array의 항목 수정하기
toBuy[2] = 'water'
console.log(toBuy)

