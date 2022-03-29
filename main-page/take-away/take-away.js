




const menu = [
    itemOne = {
        itemName: document.getElementById('item-name-one').innerHTML = 'Kalvfärsbiffar',
        itemDisc: document.getElementById('disc-item-one').innerHTML = 'Kalvfärsbiffar med dragon och dijon. Serveras med rostade vinterrotsaker & rödvinssås.',
        price: document.getElementById('price-item-one').innerHTML = 210
    },
    itemTwo = {
        itemName: document.getElementById('item-name-two').innerHTML = 'Supermackan BLT',
        itemDisc: document.getElementById('disc-item-two').innerHTML = 'Serveras på rostat levainbröd med bacon, krispsallad, bifftomat & aioli. Toppas med basilika.',
        price: document.getElementById('price-item-two').innerHTML = 175+':-'
    },
    itemThree = {
        itemName: document.getElementById('item-name-three').innerHTML = 'Blomkålssoppa',
        itemDisc: document.getElementById('disc-item-three').innerHTML = 'Krämig blomkålssoppa serveras med rotfruktschips, örtcréme och smörstekt levainbröd.',
        price: document.getElementById('price-item-three').innerHTML = 160
    },
    itemFour = {
        itemName: document.getElementById('item-name-four').innerHTML = 'Kölsvinets Ost & Chark',
        itemDisc: document.getElementById('disc-item-four').innerHTML = 'Fänkålssalami, coppa de nostrano, brieost, comtéost, chutney, rostat surdegsbröd, oliver & cornichorger.',
        price: document.getElementById('price-item-four').innerHTML = 145
    },
    itemFive = {
        itemName: document.getElementById('item-name-five').innerHTML = 'Pizza Crispy Smash',
        itemDisc: document.getElementById('disc-item-five').innerHTML = 'Serveras med tomatsås, grana padano, soltorkade tomater, pinjenötter, krossade serranochips, ruccola och chipotlemajonäs.',
        price: document.getElementById('price-item-five').innerHTML = 155
    },
    itemSix = {
        itemName: document.getElementById('item-name-six').innerHTML = 'Pizza Vegetariano',
        itemDisc: document.getElementById('disc-item-six').innerHTML = 'Serveras med creme fraiche, grana padano, pesto, portabello, vitlök, solrosfrön & tomat.',
        price: document.getElementById('price-item-six').innerHTML = 155
    },
    itemSeven = {
        itemName: document.getElementById('item-name-seven').innerHTML = 'Pizza Winter shrimp',
        itemDisc: document.getElementById('disc-item-seven').innerHTML = 'Serveras med creme fraiche, grandi pascoli, handskalade räkor, fänkål, kronärtskocka citron & dill.',
        price: document.getElementById('price-item-seven').innerHTML = 175
    },
    itemEight = {
        itemName: document.getElementById('item-name-eight').innerHTML = 'Pizza Vesuvio',
        itemDisc: document.getElementById('disc-item-eight').innerHTML = 'Serveras med flatrökt skinka, tomatsås & mozzarella',
        price: document.getElementById('price-item-eight').innerHTML = 95
    }
]

let orderTotal = document.getElementById('order-total')



let cart = []


const order = (itemOne, acc) => {
    let sum = ''
    if(itemOne){
        orderTotal.innerHTML += `
        ${itemOne.itemName} ${itemOne.price}`
        cart.push(itemOne.price)
        for (let i = 0; i < cart.length; i++) {
            const total = cart;
            return document.getElementById('sum').innerHTML ='Total: ' + cart.reduce((acc,curr) => {
                return acc + curr ; 
            })   
        } 
    } 
}


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
            if(link.style.animation){
               link.style.animation = '' 
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/29 + 1 }s`;
            }
        });
        burger.classList.toggle('toggle')
    
    });

 
}
navSlide() 