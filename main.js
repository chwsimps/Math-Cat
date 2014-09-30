var total;
var box1 = document.getElementById('num_one');
var box2 = document.getElementById('num_two');
var submit = document.getElementById('calculateBtn');
var answer = document.getElementById('answer');

submit.onclick = function () {
   total = (Number(box1.value) + Number(box2.value));
   answer.innerHTML = total;
};
