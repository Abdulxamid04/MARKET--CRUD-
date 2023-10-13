const savat =document.querySelector('.basket')
const total = document.getElementById('total')
function getBasket(){
    return localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];
}

let baskets = getBasket();


window.addEventListener('DOMContentLoaded', () =>{
    let display = baskets.map((item) => {
        return`
        <li class="item" data-id="${item.id}">
        <img src="${item.img}" alt="">
        <h2>${item.name}</h2>
        <h2>${item.price}</h2>
        <button>${baskets.length}</button>
    </li>
        `
    })
    display = display.join('');
    savat.innerHTML = display;
    })

    total.innerHTML = `total ${baskets.length}`