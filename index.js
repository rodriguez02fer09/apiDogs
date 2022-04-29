const urlApi =  'https://dog.ceo/api/breeds/image/random';//guardamos la url de la api a consultar 
//guardamos los elementos en una variable  con los que vamos a trabajar para traer las imagenes 

const btn = document.querySelector('#random')
const imgDog = document.querySelector('#perrito')

//implementamos el fecth que es con lo que nos vamos a traer los datos 
//iniciar la comunicacion con el servidor de la api atraves de fecth -(por defecto trae get)
function peticion (url){
    fetch(url).then (respuesta => {//traemos la info de la api y la parseamos a formato js ya que nos llega en formato JSON
        console.log(respuesta)//para traer la respuesta de la api 
        return respuesta.json()//la respuesta de la promesa llega en formato  json la transfomar en js 
    }).then(datos => {//
        console.log(datos) 
        imgDog.setAttribute('src', datos.message)
    }).catch(error =>{
        console.log(error)
    })
}
//aqui realizamos la funcion que va a escuchar el evento click
btn.addEventListener('click', function (){
    peticion(urlApi)
})
