// Use a function to get the current value as a number
function getCount() {
  return parseInt(document.querySelector("#countViewer").innerHTML);
}

function plusBtn() {
  const currentCount = getCount(); // Get the current count
  document.querySelector("#countViewer").innerHTML = currentCount + 1; // Update the display
}

function minusBtn() {
  const currentCount = getCount(); // Get the current count
  document.querySelector("#countViewer").innerHTML = currentCount - 1; // Update the display
}
