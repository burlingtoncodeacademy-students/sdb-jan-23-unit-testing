let res = {
    name: "Paul",
    age: 27,
    career: "dev",
}

let teamCaptain = ["Captain America", "Bucky", "Hawkeye"]

let sampleError = () => {
    throw new SyntaxError("Sample random error")
}

async function getData() {
    let res = await fetch("https://api.spacexdata.com/v3/capsules")
    let data = await res.json()
    return data
}

function promiseSample() {
    let flag = true
    return new Promise((resolve, reject) => {
        flag ? resolve("Promise resolved") : reject("Promise rejected")
    })
}

module.exports = { res, teamCaptain, sampleError, getData, promiseSample }