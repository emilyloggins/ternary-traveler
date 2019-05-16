const baseURL = "http://0.0.0.0:8088";

const APIManager = {
    getAllPlaces: function() {
        return fetch(`${baseURL}/places`)
            .then(response => response.json())
    },
    getOnePlace: function (id) {
        return fetch(`${baseURL}/places?id=${id}`)
            .then(response => response.json())
    },
    getAllInterests: function () {
        return fetch(`${baseURL}/interests`)
            .then(response => response.json())
    },
    getOneInterest: function (id) {
        return fetch(`${baseURL}/interests?id=${id}`)
            .then(response => response.json())
    },
    editInterest: function (id, obj) {
        return fetch(`${baseURL}/interests?id=${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
    },
    deleteInterest: function (id) {
        return fetch(`${baseURL}/interests?id=${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
    saveInterest: function (obj) {
        return fetch(`${baseURL}/interests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
    }
}

export default APIManager;
