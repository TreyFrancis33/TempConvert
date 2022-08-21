function calculateC(temperature) {
    return (temperature - 32) * (5/9);
}
function calculateF(temperature) {
    return (temperature * 9/5) + 32;
}

function clearOne() {
    document.getElementById('tempdiv-one').innerHTML = '';
    document.getElementById('ftext').value = '';
}

function clearTwo() {
    document.getElementById('tempdiv-two').innerHTML = '';
    document.getElementById('ctext').value = '';
}

document.getElementById('clear-one').onclick = () => {
    clearOne();
}

document.getElementById('clear-two').onclick = () => {
    clearTwo();
}

document.getElementById('toC').onclick = () => {
    let temp = document.getElementById('ftext').value;
    temp = Number(temp);
    temp = calculateC(temp);
    document.getElementById('tempdiv-one').innerHTML = temp.toFixed(2) + "°C";
}

document.getElementById('toF').onclick = () => {
    let temp = document.getElementById('ctext').value;
    temp = Number(temp);
    temp = calculateF(temp);
    document.getElementById('tempdiv-two').innerHTML = temp.toFixed(2) + "°F";
}