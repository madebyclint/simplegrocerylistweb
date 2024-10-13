import * as functions from "./functions.js";

const myForm = document.querySelector(".js-form");

// 1. Check for rawText in search params
const searchParams = new URLSearchParams(window.location.search);
const rawText = searchParams.get("rawText");
if (rawText !== "") {
  functions.prefillData(myForm, false, rawText);
} else {
  functions.prefillData(myForm, true);
}

// 2. Add event listener to form
if (rawText !== "") functions.transformInput(rawText);

// 3. Add event listener to edit button
const editButton = document.querySelector(".js-edit");
editButton.addEventListener("click", () => {
  myForm.classList.toggle("collapsed");
  editButton.innerText = myForm.classList.contains("collapsed")
    ? "Edit"
    : "Close";
});
