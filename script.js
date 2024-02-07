const operations = ["+", "-", "*", "/", "%"];
const dropdown = document.querySelector("#operation");
const btn = document.querySelector("button");

for (let i = 0; i < operations.length; i++) {
  let option = document.createElement("option");
  option.classList.add("drop")

  if (operations[i] === "+") {
    option.innerHTML = "+";
  } else {
    option.innerHTML = operations[i];
  }
  // operations[i]++;
  dropdown.add(option);
}

btn.addEventListener("click", () => {
  let firstNumber = Number(document.querySelector("#first").value);
  let secondNumber = Number(document.querySelector("#second").value);
  let dropdown = document.querySelector("#operation").value;

  let para = document.querySelector("h2");

  if (dropdown === "+") {
    para.innerText = firstNumber + secondNumber;
  } else if (dropdown === "-") {
    para.innerText = firstNumber - secondNumber;
  } else if (dropdown === "*") {
    para.innerText = firstNumber * secondNumber;
  } else if (dropdown === "/") {
    para.innerText = firstNumber / secondNumber;
  } else if (dropdown === "%") {
    para.innerText = firstNumber % secondNumber;
  }
});