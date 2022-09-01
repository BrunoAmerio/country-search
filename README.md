# Desafío para Software Engineers

`Nombre postulante:` Amerio Bruno\
`Link a la app en producción:` https://country-search-seven.vercel.app/

### `npm start`

Antes de ejecutar la aplicación, debe instalar todos los paquetes usando `npm install`. Ahora si, puedes continuar...\
Ejecuta la aplicación en el modo de desarrollo.\
En [http://localhost:3000](http://localhost:3000) podrá verlo en su navegador.

### `Pregunta: `

"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

### `Respuesta:`

Veamos una consulta como esta:\
SELECT \* FROM alumnos WHERE apellido="zamora"\
Sin ningún orden en nuestros datos, MySQL debe leer todos los registros de la tabla "alumnos" y efectuar una comparación entre el campo "apellido"
y la cadena de caracteres "zamora" para encontrar alguna coincidencia.
Para que la consulta anterior se ejecute más rápido en nuestro sistema gestor de base de datos, nos vendría bien crear un índice por apellido.

( Como se va a indexar una columna de cadenas, se debe especificar una longitud prefijada, por ejemplo CHAR(100))

Crearemos un indicie en la columna apellido con el siguiente comando.\
ALTER TABLE alumnos ADD INDEX (apellido)\
De esta forma indicamos a MySQL que genere una lista ordenada de todos los apellidos de la tabla personas. Ahora, localizaríamos fácilmente
a cualquiera con apellido "zamora" yendo al final de la lista a la letra "Z".

Otra causa del bajo rendimiento es debido a la "fragmentacion" de una tabla al eliminar registros de la misma, debido a que el espacio no se reasigna
automáticamente, si no que queda como espacio vacío y recién cuando se realizan nuevas inserciones se va aprovechando.
Con MyISAM e InnoDB de MySQL, disponemos del comando OPTIMIZE TABLE para poder realizar sobre cualquier tabla una optimización que, entre otras cosas,
realiza una defragmentación automática de la tabla.

## Hints

Tecnologías y metodologías implementadas:

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Husky](https://www.npmjs.com/package/husky)
