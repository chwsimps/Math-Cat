var total;
var box1 = document.getElementById('num_one');
var box2 = document.getElementById('num_two');
var submit = document.getElementById('addBtn');
var submit1 = document.getElementById('subBtn');
var submit2 = document.getElementById('multBtn');
var submit3 = document.getElementById('divBtn');
var answer = document.getElementById('answer');

submit.onclick = function () {
   total = (Number(box1.value) + Number(box2.value));
   answer.innerHTML = total;
};

submit1.onclick = function () {
   total = (Number(box1.value) - Number(box2.value));
   answer.innerHTML = total;
};

submit2.onclick = function () {
   total = (Number(box1.value) * Number(box2.value));
   answer.innerHTML = total;
};

submit3.onclick = function () {
   total = (Number(box1.value) / Number(box2.value));
   answer.innerHTML = total;
};
