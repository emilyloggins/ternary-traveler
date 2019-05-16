import API from "./dbCalls";

// DISPLAYING ALL INTERESTS ON THE DOM

const getData = () => {
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
}
getData()

// CREATING "NEW POINT OF INTEREST" BUTTON THAT CALLS THE NEW INTEREST FORM

let newInterestButton = document.querySelector(".new-poi-button")
newInterestButton.addEventListener("click", function (event) {
    let form = document.querySelector(".new-poi-form")
    newInterestButton.classList.add("hidden")
    form.classList.remove("hidden")
})

// (EVENT HANDLER) SAVE NEW POINT OF INTEREST AND UPDATE DOM

let saveButton = document.querySelector(".interest-save-button")
saveButton.addEventListener("click", function () {
    console.log("you are killing it!!!")
    let interestName = document.querySelector("#interest-name-input").value
    let interestDescription = document.querySelector("#interest-description-input").value
    let interestCost =  document.querySelector("#interest-cost-input").value

    let newObj = {
        name: interestName,
        description: interestDescription,
        cost: interestCost
    }
    API.saveInterest(newObj)
        .then(interest => {
            API.getOneInterest(interest.id)
            .then(parsedResult => parsedResult.forEach(interest => {
                let container = document.querySelector(".interest-output-container")
                console.log(interest)
                let block = `
                <h2>${interest.name}</h2>
                <p>${interest.description}</p>
                <p>${interest.cost}</p>`
                container.innerHTML += block
            }))
        })
})