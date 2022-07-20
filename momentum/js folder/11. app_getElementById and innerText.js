const title = document.getElementById('title');

// console.dir(title);     // HTML의 정보(object)를 javascript에서 받아옴
// javascript는 HTML element를 가져오지만, HTML 자체를 보여주진 않는다
// javascript는 해당 object를 보여준다.

title.innerText = 'Got you';

console.log(title.id);
console.log(title.className);


// HTML에서 정보를 가져와 Javascript에서 항목을 변경한다.