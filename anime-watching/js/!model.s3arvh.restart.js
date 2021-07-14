
	const productos = [
    {nombre: 'Kimi No Na Wa', src: 'img/hero/hero-1.jpg', resumen: 'Acción - Miserio - Romance'},
    {nombre: 'Los 7 Pecados Capitales', src: 'img/hero/hero-1.jpg', resumen: 'Acción - Miserio - Romance'},
    {nombre: 'ricardo', src: 'img/hero/hero-1.jpg', resumen: 'Acción - Miserio - Romance'},
    {nombre: 'sara', src: 'img/hero/hero-1.jpg', resumen: 'Acción - Miserio - Romance'},
    {nombre: 'recet', src: 'img/hero/hero-1.jpg', resumen: 'Acción - Miserio - Romance'},
    {nombre: 'asdasd', src: 'img/hero/hero-1.jpg', resumen: 'Acción - Miserio - Romance'},
    {nombre: 'pollogordo', src: 'img/hero/hero-1.jpg', resumen: 'Acción - Miserio - Romance'},
    {nombre: 'azul oscuro', src: 'img/hero/hero-1.jpg', resumen: 'Acción - Miserio - Romance'},
    {nombre: 'sword art online', src: 'img/hero/hero-1.jpg', resumen: 'Acción - Miserio - Romance'}
]






const search = document.querySelector("#search");



const container = document.querySelector(".search-model-form");

let gg = document.createElement("ul");
let result = container.appendChild(gg);

const filtrar = ()=>{
  result.innerHTML = '';
  const owo = search.value;
  const searchInput = search.value.toUpperCase();
  for(producto of productos){
      let nombree = producto.nombre.toUpperCase();
    if (nombree.indexOf(searchInput) !== -1) {
     

      result.innerHTML +=  `<a href="#"><li><img src="${producto.src}" width="65px" height="95px"/><span>${producto.nombre}</span></br><span>${producto.resumen}</span></li></a>`;
    } 



if(search.value === ''){

result.innerHTML = 'Escribe al menos una palabra para buscar.';
      }


}
      if(result.innerHTML === ''){
          result.innerHTML += `<li>No hay resultados para "${owo}"</li>`;
      }

}



search.addEventListener("keyup", filtrar);



let div = document.createElement("div");
let body = document.querySelector("body");

div.innerHTML=`<div class="rename">

<i class="fa fa-angle-down" 
style="color:white; transform: skew(15deg) rotate(100deg);
-webkit-transform:skew(15deg) rotate(100deg);
-o-transform: skew(15deg) rotate(100deg);
-moz-transform: skew(15deg) rotate(100deg);
-ms-transform: skew(15deg) rotate(100deg); position:absolute; left:0;"></i>


<i class="fa fa-sun-o"
 style="color:white; transform: skew(15deg) rotate(0deg);
-webkit-transform:skew(15deg) rotate(0deg);
-o-transform: skew(15deg) rotate(0deg);
-moz-transform: skew(15deg) rotate(0deg);
-ms-transform: skew(15deg) rotate(0deg);"></i>

</div>`

body.appendChild(div);



let scrollButton = document.createElement("div");
scrollButton.innerHTML = `<div id="scrollToTopButton"><i class="fa fa-angle-down"></i></div>`;
body.appendChild(scrollButton);


$("#scrollToTopButton").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});



let ContentComment = document.querySelector(".dt-comment"); 
let button = document.querySelector("#enviar");



button.addEventListener("click", function(){
  
let nombre = document.querySelector("#name").value;
let email = document.querySelector("#email").value;
let mensaje = document.querySelector("#mensaje").value;
ContentComment.innerHTML += `<div class="dc-item">
<div class="dc-pic">
    <img src="img/details/comment/comment-3.jpg" alt="">
</div>
<div class="dc-text">
    <h5>${nombre}</h5>
    <span class="c-date">18 julio 2021</span>
    <p>${mensaje}.</p>
    <a href="#" class="reply-btn"><span>Responder</span></a>
</div>
</div>`


});
