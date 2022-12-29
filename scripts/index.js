const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const questionTitles = document.querySelectorAll(".question-title");
questions.forEach((question, index) => {
  questionTitles[1].querySelector(".question-title_text").style.fontWeight =
    "bold";
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
    questionTitles.forEach((t) => {
      t.querySelector(".question-title_text").style.fontWeight = "lighter";
    });

    questionTitles.forEach((image) => {
      image
        .querySelector("img")
        .setAttribute("src", "images/icon-arrow-down.svg");
    });

    title.querySelector(".question-title_text").style.fontWeight = "bold";

    title.querySelector("img").setAttribute("src", "images/icon-arrow-up.svg");
  });
});
