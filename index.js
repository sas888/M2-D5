const inputMemberName = document.getElementById("memberNameLabel");
const newMember = document.querySelector(".container ul");

const addNewMember = function () {
  if (inputMemberName.value !== "") {
    const newMemberLi = document.createElement("li");
    newMemberLi.innerText = inputMemberName.value;
    newMember.appendChild(newMemberLi);
  }
};

addNewMember();

const resetList = function () {
  newMember.innerHTML = "";
};
