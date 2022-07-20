const age = parseInt(prompt('How old are you?'));

'lalala'

if (isNaN(age) || age < 0) {
    console.log('Please write a real positive number');
} else if (age < 18) {
    console.log('You are too young');
} else if (age >= 18 && age <= 50) {
                    // && : and operator , 두가지 조건을 모두 충족 
                    // || : or operator
    console.log('You can drink');
} else if(age > 50 && age <= 80) {
    console.log('You should exercise');
    // console.log('You can\'t drink');
} else if (age > 80) {
    console.log('You can do whatever you want');
}