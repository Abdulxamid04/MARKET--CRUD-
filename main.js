const title = document.getElementById('title');
const price = document.getElementById('price');
const btn = document.getElementById('btn');
const list = document.querySelector('.list')
const savat =document.querySelector('.basket')
let products = getLocalStorge();

let id = new Date().getTime.toString().slice(-5,-1);
let img = "https://picsum.photos/200/300";


btn.addEventListener('click', (e) =>{
    e.preventDefault();
    addToLocalStorage(id,title.value , price.value , img)
    title.value = ''
    price.value = ''
    location.reload(true)
})

function getLocalStorge(){
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}


function addToLocalStorage( id , name , price , img ) {
    let product = { id, name, price , img }
    products.push(product);
    localStorage.setItem('products',JSON.stringify(products))
}

window.addEventListener('DOMContentLoaded', () => {
    let display = products.map((item) =>{
        return `
        <li class="item" data-id="${item.id}">
        <img src="${item.img}" alt="">
        <h2>${item.name}</h2>
        <h2>${item.price}</h2>
        <button id="basket">basket</button>
    </li>
        
        `
    })
    display = display.join('')
   list.innerHTML = display;


   const basket = document.querySelectorAll('#basket')
//    basket.addEventListener('click', (e) => {
//     let el = e.target.parentElement;

//    })
  for (let i = 0; i < basket.length; i++){
    basket[i].addEventListener('click' ,(e) =>{
        let el = e.target.parentElement;
        let uid = el.getAttributeNode("data-id").value
        let res = products.find((item) => item.id === uid)
        addTobasket(res.id, res.name, res.price, res.img)
    })
  }
})

function getBasket(){
    return localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];
}

let baskets = getBasket();
function addTobasket(id , name, price, img){
   let product = {id ,name, price ,img}
   let products = getBasket();
   products.push(product)
   localStorage.setItem('basket' , JSON.stringify(products));
}

window.addEventListener('DOMContentLoaded', () =>{
let display = baskets.map((item) => {
    return`
    <li class="item" data-id="${item.id}">
    <img src="${item.img}" alt="">
    <h2>${item.name}</h2>
    <h2>${item.price}</h2>
    <button id="basket">basket</button>
</li>
    `
})
display = display.join('');
savat.innerHTML = display;
})