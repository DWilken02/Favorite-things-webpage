window.onload = () => {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
}

function handleFormSubmission(event) {
  event.preventDefault();
  let inputs = document.querySelectorAll("input");
  const inputArray = Array.from(inputs);
  const ulElement = document.createElement("ul");
  const liElement1 = document.createElement("li");
  const liElement2 = document.createElement("li");
  const liElement3 = document.createElement("li");
  const liElement4 = document.createElement("li");
  liElement1.append(inputArray[0].value);
  liElement2.append(inputArray[1].value);
  liElement3.append(inputArray[2].value);
  liElement4.append(inputArray[3].value);
  ulElement.append(liElement1, liElement2, liElement3, liElement4);
  const body = document.querySelector("body");
  body.append(ulElement);
}