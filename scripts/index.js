const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const questionTitles = document.querySelectorAll(".question-title");
questions.forEach((question, index) => {
  questionTitles[1].querySelector("h4").style.fontWeight = "bold";
  question.addEventListener("click", (e) => {
    answers.forEach((answer, i) => {
      index == i
        ? answer.classList.add("show")
        : answer.classList.remove("show");
    });
  });
});
questionTitles.forEach((title) => {
  title.addEventListener("click", (e) => {
    questionTitles.forEach((h4) => {
      h4.querySelector("h4").style.fontWeight = "lighter";
    });

    questionTitles.forEach((image) => {
      image
        .querySelector("img")
        .setAttribute("src", "images/icon-arrow-down.svg");
    });

    title.querySelector("h4").style.fontWeight = "bold";

    title.querySelector("img").setAttribute("src", "images/icon-arrow-up.svg");
  });
});
