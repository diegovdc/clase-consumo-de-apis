Presentación Consumo de APIs


## REST
https://stackoverflow.com/questions/4663927/what-is-rest-slightly-confused

In a nutshell, REST allows you to get two applications talking over the Internet using tools that are similar to what a web browser uses. This is much simpler than SOAP and a lot of what REST does is says, "Hey, things don't have to be so complex."

REST concepts are referred to as resources. A representation of a resource must be stateless. It is represented via some media type. Some examples of media types include XML, JSON, and RDF. Resources are manipulated by components. Components request and manipulate resources via a standard uniform interface. In the case of HTTP, this interface consists of standard HTTP ops e.g. GET, PUT, POST, DELETE.

REST is typically used over HTTP, primarily due to the simplicity of HTTP and its very natural mapping to RESTful principles. REST however is not tied to any specific protocol.


## API
Una API (Interfaz de Programación de Aplicaciones, en inglés, Application Programming Interface) es una puerta de entrada a información disponible y limitada que ofrece una aplicación web. En otras palabras, es un canal de comunicación entre componentes de software donde un software emisor alimenta de información a otro receptor.

### Ejemplos
Lo explicaré con un ejemplo. Nubelo es una plataforma web que conglomera profesionales y empresas relacionados con la tecnología y hace uso de tres APIs diferentes, LinkedIn, Facebook y Google+, para permitir el registro de los visitantes. De esta manera se favorece tanto el usuario como la plataforma web de los beneficios de una API, por un lado el visitante no tendrá que crear otro usuario más para otro sitio web y Nubelo aprovecha todo el potencial de las redes sociales para expandir aún más sus servicios. Entrando en detalles, si accedes a Nubelo usando tus datos de LinkedIn ya tendrás más del 50% de tu perfil creado en Nubelo. Nubelo extrae información de tu perfil en LinkedIn y alimenta su base de datos.

TweetDeck era una pequeña aplicación hecha en Adobe Air que hacia uso de la API de Twitter para mostrarnos la actividad de una o varias cuentas a la vez. Con el paso del tiempo el uso de TweetDeck se masificó hasta que un buen día Twitter decidió comprarlo. Esto significaba que TweetDeck tenia características que el equipo de Twitter no habia obtenido aún. De esta forma Twitter se beneficiaba ofreciendo su API a desarrolladores externos y esos desarrolladores tambien fueron beneficiados con la compra de su idea.

## Interfaz
RAE: interfaz.
Del ingl. interface 'superficie de contacto'.

1. f. Conexión o frontera común entre dos aparatos o sistemas independientes.

2. f. Inform. Conexión, física o lógica, entre una computadora y el usuario, un dispositivo periférico o un enlace de comunicaciones.


## Formatos de respuesta
JSON, XML

JSON (JavaScript Object Notation) es un formato para el intercambios de datos, básicamente JSON describe los datos con una sintaxis dedicada que se usa para identificar y gestionar los datos. JSON nació como una alternativa a XML, el fácil uso en javascript ha generado un gran numero de seguidores de esta alternativa. Una de las mayores ventajas que tiene el uso de JSON es que puede ser leído por cualquier lenguaje de programación. Por lo tanto, puede ser usado para el intercambio de información entre distintas tecnologías.


## Recepción de la respuesta
Al hacer un petición a un API tenemos que declarar una función que haga algo cuando recibamos la información que deseamos. Para ello podemos usar una función de JS que se llama Promise. Cuando ésta recibe una respuesta permite transformar esa información paso a paso mediante un método llamado `.then


## Ejemplos de APIs
https://reqres.in/

Con Axios