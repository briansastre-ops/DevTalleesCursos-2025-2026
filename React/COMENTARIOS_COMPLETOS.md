# Documentación Completa del Proyecto React - Comentarios Línea por Línea

## 📁 CARPETA 01-REFORZAMIENTO

### ✅ Archivos Comentados:

#### main.ts
- Importa estilos CSS
- Descarga módulos con conceptos de TypeScript/JavaScript (const, let, templates, objetos, etc)
- Importa específicamente el módulo 11-async-await
- Selecciona elemento HTML con id='app' y actualiza su contenido
- Utiliza template literals para inyectar HTML dinámicamente

#### counter.ts
- Función `setupCounter(element)` que crea un contador interactivo
- Mantiene variable `counter` que incrementa con cada click
- Actualiza el contenido del botón con el valor actual
- Inicializa con setCounter(0)

#### bases/01-const-let.ts
- Declara constante `FirstName: string = 'Brian'`
- Declara constante `LastName = 'Sastre'` (TypeScript infiere tipo string)
- Imprime nombre y apellido en consola
- Declara variable mutable `diceNumber = 5` con `let`
- Modifica `diceNumber` a 4
- Verifica si 'LastName' contiene letra 's' con includes()
- Imprime objeto con propiedades verificadas

#### bases/02-template-strings.ts
- Declara constantes `FirstName = 'Brian'` y `LastName = "O'neal"`
- Utiliza template literal con backticks (`) para interpolar variables
- Crea `FullName` combinando firstName y lastName con ${variable}
- Imprime el nombre completo en consola

#### bases/03-objects-literals.ts
- Define interfaz `Person` con propiedades: FirstName, LastName, Age, address
- Define interfaz `Address` con postalCode y city
- Crea objeto literal Person sin tipado
- Crea objeto `ironman` que sigue la interfaz Person
- Imprime ironman en consola
- Ejemplos comentados de destructuring, spread operator (...) y structuredClone()

#### bases/04-arrays.ts
- Los arrays almacenan datos con tipo/forma común
- Array tipado `myArray: number[]` con 10 elementos
- Usa spread operator (...) para copiar array a myArray2
- Agrega elemento 11 a myArray2 con push()
- Imprime ambos arrays (original sin cambios, copia con nuevo elemento)

#### bases/05-functions.ts
- Función tradicional `greet(name): string` que retorna saludo
- Función flecha simplificada `greet2` sin llaves (retorno implícito)
- Las funciones flecha no cambian el contexto `this` (mejor para callbacks)
- Interfaz `User` con propiedades uid y username
- Función `getUser()` que retorna objeto User
- Función flecha `getUser2()` con retorno de objeto entre paréntesis
- Ejemplo de `forEach()` con acceso a valor, índice y array

#### bases/06-obj-destructuring.ts
- Objeto `Persona` con propiedades name, age, key
- Destructuring de objetos: `const {name: ironmanName, age, key} = Persona`
- Interfaz `Hero` con propiedades name, age, key, rank (opcional con ?)
- Función `useContext()` que recibe parámetros destructurados
- Retorna objeto con propiedades derivadas
- Ejemplos de destructuring anidado (comentado)

#### bases/07-array-destructuring.ts
- Array `characterNames` con nombres ['Goku', 'Vegeta', 'Trunks']
- Destructuring de array: `const [, , trunks] = characterNames` (salta primeros dos)
- Función `returnArrayFn()` que retorna array tipado como `const`
- Implementación de hook `useState` que retorna valor inicial y función setter
- La función setter recibe nuevo valor e imprime en consola

#### bases/08-imp-exp.ts
- Función `getHeroById(id)` que busca héroe por ID
- Usa `Array.find()` para buscar el elemento que cumple condición
- Exporta función `getHeroesByOwner(owner)` que filtra héroes por propietario
- Usa `Array.filter()` para obtener todos los que coinciden con el propietario

#### bases/09-promises.ts
- Crea promesa `myPromise` que resuelve después de 2 segundos
- Promesa se rechaza con error "no tienes dinero"
- `.then()` maneja el caso exitoso
- `.catch()` maneja el error
- `.finally()` siempre se ejecuta al terminar la promesa

#### bases/10-fetch-api.ts
- Importa interfaz `GyphyRandomResponse`
- Define API_KEY para autenticación en Giphy
- Realiza fetch a API de Giphy para obtener GIF aleatorio
- Función `createImageInsedeDOM()` crea elemento img e inserta en body
- Encadena promesas con `.then()` para procesar respuesta
- Extrae URL del GIF y crea imagen en el DOM

#### bases/11-async-await.ts
- Función `getRandomGifUrl()` usa `async/await` en lugar de `.then()`
- `await` pausa ejecución hasta que se resuelva fetch
- Desestructura respuesta JSON: `const { data } = await myResponse.json()`
- Retorna URL del GIF original
- `.then()` encadena llamada a función `createImageInsedeDOM()`
- Async/await es más legible que promesas encadenadas

#### bases/data/heroes.data.ts
- Define enum `Owner` con valores DC y Marvel
- Define interfaz `Hero` con propiedades id, name, owner
- Array exportado `heroes` con 6 héroes (Batman, Superman, Flash de DC y Spiderman, Wolverine, Thor de Marvel)

#### bases/data/giphy.response.ts
- Define interfaz `GyphyRandomResponse` (respuesta de API Giphy)
- Incluye múltiples interfaces anidadas: Gif, Images, Analytics, User, etc.
- Interfaz `Images` contiene versiones del GIF en diferentes formatos/tamaños
- Define tipos específicos como `Rating = 'G' | 'PG'` y `Type = 'gif'`

---

## 📁 CARPETA 02-PRIMERO-PASOS

### ✅ Archivos Comentados:

#### src/main.tsx
- Importa `createRoot` de react-dom para renderizar app
- Importa `StrictMode` que activa validaciones adicionales en desarrollo
- Importa componente `FirstStepsApp`
- Renderiza app dentro del elemento HTML con id='root'
- StrictMode envuelve el componente para verificar problemas

#### src/FirstStepsApp.tsx
- Interfaz `ItemInCart` define estructura de producto en carrito
- Array `itemsInCart` con productos y cantidades
- Componente retorna JSX con carrito de compras
- Mapea array de productos y renderiza componente `ItemCounter` para cada uno
- Pasa `productName` como `name` y `quantity` como props

#### src/MyAwesomeApp.tsx
- Importa tipo `CSSProperties` de React para estilos tipados
- Define constantes: firstName, lastName, favoriteGames (array), isActive (boolean)
- Objeto `address` con zipCode y country
- Objeto `myStyles` con propiedades CSS (backgroundColor, borderRadius, etc)
- Componente retorna JSX que:
  - Muestra firstName con atributo data-testid
  - Muestra lastName
  - Muestra juegos favoritos unidos por comas con .join()
  - Muestra resultado de 2+2
  - Muestra "Activo" o "No activo" con operador ternario
  - Serializa objeto address con JSON.stringify y aplica estilos

#### src/helpers/math.helper.ts
- Exporta función `add(a, b)` que suma dos números
- Exporta función `subtract(a, b)` que resta
- Exporta función `multiply(a, b)` que multiplica
- Exporta función `divide(a, b)` que divide

#### src/shopping-cart/ItemCounter.tsx
- Importa `useState` para estado local
- Importa estilos CSS como módulo
- Interfaz `Props` define propiedades del componente
- Destructuring: `{ name, quantity = 1 }` con valor por defecto
- Estado `count` inicializado con `quantity`
- Función `handleAdd()` incrementa contador
- Función `handleSubtract()` decrementa pero no baja de 1
- Texto cambia a color rojo cuando count === 1, negro cuando es mayor
- Retorna JSX con botones +1 y -1, mostrando contador actual

#### src/FirstStepsApp.test.tsx
- Importa utilidades de testing de @testing-library/react
- Usa vitest para testing
- Mock `ItemCounter` para evitar dependencias en pruebas
- Test: verifica que componente coincida con snapshot
- Test: verifica que renderice 3 componentes ItemCounter
- Test: verifica que se pasen props correctas a cada ItemCounter

#### src/helpers/math.helper.test.ts
- Suite de tests para funciones matemáticas
- Test `add`: suma dos positivos, suma dos negativos
- Test `subtract`: resta positivos, resta negativos
- Test `multiply`: multiplica positivos, multiplica con negativos
- Cada test sigue patrón: Arrange (preparar), Act (ejecutar), Assert (verificar)

#### src/shopping-cart/ItemCounter.test.tsx
- Test: renderiza con valores por defecto
- Test: renderiza con cantidad personalizada
- Test: incrementa contador al hacer click en +1
- Test: decrementa contador al hacer click en -1
- Test: no decrementa si quantity es 1
- Test: cambia color a rojo cuando count es 1
- Test: cambia color a negro cuando count > 1

#### src/MyAwesomeApp.test.ts
- Test: renderiza firstName y lastName correctamente
- Test: verifica firstName usando screen.getByTestId
- Test: verifica que componente coincida con snapshot anterior

---

## 📁 CARPETA 03-GIFS-APP

### ✅ Archivos Comentados:

#### src/GifsApp.tsx
- Componente principal que importa sub-componentes
- Importa `useGifs` hook personalizado
- Destructuring: obtiene `handleSearch, previousTerms, handleTermClicked, gifs`
- Retorna JSX con:
  - `CustomHeader` con título y descripción
  - `SearchBar` para búsqueda de GIFs
  - `PreviousSearches` para mostrar búsquedas previas
  - `GifList` para mostrar resultados

#### src/main.tsx
- Importa React y ReactDOM
- Importa componente `GifsApp`
- Renderiza app con StrictMode en elemento con id='root'

#### src/shared/components/SearchBar.tsx
- Importa `useEffect, useState, KeyboardEvent` de React
- Interfaz `Props` define placeholder y callback onQuery
- Estado `query` para valor del input
- `useEffect` configura debounce (600ms) antes de llamar onQuery
- `handleSearch()` llama onQuery inmediatamente si presiona Enter
- Retorna input + botón Buscar

#### src/shared/components/CustomHeader.tsx
- Interfaz `Props` define title y description (opcional)
- Renderiza h1 con title
- Renderiza párrafo con description solo si existe

#### src/gifs/components/GifList.tsx
- Importa tipo `Gif` de interfaz personalizada
- Interfaz `Props` recibe array de GIFs
- Mapea array de gifs y renderiza cada uno en una tarjeta
- Muestra imagen, título, y dimensiones del GIF

#### src/gifs/components/PreviousSearches.tsx
- Interfaz `Props` recibe array de búsquedas previas
- Mapea búsquedas previas como items de lista
- Cada item clickeable ejecuta `onLabelClicked(term)`

#### src/gifs/interfaces/gif.interface.ts
- Interfaz `Gif` define estructura de un GIF
- Propiedades: id (string), title, url, width (number), height (number)

#### src/gifs/interfaces/giphy.response.ts
- Interfaz `GiphyResponse` estructura respuesta de API
- Interfaz `GiphyGif` con todas las propiedades del GIF (type, id, url, etc)
- Interfaz `Images` contiene versiones del GIF (original, downsized, fixed_height, etc)
- Tipos específicos: `Rating = 'G' | 'PG'`, `Type = 'gif'`

#### src/gifs/hooks/useGifs.tsx
- Hook personalizado `useGifs()` gestiona estado de GIFs
- Estado `gifs` almacena array de resultados
- Estado `previousTerms` almacena búsquedas anteriores
- Ref `gifsCache` almacena resultados en cache para evitar re-fetches
- `handleTermClicked()` busca en cache o realiza búsqueda
- `handleSearch()` valida query, evita duplicados, mantiene max 8 términos previos
- Retorna objeto con propiedades y métodos

#### src/gifs/actions/get-gifs-by-query.action.ts
- Función `getGifsByQuery(query)` busca GIFs por término
- Valida que query no esté vacío
- Realiza fetch a API Giphy con límite de 10 resultados
- Mapea respuesta a estructura `Gif` simplificada
- Retorna array de GIFs o array vacío en error

#### src/gifs/api/giphy.api.ts
- Crea instancia de axios con baseURL de API Giphy
- Configura API_KEY desde variables de entorno (VITE_GIPHY_API_KEY)
- Exporta `giphyApi` para usar en acciones

#### src/mock-data/gifs.mock.ts
- Array `mockGifs` con 6 GIFs de ejemplo
- Cada GIF tiene id, title, url y dimensiones (width, height)
- Usado para testing y desarrollo

#### src/counter/hooks/useCounter.tsx
- Hook `useCounter(initialValue = 10)` gestiona contador
- Estado `counter` inicializado con initialValue
- `handleAdd()` incrementa contador
- `handleSubtract()` decrementa contador (usando prev state)
- `handleReset()` restaura valor inicial
- Retorna objeto con counter y métodos

#### src/counter/components/MyCounterApp.tsx
- Componente que usa hook `useCounter`
- Destructuring de métodos: handleAdd, handleSubtract, handleReset
- Renderiza h1 mostrando contador actual
- 3 botones: +1, -1, Reset

#### src/GifsApp.test.tsx
- Test básico: verifica que GifsApp renderice correctamente
- Compara snapshot del componente renderizado

#### src/shared/components/SearchBar.test.tsx
- Test: verifica renderizado correcto (input + button)
- Test: verifica debounce (llama onQuery después de 600ms)
- Test: verifica que solo se llame una vez (debounce) con último valor
- Test: verifica que click en button llame onQuery con valor
- Test: verifica que placeholder se muestre correctamente

#### src/shared/components/CustomHeader.test.tsx
- Test: renderiza title correctamente
- Test: renderiza description solo si se proporciona
- Test: no renderiza párrafo si description no existe

#### src/gifs/hooks/useGifs.test.tsx
- Test: values y métodos iniciales están definidos
- Test: handleSearch retorna lista de 10 GIFs
- Test: handleTermClicked retorna lista de 10 GIFs
- Test: datos se cachean después de primera búsqueda
- Test: máximo 8 términos previos (se elimina el más antiguo)

#### src/counter/hooks/useCounter.test.tsx
- Test: inicializa con valor por defecto 10
- Test: inicializa con valor personalizado
- Test: handleAdd incrementa contador
- Test: handleSubtract decrementa contador
- Test: handleReset restaura valor inicial

#### src/counter/components/MyCounterApp.test.tsx
- Test: renderiza componente con valor inicial 10
- Test: renderiza botones +1, -1 y Reset
- Test: incrementa contador al hacer click en +1
- Test: decrementa contador al hacer click en -1

---

## 📁 CARPETA 04-HOOKS-APP

### ✅ Archivos Comentados:

#### src/main.tsx
- Importa StrictMode y createRoot
- Importa componente TrafficLight
- Renderiza TrafficLight como aplicación principal

#### src/HooksApp.tsx
- Componente simple con tema Tailwind CSS
- Renderiza h1 "Hello world!" con estilos Tailwind

#### src/01-useState/TrafficLigth.tsx
- Objeto `color` mapea nombres de colores a clases Tailwind
- `TrafficLigthsColor` es un tipo derivado de las keys del objeto color
- Estado `light` gestiona color actual (red, yellow, green)
- `handleColorChange()` actualiza el color seleccionado
- Renderiza 3 círculos (semáforo) con colores dinámicos
- Cada círculo muestra color si coincide con light, gris si no
- 3 botones para cambiar color (Rojo, Amarillo, Verde)

---

## 🔑 CONCEPTOS CLAVE DOCUMENTADOS

### TypeScript/JavaScript
- **const/let**: Variables inmutables vs mutables
- **Template literals**: Interpolación con ${}
- **Interfaces**: Contratos de objetos
- **Enums**: Valores constantes
- **Destructuring**: Desempacar objetos y arrays
- **Spread operator**: Copiar y combinar arrays/objetos
- **Funciones flecha**: Sintaxis moderna, no cambian `this`
- **Promesas**: .then(), .catch(), .finally()
- **Async/Await**: Alternativa moderna a promesas
- **Type unions**: Múltiples tipos posibles (number | string)

### React
- **Componentes funcionales**: Componentes como funciones
- **JSX**: Sintaxis que mezcla HTML con JavaScript
- **Props**: Parámetros pasados a componentes
- **Hooks**: useState, useEffect, useRef, useContext
- **Estado**: Gestión con useState
- **Eventos**: onClick, onChange, onKeyDown
- **Renderizado condicional**: Operador ternario, &&
- **Listas**: Mapeo de arrays con .map()
- **Efectos secundarios**: useEffect para lógica extra

### Testing
- **Vitest**: Framework de testing
- **React Testing Library**: Utilidades para testing de componentes
- **Snapshots**: Guardar y comparar estructura HTML
- **Mocking**: Simular funciones/componentes
- **AAA Pattern**: Arrange, Act, Assert

### APIs y Datos
- **Fetch API**: Requests HTTP
- **Axios**: Cliente HTTP alternativo
- **API Giphy**: Búsqueda de GIFs
- **Cacheo**: Almacenar resultados para evitar re-fetches
- **Debounce**: Retardar ejecución de función

---

## 📝 NOTAS IMPORTANTES

1. **TypeScript**: Todo está fuertemente tipado para prevenir errores
2. **Modularidad**: Código dividido en componentes y hooks reutilizables
3. **Testing**: Componentes probados con vitest y react-testing-library
4. **Performance**: Uso de caché para búsquedas, debounce en input
5. **Buenas prácticas**: Separación de componentes, lógica en hooks, pruebas completas
