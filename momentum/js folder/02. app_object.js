// const playerName = 'nico';
// const playerPoints= 121212;
// const playerHandsome = false;
// const playerFat = 'little bit';

// const player = ['nico',1212,false,'little bit']
                // player[0] == name                
                    // player[1] == points
    // 무슨 key의 value인지 모른다.

const player = {
        // player 라는 object 를 만들고,
    name : 'nico',      // name 이라는 function을 만들었다.
    points : 10,
    fat : true,
};
// console.log(player);
// // console 이라는 object(객체)
// console.log(player.name);
//             // player 라는 object(객체)
// console.log(player['name']);

console.log(player);

player.fat = false;
        // 이미 존재하는 세부 속성을 바꿀 수 있다.

player.lasetName = 'potato';
        // 세부 속성의 key를 추가하고, value를 추가한다.
player.points = 15;
                // 값 재설정
console.log(player.points);

player.points = player.points + 5;
                // 수식설정
console.log(player.points);

player.points += 10;
                // 수식 설정_2  ,, python이랑 같다!

console.log(player);

// python의 dict 형식과 같다고 보면 될듯.

const player = {
        name : 'Nico',
        age : 98,
    }
    console.log(player);
    
    // python : dict 선언하기
    // plyaer = {'name' : 'Nico', 'age' : 98}
    
    // object 수정하기
    player.name = 'nicolas';
    console.log(player);
    
    //python :  dict 수정하기
    // plyer['name'] = 'nicolas'
    
    // object 추가하기
    player.sexy = 'soon';
    console.log(player);
    
    //python:   dict 추가하기
    //player['sexy'] = 'soon'
    
    // python 의 dict 형식과 같다고 보면된다.
    