var cont  = 600;
var verificacion= true;
var contador =0;
var url =`http://xkcd.com/${cont}/info.0.json`

const container = document.getElementById('contain'),star1 = document.getElementById('1'),star2 = document.getElementById('2'),star3 = document.getElementById('3'),star4 = document.getElementById('4'),star5 = document.getElementById('5'),b1=document.getElementById('next'),b2=document.getElementById('preview'), Ptexto = document.getElementById('p_text')

fetch(url).then((response) =>
      response.json()) 
    .then((response) => {
      draw(response)
    })
const draw =(response)=>{
  container.innerHTML =`
   <div class="contain_title">
     <h1 class ="title">${response.title}</h1>
   </div>
   <div class ="contain_date">
     <img class ="imgs" src="${response.img}" alt=""></img>
   </div>
  `   
}
      

const validacion =(dato)=>{
  if(verificacion){
   contador+=1;
   Ptexto.innerHTML=`${contador} Valoraciones (${dato} sobre 5)`
  }else{
    alert('YA VALORASTE ESTE COMIC!!')
  }
  verificacion = false
}

const sendApi=(cont)=>{
  url =`http://xkcd.com/${cont}/info.0.json`
  fetch(url).then((response) =>
      response.json()) 
    .then((response) => { 
      draw(response)
    })
}

star1.addEventListener('click',()=>{
     validacion(1);
})    
star2.addEventListener('click',()=>{
     validacion(2);
})    
star3.addEventListener('click',()=>{
    validacion(3);
})    
star4.addEventListener('click',()=>{
     validacion(4);
})    
star5.addEventListener('click',()=>{
     validacion(5);
})    

b1.addEventListener('click',()=>{
  cont+=1;
  verificacion=true
  if(cont===612){
    cont=601
  }
  console.log(cont)
  sendApi(cont)
})
b2.addEventListener('click',()=>{
  cont-=1;
  verificacion=true
  if(cont===600){
    cont=611
  }
  console.log(cont)
  sendApi(cont)
})

