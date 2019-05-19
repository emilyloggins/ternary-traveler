import API from "./dbCalls";

// EVENT HANDLERS FOR DELETE
const deleteHandler = () => {
    API.deleteInterest()
    .then(getData())
}


// DISPLAYING ALL INTERESTS ON THE DOM

const getData = () => {
    API.getAllInterests()
    .then(parsedResult => parsedResult.forEach(interest => {
        let container = document.querySelector(".interest-output-container")

        let editFrag = document.createDocumentFragment()
        let editEl = document.createElement("img")
        editEl.setAttribute("src", "img/edit.png")
        editEl.className = "interest-icons"
        editEl.id = "interest-edit-icon"
        editFrag.appendChild(editEl)

        let deleteFrag = document.createDocumentFragment()
        let deleteEl = document.createElement("img")
        deleteEl.setAttribute("src", "img/rubbish-bin.png")
        deleteEl.className = "interest-icons"
        deleteEl.id = "interest-delete-icon"
        deleteFrag.appendChild(deleteEl)

        let block = `
        <h2 class="interest-name-header">${interest.name}</h2>
        <p>${interest.description}</p>
        <p>${interest.cost}</p>`
        container.innerHTML += block
        // const deleteIcon = document.getElementById("interest-delete-icon")
        // console.log("HERE", deleteIcon)
        // deleteIcon.addEventListener("click", function (event) {
            //     console.log("you're great!!")
            // })
        let header = document.querySelector(".interest-name-header")
        header.appendChild(editFrag)
        header.appendChild(deleteFrag)
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

// POPULATE LOCATION DROP DOWN
const populateDropDown = () => {
    API.getAllPlaces()
    .then(parsedResult => parsedResult.forEach(place => {
        let select = document.querySelector(".places-select-dropdown")

        let block = `
        <option value="${place.id}">${place.name}</option>`

        select.innerHTML += block;
    }))
}

populateDropDown()

