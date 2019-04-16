# Consumo de APIs

## Conceptos
API, 
Interfaz, 
HTTP
Verbos HTTP, 
REST, 
Respuestas,
Formatos (JSON),
Promises

### Interfaz
RAE: interfaz.
Del ingl. interface 'superficie de contacto'.

1. f. Conexión o frontera común entre dos aparatos o sistemas independientes.

2. f. Inform. Conexión, física o lógica, entre una computadora y el usuario, un dispositivo periférico o un enlace de comunicaciones.


### API
Una API (Interfaz de Programación de Aplicaciones, en inglés, Application Programming Interface) es una puerta de entrada a información disponible y limitada que ofrece una aplicación web. En otras palabras, es un canal de comunicación entre componentes de software donde un software emisor alimenta de información a otro receptor.

#### Ejemplos
Lo explicaré con un ejemplo. Nubelo es una plataforma web que conglomera profesionales y empresas relacionados con la tecnología y hace uso de tres APIs diferentes, LinkedIn, Facebook y Google+, para permitir el registro de los visitantes. De esta manera se favorece tanto el usuario como la plataforma web de los beneficios de una API, por un lado el visitante no tendrá que crear otro usuario más para otro sitio web y Nubelo aprovecha todo el potencial de las redes sociales para expandir aún más sus servicios. Entrando en detalles, si accedes a Nubelo usando tus datos de LinkedIn ya tendrás más del 50% de tu perfil creado en Nubelo. Nubelo extrae información de tu perfil en LinkedIn y alimenta su base de datos.

TweetDeck era una pequeña aplicación hecha en Adobe Air que hacia uso de la API de Twitter para mostrarnos la actividad de una o varias cuentas a la vez. Con el paso del tiempo el uso de TweetDeck se masificó hasta que un buen día Twitter decidió comprarlo. Esto significaba que TweetDeck tenia características que el equipo de Twitter no habia obtenido aún. De esta forma Twitter se beneficiaba ofreciendo su API a desarrolladores externos y esos desarrolladores tambien fueron beneficiados con la compra de su idea.

### REST

En pocas palabras, REST permite que dos aplicaciones se comuniquen a través de Internet utilizando, en el caso de los navegadores web algunas herramientas que le son propias, particularmente la URL.

Los conceptos REST se denominan recursos. Las respuestas de un recurso pueden ser de distintos tipos. Algunos ejemplos incluyen XML, JSON y RDF. Los recursos son manipulados por componentes. Los componentes solicitan y manipulan recursos a través de una interfaz uniforme estándar. En el caso de HTTP, esta interfaz consta de operaciones HTTP estándar, por ejemplo, GET, PUT, POST, DELETE.

REST se usa normalmente sobre HTTP, principalmente debido a la simplicidad de HTTP y su mapeo muy natural a los principios REST. Sin embargo, REST no está vinculado a ningún protocolo específico.
https://stackoverflow.com/questions/4663927/what-is-rest-slightly-confused

#### Verbos HTTP
HTTP define la sintaxis y la semántica que utilizan los elementos de software de la arquitectura web (clientes, servidores, proxies) para comunicarse. HTTP es un protocolo sin estado, es decir, no guarda ninguna información sobre conexiones anteriores. 

GET, PATCH, PUT, POST, DELETE.
GET: `/users` -- Vemos todos los Usuarios
GET: `/users/:id` -- Vemos el Usuario con el ID definido. i.e. `/users/4` muestra al usuario con el ID 4
POST: `/users` -- Crea un nuevo usuario
PATCH: `/users/:id` -- Edita PARTE DE LOS DATOS de un usuario ya existente con el ID definido
PUT: `/users/:id` -- Edita TODOS LOS DATOS de un usuario ya existente con el ID definido
DELETE: `/users/:id` -- Borra a un usuario ya existente con el ID definido



### Formatos de respuesta
JSON, XML

JSON (JavaScript Object Notation) es un formato para el intercambios de datos, básicamente JSON describe los datos con una sintaxis dedicada que se usa para identificar y gestionar los datos. JSON nació como una alternativa a XML, el fácil uso en javascript ha generado un gran numero de seguidores de esta alternativa. Una de las mayores ventajas que tiene el uso de JSON es que puede ser leído por cualquier lenguaje de programación. Por lo tanto, puede ser usado para el intercambio de información entre distintas tecnologías.


### Recepción de la respuesta
Al hacer un petición a un API tenemos que declarar una función que haga algo cuando recibamos la información que deseamos. Para ello podemos usar una función de JS que se llama Promise. Cuando ésta recibe una respuesta permite transformar esa información paso a paso mediante un método llamado `.then`


### Ejemplos de APIs 
https://jsonplaceholder.typicode.com/
https://reqres.in/


## Ejercicios
1. Usándo el código en `index.html` y la librería `axios`, hacer una petición a `https://jsonplaceholder.typicode.com/users` y pasar el array de usuarios obtenidos a la función `makeTable`.
    
    1.1 Es posible usar `Promises` puras o `async/await`.

2. Al hacer click en cada uno de los usuarios, traer todos posts de ellos e imprimirlos en la parte inferior de la pantalla.

3. Al hacer click en cada uno de los usuarios, traer todos los posts y los comentarios y al lado del título de cada post, imprimir el número de comentarios.
    
    3.1 Para realizar las peticiones de manera eficiente, usar `Promise.all`.
