/**
 WebSite MENU
 */

const LINKS = document.querySelectorAll('.header-nav-list a');
for (let element of LINKS) {
    element.addEventListener('click',()=>{
        event.preventDefault();
        document.querySelector(element.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
};
const MENU=document.getElementById('nav-menu');
const MOBILE=document.getElementById('nav-menu-mobile');

removeLinks(MENU);
removeLinks(MOBILE);
function removeLinks(linkByID){
    linkByID.addEventListener('click',(event)=>{
        if(event.target.getAttribute('href')!=null){
            linkByID.querySelectorAll('a').forEach(element=>element.classList.remove('active'));
        event.target.classList.add('active');}
        
    });
}

document.addEventListener('scroll',()=>{
  
    MENU.querySelectorAll('a').forEach(element=>element.classList.remove('active'));
    let windowScroll=document.body.scrollTop||document.documentElement.scrollTop;
    if(windowScroll<400){
    document.getElementById('nav-home').classList.add('active');}
    else if(windowScroll<900){
        document.getElementById('nav-services').classList.add('active');}
        else if(windowScroll<1500){
            document.getElementById('nav-portfolio').classList.add('active');}
                else if(windowScroll<2300){
                    document.getElementById('nav-about').classList.add('active');}
                    else
                    document.getElementById('nav-contact').classList.add('active');
});

document.addEventListener('scroll',()=>{
  
    MOBILE.querySelectorAll('a').forEach(element=>element.classList.remove('active'));
    let windowScroll=document.body.scrollTop||document.documentElement.scrollTop;
    if(windowScroll<320){
    document.getElementById('nav-home-mobile').classList.add('active');}
    else if(windowScroll<900){
        document.getElementById('nav-services-mobile').classList.add('active');}
        else if(windowScroll<1500){
            document.getElementById('nav-portfolio-mobile').classList.add('active');}
                else if(windowScroll<2300){
                    document.getElementById('nav-about-mobile').classList.add('active');}
                    else
                    document.getElementById('nav-contact-mobile').classList.add('active');
});



let items = document.querySelectorAll('.slider .slide');
let currentItem = 0;


function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {

	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('activeSlide', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('activeSlide');
		
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.leftArrow').addEventListener('click', function() {
	previousItem(currentItem);
	
});

document.querySelector('.rightArrow').addEventListener('click', function() {
		nextItem(currentItem);

});


document.querySelector('.buttonVertical').onclick=function(){
    let bgcolor=document.querySelector('.blackScreenVertical').style.background;
    if(bgcolor=="transparent"||bgcolor=="")
    document.querySelector('.blackScreenVertical').style.background="black";
    else
    document.querySelector('.blackScreenVertical').style.background="transparent";
};

document.querySelector('.buttonHorizontal').onclick=function(){
    let bgcolor=document.querySelector('.blackScreenHorizontal').style.background;
    if(bgcolor=="transparent"||bgcolor=="")
    document.querySelector('.blackScreenHorizontal').style.background="black";
    else
    document.querySelector('.blackScreenHorizontal').style.background="transparent";
};
/**
 PORTFOLIO functionality
 */

const TABS=document.getElementById('portfolioTabs');
TABS.addEventListener('click',(event)=>{
    TABS.querySelectorAll('button').forEach(element=>element.classList.remove('activeTab'));
    event.target.classList.add('activeTab');
});

function shuffle(a, b) {
    return Math.random()- 0.5;
}
document.querySelector('.buttonsSort').onclick=function(){
    let node=document.querySelectorAll('.divPic');
    let node_array = Array.prototype.slice.call(node);
   // node_array.sort((shuffle));
    //node_array.reverse();
   let randomOffset=Math.round(Math.random()*15);
    randomOffset%12===0?randomOffset--:randomOffset;
  for(let i=0;i<randomOffset;i++)
   node_array.unshift(node_array.pop());
  
    let el = document.getElementById("portfolioPics");
    while (el.firstChild) {
    el.removeChild(el.firstChild);
    }
    document.getElementById('portfolioPics').append(...node_array);

};
const PIC=document.getElementById('portfolioPics');
PIC.addEventListener('click',(event)=>{
   
    if(event.target.getAttribute('src')!=null){
    PIC.querySelectorAll('div').forEach(element=>element.classList.remove('activePic'));
    PIC.querySelectorAll('section').forEach(element=>element.classList.remove('activePic'));
    event.target.parentNode.classList.add('activePic');
    //Костыль
//    document.getElementById('containerPortfolio').classList.remove('activePic');
}
});
const BUTTON=document.getElementById('submit-btn');
const CLOSE_BUTTON=document.getElementById('close-btn');

BUTTON.addEventListener('click',(event)=>{
   const subject=document.getElementById('subject').value.toString();
   const description=document.getElementById('message').value.toString();
   subject!=''?document.getElementById('subject-result').innerText="Subject: "+subject:document.getElementById('subject-result').innerText="No subject ";
   description!=''?document.getElementById('description-result').innerText="Description: "+description:document.getElementById('description-result').innerText="No description ";
   document.getElementById('message-block').classList.remove('hidden');
   event.preventDefault(); 
});
CLOSE_BUTTON.addEventListener('click',()=>{
    document.getElementById('subject-result').innerText='';
    document.getElementById('description-result').innerText='';
    document.getElementById('form').reset();
    document.getElementById('message-block').classList.add('hidden');
});
