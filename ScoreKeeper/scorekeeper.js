var btnOne = document.querySelector("#p1");
var btnTwo = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var scoreOne = document.querySelector("#p1Display");
var scoreTwo = document.querySelector("#p2Display");
var inputLimit = document.querySelector("input");
var displayLimit = document.querySelector("p span");

var p1 = 0;
var p2 = 0;
var limit = 5;
var play = true;

inputLimit.addEventListener("change", function () {
  reset(this.value);
});

btnOne.addEventListener("click", function() {
  if (play) {
    p1++;
    changeValue(scoreOne,p1);

    if (p1 >= limit) {
      play = false;
      scoreOne.classList.add("winner");
    }
  }
});
btnTwo.addEventListener("click", function() {
  if (play) {
    p2++;
    changeValue(scoreTwo,p2);

    if (p2 >= limit) {
      play = false;
      scoreTwo.classList.add("winner");
    }
  }
});
resetButton.addEventListener("click", function() {
  reset(5);
});
function reset(lt) {
  p1 = 0;
  changeValue(scoreOne,p1);

  p2 = 0;
  changeValue(scoreTwo,p2);

  limit = lt;
  play = true;

  scoreOne.classList.remove("winner");
  scoreTwo.classList.remove("winner");
  inputLimit.value = "";
  displayLimit.textContent = Number(limit);
}
function changeValue(el, nmb) {
  el.innerHTML = nmb;
}
