justificacion de los embebido y referenciado utilizados:

User<1:1>Profile Embebido:en mi caso utile el embebido porque resultaba mas sencillo el utilizarlo para las relaciones uno a uno ya que solamente se nesesita añadir los artributos desesarios mientras que si ubiera utilizado el referenciado tendria que haber importado el modelos y luego en los controladores verificar que esten bien los controladores para los 2 modelos

User 1:N article referenciada: para esta relacion utilice el referenciado porque no sabia el como realizarlo en embebido pero si ubira utilizado el embebido seria bastante pesado el proceso para la creacion del articulo ya que tendria que validar muchos mas datos a la hora de crear articulos porque se acoplaria con los atributos del usutario y el embebido del perfil por eso yo creo que en relaciones de uno a muchos es mejor el referenciado porque es mas sencillo el lidiar con esta cantidad de atributos que tiene los modelos

article 1:N comment refentenciada: en esta relacion se utliso el mismo argumento que en la relacion anterior ya que devuelta no sabria el como utilizar el embebido para esta clase de relaciones

article <N:M>Tags refenrenciado:en este caso el motivo porque se utilizo el referenciado es porque al requerir que varios articulos puedan tener varias etiquetas es mucho mejor hacerlo de esa forma es mas sencillo porque solamente se debe referencia a las tags en cambios si se ubira utilizado el embebido el proceso de añadir tags seria mucho mas molestos y repetitivo lo que generaria muchos fatiga en las creacion de los articulos

instalacion y configuracion del proyecto:
Paso 1:clonar el repositorio
Paso 2: instalar las dependencias del package.json si no sabe debe realizar el siguiente comando en la terminal npm install cors dotenv jsonwebtoken bcrypt cookie-parser express-validator mongoose morgan express
Paso 3:crear el arhivo .env en base a las varibles de entorno que se encuentran en el .env example y rellenar las varibles de entorno
Paso 4: configurar el cors de app.js para que se adapte al puerto utilizado
paso 5: corra el programa con el comando "npm run dev"

endpoints:
auth:
POST /api/auth/register : para registrar un usuario
ejemplo de request:
{
"username":"prueba7",
"gmail":"lautaro4567@mail.com",
"password":"12345678Lo",
"role": "user",
"profiler":{"firstName":"ldfsfl",
"lastName":"Schopenhauer",
"biography":"soy un bago""opcional",
"avatar":"url" "opcional",
birthdate:"1990-05-20" "opcional"
}
}

ejemplo de respuesta:
{
"ok": true,
"msg": "se creo correctamenten el usuario",
"data": {
"username": "prueba7",
"gmail": "lautaro4567@mail.com",
"password": "$2b$10$UliNuQ2DveIs53jYNzAjTOt.0J0UKUR8qBdnF6o1WPrkm.IILNVMS",
"role": "user",
"profiler": {
"firstName": "ldfsfl",
"lastName": "Schopenhauer",
"biography": "soy un bago",
"deletedAt": null
},
"\_id": "68d972462f0b76338f29b404",
"createdAt": "2025-09-28T17:37:10.535Z",
"updatedAt": "2025-09-28T17:37:10.535Z"
}
}

para loguearse:
POST /api/auth/login:
ejemplo de request:
{
"username":"prueba5",
"password":"123456"
}

ejemplo de respuesta:
{
"ok": true,
"msg": "login con exito"
}

Obtener perfil del usuario autenticado(solo admin):
GET /api/auth/profile
ejemplo de respuesta:

{
"user": {
"\_id": "68d40fb971d66d6d791f9393",
"username": "prueba5",
"role": "user",
"firstName": "lautaro",
"lastName": "Schopenhauer",
"biography": "soy un bago"
}
}

Actualizar perfil embebido del usuario autenticado.
PUT /api/auth/profile:
ejemplo de request:
{
"username":"prueba2",
"gmail":"lautaro36@gmail.com",
"password":"112312",
"role": "user",
"profiler":{"firstName":"short",
"lastName":"Schopenhauer",
"biography":"soy un bago"}
}
ejemplo de respuesta:
{
"ok": true,
"data": {
"profiler": {
"firstName": "short",
"lastName": "Schopenhauer",
"biography": "soy un bago"
},
"deletedAt": null,
"\_id": "68d40fb971d66d6d791f9393",
"username": "prueba5",
"gmail": "soyadmin@gmail.com",
"password": "$2b$10$R.NFDYeZD7d/wkeeuWnOg.bywUjKlIeXoASR7YcwUXzdVm4WTpFNC",
"role": "user",
"createdAt": "2025-09-24T15:35:21.868Z",
"updatedAt": "2025-09-28T18:58:16.430Z"
}
}

