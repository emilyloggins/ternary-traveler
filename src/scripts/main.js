import API from "./dbCalls";

//testing import of dbcalls and calling getAllPlaces
API.getAllPlaces()
    .then((places) => {
        console.log("Oh the places you will go:", places);
    });

// const createSaveButton = function () {
//     btnFrag = document.createDocumentFragment()
//     btnEL =  document.createElement("button")
//     btnEl.className = "save-poi-button"
//     btn.textContent = "Let's go!"
//     btnFrag.appendChild(btnEl)
//     let container = document.querySelector(".save-button-container")
//     container.appendChild(btnFrag)
// }

API.getAllInterests()
.then(parsedResult => parsedResult.forEach(interest => {
    let container = document.querySelector(".interest-output-container")
    console.log(interest)
    let block = `
    <h2>${interest.name}</h2>
    <p>${interest.description}</p>
    <p>${interest.cost}</p>`
    container.innerHTML += block
}))

let newInterestButton = document.querySelector(".new-poi-button")
newInterestButton.addEventListener("click", function (event) {
    let form = document.querySelector(".new-poi-form")
    newInterestButton.classList.add("hidden")
    form.classList.remove("hidden")
    // createSaveButton()
    btnFrag = document.createDocumentFragment()
    btnEL =  document.createElement("button")
    btnEl.className = "save-poi-button"
    btn.textContent = "Let's go!"
    btnFrag.appendChild(btnEl)
    let container = document.querySelector(".save-button-container")
    container.appendChild(btnFrag)
})
