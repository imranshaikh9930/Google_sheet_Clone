const functions = document.getElementsByClassName("function-dropdown")[0];
// console.log(functions);

function onClickFunctions(e) {
  const functionClass = document.getElementsByClassName("function-dropdown")[0];
  functionClass.classList.toggle("show");
}
function functionSum(e) {
  activeCell.innerText = "=SUM()";
  activeCell.addEventListener("keydown", calculateSum);
}

function calculateSum(e) {
  if (e.keyCode === 13) {
    const formula = e.target.innerText;

    // console.log("Formula:", formula);

    // Extract numeric values using a regular expression
    const numbers = formula.match(/\d+/g);

    if (!numbers || numbers.length === 0) {
      // Handle the case where there are no numeric values
      activeCell.innerText = "ERROR";
      activeCell.removeEventListener("keydown", calculateSum);
      return;
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      sum += parseInt(numbers[i], 10) || 0;
    }

    activeCell.innerText = sum;
    activeCell.removeEventListener("keydown", calculateSum);
  }
}

function functionAverage(e) {
  activeCell.innerText = "=AVERAGE()";
  activeCell.addEventListener("keydown", calculateAverage);
}

function calculateAverage(e) {
  if (e.keyCode === 13) {
    const formula = e.target.innerText;

    // console.log("Formula:", formula);

    // Extract numeric values using a regular expression
    const numbers = formula.match(/\d+/g);

    if (!numbers || numbers.length === 0) {
      // Handle the case where there are no numeric values
      activeCell.innerText = "ERROR";
      activeCell.removeEventListener("keydown", calculateSum);
      return;
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      sum += parseInt(numbers[i], 10) || 0;
    }

    activeCell.innerText = sum / numbers.length;
    activeCell.removeEventListener("keydown", calculateSum);
  }
}

function functionCount(e) {
  activeCell.innerText = "=COUNT()";
  activeCell.addEventListener("keydown", calculateCount);
}

function calculateCount(e) {
  if (e.keyCode === 13) {
    const formula = e.target.innerText;
    const cellText = formula.match(/\d+/g);
    activeCell.textContent = cellText.length;
    activeCell.removeEventListener("keydown", calculateCount);
  }
}

function functionMax(e) {
  activeCell.innerText = "=MAX()";
  activeCell.addEventListener("keydown", calculateMax);
}

function calculateMax(e) {
  if (e.keyCode === 13) {
    const formula = e.target.innerText;
    const cellText = formula.match(/\d+/g);

    let max = -Infinity;

    for (let i = 0; i < cellText.length; i++) {
      max = Math.max(max, cellText[i]);
    }

    activeCell.textContent = max;
    activeCell.removeEventListener("keydown", calculateCount);
  }
}

function functionMin(e) {
  activeCell.innerText = "=MIN()";
  activeCell.addEventListener("keydown", calculateMin);
}

function calculateMin(e) {
  if (e.keyCode === 13) {
    const formula = e.target.innerText;
    const cellText = formula.match(/\d+/g);

    let max = Infinity;

    for (let i = 0; i < cellText.length; i++) {
      max = Math.min(max, cellText[i]);
    }

    activeCell.textContent = max;
    activeCell.removeEventListener("keydown", calculateCount);
  }
}