Logout limpiando cookie de autenticación.
POST /api/auth/logout:
{
"msg": "logout con exito"
}

Articles:
Crear un artículo (solo usuarios autenticados).
POST /api/articles:
ejemplo de request:
{
"title": "porque the bindign of issac es un buen juego ",
"content": "en este articulo se redatara todo las cosas positivas y en base a mi opinio el porque the binging of issac es un buen juego",
"excerpt": "se extrajo la de un post de reddit",
"status": "published",
"author": "",
"tags":"68d3b9f3fd4e393c53103d81"
}

ejemplo de respuesta:
{
"ok": true,
"msg": "se creó correctamente",
"data": {
"title": "porque the bindign of issac es un buen juego ",
"content": "en este articulo se redatara todo las cosas positivas y en base a mi opinio el porque the binging of issac es un buen juego",
"excerpt": "se extrajo la de un post de reddit",
"status": "published",
"tags": [
"68d3b9f3fd4e393c53103d81"
],
"\_id": "68d974f727e16508f016e2a2",
"createdAt": "2025-09-28T17:48:39.080Z",
"updatedAt": "2025-09-28T17:48:39.080Z"
}
}

GET /api/articles → Listar artículos publicados con populate de author y tags.
GET /api/articles/:id → Obtener artículo por ID con populate completo.
GET /api/articles/my → Listar artículos del usuario logueado.
PUT /api/articles/:id → Actualizar artículo
DELETE /api/articles/:id → Eliminación física (solo autor o admin).

Comments:
● POST /api/comments → Crear comentario en artículo.
ejemplo de request:
{
"content":"quiero aparecer en un controladro",
"author":"",
"article":"68d41f086ff02deb4a000f9d"
}
ejemplo de respuesta:

{
"ok": true,
"msg": "se creó correctamente",
"data": {
"content": "quiero aparecer en un controladro",
"author": "68d40fb971d66d6d791f9393",
"article": "68d5106b46c23d9f57f63af5",
"\_id": "68d988a5af7a02e1024847cd",
"createdAt": "2025-09-28T19:12:37.259Z",
"updatedAt": "2025-09-28T19:12:37.259Z"
}
}
● GET /api/comments/article/:articleId → Listar comentarios
● GET /api/comments/my → Listar comentarios del usuario logueado.
● PUT /api/comments/:id → Actualizar comentario (solo autor o admin).
● DELETE /api/comments/:id → Eliminación física de comentario (solo autor o
admin).

Tags:
● POST /api/tags → Crear etiqueta (solo admin).
ejemplo de request:
{
"name":"the binding of issac",
"description":"solamente esto lo usare de prueba"
}

● GET /api/tags → Listar todas las etiquetas.
● GET /api/tags/:id → Obtener etiqueta con populate de artículos asociados
● PUT /api/tags/:id → Actualizar etiqueta (solo admin).
● DELETE /api/tags/:id → Eliminar etiqueta (solo admin).

POST /api/articles/:articleId/tags/:tagId → Agregar etiqueta a artículo. (solo autor
o admin)
● DELETE /api/articles/:articleId/tags/:tagId → Remover etiqueta de artículo. (solo
autor o admin)

Validaciones:
USER:
username: se utilizo una validacion custom para verificar que el username no este repetido en la base de datos
gmail: se utilizo una validacion custom para verificar que el gmail no este repetido en la base de datos
role: se utilizo una validacion custom para verificar que solamente se pueda ingresar user o admin

TAGS:
name:se utilizo una validacion custom para verificar que el name no este repetido en la base de datos

COMMENT:
article: se utilizo una validacion custom para verificar que el article exista en la base de datos
author: se utilizo una validacion custom para verificar que el author exista en la base de datos

ARTICLES:
status: se utilizo una validacion custom para verificar que el status solamente pueda ser published o archived
tags: se utilizo una validacion custom para verificar que las tags existan en la base de datos
