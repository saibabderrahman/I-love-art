let btn=document.getElementById('btn');
let btnone=document.getElementById('btnOne');
let btntwo=document.getElementById('btnTwo');
let btnthree=document.getElementById('btnThree');
let log=document.getElementById('log_in');

let div=document.querySelectorAll('#div');




btn.addEventListener('click',(e)=>{
     div.forEach((li)=>{
         li.classList.remove('active');
     })
     document.querySelector('.all').classList.add('active')
    
     
})
btnOne.addEventListener('click',(e)=>{
    div.forEach((li)=>{
        li.classList.remove('active');
    })
    document.querySelector('.all1').classList.add('active')
   
    
})
btnTwo.addEventListener('click',(e)=>{
    div.forEach((li)=>{
        li.classList.remove('active');
    })
    document.querySelector('.all2').classList.add('active')
   
    
})
btnThree.addEventListener('click',(e)=>{
    div.forEach((li)=>{
        li.classList.remove('active');
    })
    document.querySelector('.all3').classList.add('active')
   
    
})
log.addEventListener('click',()=>{
    
   
    document.querySelector('.loge').classList.add('active');
   
    
})

document.querySelector('.clouse').addEventListener('click',()=>{

    document.querySelector('.loge').classList.remove('active');

})

