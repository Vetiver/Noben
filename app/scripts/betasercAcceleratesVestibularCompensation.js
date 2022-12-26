/*Переключения*/

document.getElementById('swap-btn-1').onclick = function () {
    
    text1 = document.querySelector('.main-content-1 .main-content-item-2-text'),
    text2 = document.querySelector('.main-content-1 .main-content-item-2-text-2'); 

    text1.classList.toggle('active');
    text2.classList.toggle('active');


};
document.getElementById('swap-btn-2').onclick = function () {
    
    text1 = document.querySelector('.main-content-2 .main-content-item-2-text'),
    text2 = document.querySelector('.main-content-2 .main-content-item-2-text-2'); 

    text1.classList.toggle('active');
    text2.classList.toggle('active');


};
document.getElementById('swap-btn-3').onclick = function () {
    
    text1 = document.querySelector('.main-content-3 .main-content-item-2-text'),
    text2 = document.querySelector('.main-content-3 .main-content-item-2-text-2'); 

    text1.classList.toggle('active');
    text2.classList.toggle('active');


};



document.getElementById('swap-btn-1').onclick = function () {
    
    text1 = document.querySelector('.main-content-1 .main-content-item-2-text'),
    text2 = document.querySelector('.main-content-1 .main-content-item-2-text-2'); 

    text1.classList.toggle('active');
    text2.classList.toggle('active');


};



document.getElementById('wheelitem2').onclick = function () {
    item1 = document.querySelector('.main .main-content-1'),
    item2 = document.querySelector('.main .main-content-2'),
    item3 = document.querySelector('.main .main-content-3'),
    
    wheel = document.querySelector('.wheel');
/*
    if (item1.classList.contains("active")) {
        
        wheel.style.transformOrigin = "center";
        wheel.style.transform = "rotate(-120deg)";
    } else if (item3.classList.contains("active")) {
        wheel.style.transformOrigin = "center";
        wheel.style.transform = "rotate(120deg)";
    } else if (item2.classList.contains("active")) {
        wheel.style.transformOrigin = "center";
        wheel.style.transform = "rotate(0deg)";
    };
*/
    item1.classList.add('active');
    item2.classList.remove('active');
    item3.classList.remove('active');
    
    
    
    

    

};
document.getElementById('wheelitem1').onclick = function () {
    item1 = document.querySelector('.main .main-content-1'),
    item2 = document.querySelector('.main .main-content-2'),
    item3 = document.querySelector('.main .main-content-3'); 

    wheel = document.querySelector('.wheel');
/*
    if (item2.classList.contains("active")) {
        
        wheel.style.transformOrigin = "center";
        wheel.style.transform = "rotate(120deg)";
    } else if (item3.classList.contains("active")) {
        wheel.style.transformOrigin = "center";
        wheel.style.transform = "rotate(-120deg)";
    } else if (item1.classList.contains("active")) {
        wheel.style.transformOrigin = "center";
        wheel.style.transform = "rotate(0deg)";
    };
*/
    item1.classList.remove('active');
    item2.classList.add('active');
    item3.classList.remove('active');


};
document.getElementById('wheelitem3').onclick = function () {
    item1 = document.querySelector('.main .main-content-1'),
    item2 = document.querySelector('.main .main-content-2'),
    item3 = document.querySelector('.main .main-content-3'); 
    wheel = document.querySelector('.wheel');
/*
    if (item1.classList.contains("active")) {
        
        wheel.style.transformOrigin = "center";
        wheel.style.transform = "rotate(120deg)";
    } else if (item2.classList.contains("active")) {
        wheel.style.transformOrigin = "center";
        wheel.style.transform = "rotate(-120deg)";
    } else if (item3.classList.contains("active")) {
        wheel.style.transformOrigin = "center";
        wheel.style.transform = "rotate(0deg)";
    };
*/
    item1.classList.remove('active');
    item2.classList.remove('active');
    item3.classList.add('active');


};









