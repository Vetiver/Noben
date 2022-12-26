document.getElementById('btn1').onclick = function () {
    item1 = document.querySelector('.mind-img-1'),
    item2 = document.querySelector('.mind-img-2'),
    item3 = document.querySelector('.mind-img-3'),
    item4 = document.querySelector('.mind-img-4'), 
    btn1 = document.getElementById('btn1');
    btn2 = document.getElementById('btn2');
    btn3 = document.getElementById('btn3');
    
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');


    item1.classList.remove('active');
    item2.classList.add('active');
    item3.classList.remove('active');
    item4.classList.remove('active');


};
document.getElementById('btn2').onclick = function () {
    item1 = document.querySelector('.mind-img-1'),
    item2 = document.querySelector('.mind-img-2'),
    item3 = document.querySelector('.mind-img-3'),
    item4 = document.querySelector('.mind-img-4'), 
    btn1 = document.getElementById('btn1');
    btn2 = document.getElementById('btn2');
    btn3 = document.getElementById('btn3');
    
    btn2.classList.add('active');
    btn1.classList.remove('active');
    btn3.classList.remove('active');



    item1.classList.remove('active');
    item2.classList.remove('active');
    item3.classList.add('active');
    item4.classList.remove('active');


};
document.getElementById('btn3').onclick = function () {
    item1 = document.querySelector('.mind-img-1'),
    item2 = document.querySelector('.mind-img-2'),
    item3 = document.querySelector('.mind-img-3'),
    item4 = document.querySelector('.mind-img-4'), 
    btn1 = document.getElementById('btn1');
    btn2 = document.getElementById('btn2');
    btn3 = document.getElementById('btn3');
    
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');



    item1.classList.remove('active');
    item2.classList.remove('active');
    item3.classList.remove('active');
    item4.classList.add('active');


};