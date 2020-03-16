/**
 WebSite MENU
 */
const MENU=document.getElementById('nav-menu');

MENU.addEventListener('click',(event)=>{
    MENU.querySelectorAll('a').forEach(element=>element.classList.remove('active'));
    event.target.classList.add('active');
});

function slide(val){
document.querySelector('.secondSlide').style.transform=val;

}
document.querySelector('.leftArrow').onclick=function leftArrowClick(){

    let transform=document.querySelector('.secondSlide').style.transform;
    console.log("IN: "+transform);
    if(transform=="translate(-2040px, 0px)"){
    
    transform="translate(-1020px,0px)";
  
    }
    else if(transform=="translate(-1020px, 0px)"){
    transform="translate(-2040px,0)";}
    else
    transform="translate(-1020px,0)";
    
    
    console.log("OUT: "+transform);
    slide(transform);
   

};

document.querySelector('.rightArrow').onclick=function(){
    let transform=document.querySelector('.secondSlide').style.transform;
    console.log(transform);
    if(transform=="translate(-1020px, 0px)")
    transform="translate(1020px, 0px)";
    else
    transform="translate(-1020px, 0px)";
    slide(transform);

};

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

function compareRandom(a, b) {
    return Math.random() - 0.5;
}
document.querySelector('.buttonsSort').onclick=function(){
    let node=document.querySelectorAll('.divPic');
    let node_array = Array.prototype.slice.call(node);
    node_array.sort((compareRandom));
    let el = document.getElementById("portfolioPics");
    while (el.firstChild) {
    el.removeChild(el.firstChild);
    }
    document.getElementById('portfolioPics').append(...node_array);

};
const PIC=document.getElementById('portfolioPics');
PIC.addEventListener('click',(event)=>{
    PIC.querySelectorAll('div').forEach(element=>element.classList.remove('activePic'));
    PIC.querySelectorAll('section').forEach(element=>element.classList.remove('activePic'));
    event.target.parentNode.classList.add('activePic');
    //Костыль
    document.getElementById('containerPortfolio').classList.remove('activePic');
});
const BUTTON=document.getElementById('submit-btn');
const CLOSE_BUTTON=document.getElementById('close-btn');

BUTTON.addEventListener('click',(event)=>{
   const subject=document.getElementById('subject').value.toString();
   const description=document.getElementById('message').value.toString();
   subject!=''?document.getElementById('subject-result').innerText="Subject: "+subject:document.getElementById('subject-result').innerText="Without subject ";
   description!=''?document.getElementById('description-result').innerText="Description: "+description:document.getElementById('description-result').innerText="Without description ";
   document.getElementById('message-block').classList.remove('hidden');
   event.preventDefault(); 
});
CLOSE_BUTTON.addEventListener('click',()=>{
    document.getElementById('subject-result').innerText='';
    document.getElementById('description-result').innerText='';
    document.getElementById('form').reset();
    document.getElementById('message-block').classList.add('hidden');
});
