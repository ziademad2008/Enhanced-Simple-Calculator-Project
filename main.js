function ADD() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum + secondnum;
  document.getElementById("result").innerHTML = result;
}
function SUBTRACT() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum - secondnum;
  document.getElementById("result").innerHTML = result;
}
function MULTIPLY() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum * secondnum;
  document.getElementById("result").innerHTML = result;
}
function DIVIDED() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum / secondnum;
  document.getElementById("result").innerHTML = result;
}
function squareroot() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let result = Math.sqrt(firstnum);
  document.getElementById("result").innerHTML = result;
}

function power() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = Math.pow(firstnum, secondnum);
  document.getElementById("result").innerHTML = result;
}
