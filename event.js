function handleSelect(Id) {
  const playerName = document.getElementById(`player${Id}`).innerText;
  const ul = document.getElementById("ul-Id");
  const li = document.createElement("li");
  li.innerText = playerName;
  var listLength = document
    .getElementById("ul-Id")
    .getElementsByTagName("li").length;

  console.log(listLength);
  if (listLength < 4) {
    ul.append(li);
    document.getElementById(`button${Id}`).disabled = true;
  } else {
    alert("selected player must not be greater than four");
  }
}

// document.getElementById("button1").addEventListener("click", function () {
//   handleSelect("player1", "button1");
// });
// document.getElementById("button2").addEventListener("click", function () {
//   handleSelect("player2", "button2");
// });
// document.getElementById("button3").addEventListener("click", function () {
//   handleSelect("player3", "button3");
// });
// document.getElementById("button4").addEventListener("click", function () {
//   handleSelect("player4", "button4");
// });
// document.getElementById("button5").addEventListener("click", function () {
//   handleSelect("player5", "button5");
// });
// document.getElementById("button6").addEventListener("click", function () {
//   handleSelect("player6", "button6");
// });

function handleCalulate() {
  var playerPrice = document.getElementById("playerPrice").value;
  var listLength = document
    .getElementById("ul-Id")
    .getElementsByTagName("li").length;
  var totalCost = playerPrice * listLength;
  document.getElementById("playerCost").innerText = totalCost;
}
