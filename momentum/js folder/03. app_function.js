// funcion : 계속 반복해서 사용할 수 있는 

// // function을 안쓰면 일일히 써줘야할 것이다.
// console.log('Hello my name is Nico');
// console.log('Hello my name is Dal');
// console.log('Hello my name is Shigatsu');
// console.log('Hello my name is Flynn');

function sayHello(nameOfPerson, age){
    // console.log(nameOfPerson, age);
    console.log('Hello my name is ' + nameOfPerson + 
    " and i'm" + age + 'years old')
}

// sayHello('nico', 10);
// sayHello('dal', 23);
// sayHello('lynn', 21);


const player = {
    name : 'nico',
    sayHello : function(otherPersonsName){
        console.log('hello!' + otherPersonsName + ' nice to meet you !');
    },
};

// console.log(player.name);
player.sayHello('lynn');
player.sayHello('nico');