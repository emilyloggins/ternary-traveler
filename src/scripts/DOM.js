import API from "./dbCalls"

document.querySelector(".interest-output-container")

API.getAllInterests()
.then(parsedResult => parsedResult.forEach(interest => {
    console.log(interest)
    // let block = ``
}))

