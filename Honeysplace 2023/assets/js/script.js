

const increaseCart = () => {
    let controller = document.querySelector()
    let plus = document.querySelector('.input-text');
    let plusValue =Number(plus.value)
    plusValue++;
    console.log('running');
    console.log(plusValue);

}



let plusContr = document.querySelector('.plus');
let inputField = document.querySelector('.input-text');
var inputValue = inputField.value;
var inputValue = 0


plusContr.addEventListener('click', ()=>{
    inputValue++;
    inputField.textContent = inputValue;
    console.log(inputValue)
})