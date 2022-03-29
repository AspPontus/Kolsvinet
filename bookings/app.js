
let table = document.getElementById('table')
let name = document.querySelector('#name')

table.style.display = 'none'

function submitBooking(){
     document.getElementById('booking').style.display = "none";
     table.style.display = 'block'
        return table.innerHTML = `Tack för din bokning ${name.value}! Du kommer få en bekräftelse på sms när restaurangen motagit din bokning!`
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

