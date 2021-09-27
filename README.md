# Temática del proyecto

Este proyecto se llama BEDU Music: música para programar ;) 

Será una API, la cual integraremos en un puerto y le integraremos sus respectivos directorios y funcionalidades CRUD (create, read, update, delete), para poder tener el back-end.

Los usuarios van a poder acceder al contenido de la base de datos para poder tener acceso a todos los artistas dependiendo del status de sus cuentas -que pueden ser gratis o premium-. 

Debemos tener en cuenta que hay 4 categorías (entidades):

- Artistas: que pueden publicar y escuchar música
- Usuarios: que pueden escuchar música
- Albums para que el usuario pueda ingresar a ellos
- Conciertos: para saber qué conciertos hay cerca del usuario

Con las funciones del CRUD podremos permitir que los artistas puedan hacer las modificaciones necesarias para que tengan un rol colaborativo en el proyecto, ya que ellos son lo más importante. 


## Historias de usuario
### Usuario
- Yo, como usuario de BEDU Music, es que al momento de crear una playlist tenga orden y claridad en la música.
- Como usuario, me gustaría tener acceso a gran variedad de música, para poder disfrutarla cuando sea.
- Como usuario premium, me gustaría tener acceso a todo el contenido, para no perderme de nada.
- Como usuario free, me gustaría tener acceso a un limitado número de canciones de forma gratutita, por si no puedo ser Premium 
- Siendo usuario, estaría cool poder saber qué conciertos hay cerca de mi ciudad.

### Artista 
- Yo, como artista, puedo subir contenido como canciones y discos, para darme a conocer.
- Como artista, puedo escuchar música y conocer a más personas como yo.
- Como artista, me gustaría poder agregar y/o actualizar datos de canciones o discos.
- Como artista, estaría genial poder saber qué conciertos hay cerca de mi ciudad.
- Siendo un artista, lo más conveniente es poder ver qué disqueras hay dentro de la plataforma, para ofrecer mi trabajo.
- Como artista me gustaria informar a mis fans sobre las noticias sobre mi

## Diagrama de Caso de Uso
![use-cases](https://github.com/Leoguzs/proyectoBack-end/blob/7e3b8f54aa8d2851a4025921e93bcd3beec0e8bc/img/use_cases.png)

## Ambiente de desarrollo

Buscamos cumplir con todas las características requeridas para realizar este proyecto de back-end, es por eso que tenemos nuestro entorno de desarrollo en NODE JS,
en donde utilizaremos paquetes de npm que nos permitirán desarrollarlo. 

Utilizando una base de datos NoSQL como MongoDB, con su objeto de modelado: Moongose, podremos convertir en realidad nuestra API. Sabemos que los paquetes de npm son importantes y lo más idóneo es informar con cuáles estaremos trabajando:

- express 
- body-parser 
- cors
- nodemon
- cookie-parser
- express-session
- mongoose
Con el paquete nodemon podremos correr el proyecto como desarrolladores y podrá ser consultado a través de Postman o Insomnia una vez que la base de datos y el deploy estén listos.


## Imágenes del ambiente de desarrollo y trabajo en equipo

![packages](https://user-images.githubusercontent.com/83996624/132065190-8a240173-a5f1-40b6-af73-85b44ad5af66.png)


## Integrantes del equipo
- Guzmán Sanabria Leonardo 
- Garcia Fougerat Carlos Ivan 
- Mora Suárez Amsterdam Clemente II
- Novales Campos Fernando Itzama 
- Guatemala Mariano Alfredo

