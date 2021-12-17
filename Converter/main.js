document.getElementById("kgsInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerHTML = kgs * 2.2046;
})

document.getElementById("feetInput").addEventListener("input", e => {
    let feet = e.target.value;
    document.getElementById("cmsOutput").innerHTML = feet * 30.48;
})


document.getElementById("tempInput").addEventListener("input", e => {
    let celsius = e.target.value;
    document.getElementById("tempOutput").innerHTML = (celsius * 1.8) + 32;
})

document.getElementById("amtInput").addEventListener("input", e => {
    let amts = e.target.value;
    document.getElementById("amtOutput").innerHTML = amts * 0.0131534996 ;
})

document.getElementById("timeInput").addEventListener("input", e => {
    let timeHour = e.target.value;
    document.getElementById("timeOutput").innerHTML = timeHour * 3600 ;
})


document.getElementById("distanceInput").addEventListener("input", e => {
    let distance = e.target.value;
    document.getElementById("distanceOutput").innerHTML = distance * (1/(588*(10**2))) ;
})


document.getElementById("mileInput").addEventListener("input", e => {
    let distanceMile = e.target.value;
    document.getElementById("mileOutput").innerHTML = distanceMile * 5280 ;
})

