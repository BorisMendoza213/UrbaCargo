# UrbaCargo

Aplicación móvil de mensajería exprés y micro-logística sostenible diseñada como prototipo funcional en React Native + Expo.

## Descripción del proyecto

UrbaCargo es una propuesta de servicio urbano de entregas rápidas con enfoque en sostenibilidad, trazabilidad y experiencia de usuario. La app combina dos experiencias principales:

- Cliente: navega por el dashboard, crea nuevos envíos, consulta costos, registra datos del destinatario y sigue el estado del paquete en tiempo real.
- Repartidor: recibe una entrega asignada, valida la ruta, activa su disponibilidad y puede chatear con el cliente directamente.

La interfaz está pensada para un flujo móvil moderno, con paleta verde, tonos suaves y componentes claros para un uso rápido en contexto urbano.

## Funcionalidades implementadas

- Pantalla de login con selección de rol: cliente o repartidor
- Dashboard principal del cliente con resumen de entregas y métricas de impacto
- Creación de un nuevo envío con información de origen, destino y paquete
- Seguimiento del envío con vista tipo mapa, nodos de ruta y progreso del estado
- Chat entre cliente y repartidor
- Vista del repartidor con disponibilidad, entregas asignadas y métricas de rendimiento
- Pantalla de confirmación final y calificación del servicio
- Diseño responsive para web y móvil con Expo Router
- Datos mockeados para simular el flujo real de una operación logística

## Stack tecnológico

- React Native
- Expo
- Expo Router
- TypeScript
- React Native Web

## Estructura principal

- app/: pantallas y flujo de navegación
- components/: componentes reutilizables
- src/: datos, tema y estilos globales
- cap/: capturas de pantalla de la app

## Cómo ejecutar

1. Instala las dependencias:
   npm install
2. Inicia la app:
   npm start
3. Para web:
   npm run web
4. Para validar tipos:
   npm run typecheck

## Capturas de pantalla

### Pantalla principal y flujo del cliente

![Home cliente](cap/Captura%20desde%202026-09-16%2019-59-01.png)
![Dashboard y entregas](cap/Captura%20desde%202026-09-16%2019-59-39.png)
![Formulario de nuevo envío](cap/Captura%20desde%202026-09-16%2019-59-46.png)

### Seguimiento y chat

![Seguimiento de envío](cap/Captura%20desde%202026-09-16%2019-59-57.png)
![Chat con repartidor](cap/Captura%20desde%202026-09-16%2020-00-04.png)

### Repartidor y experiencia final

![Panel del repartidor](cap/Captura%20desde%202026-09-16%2020-00-15.png)
![Resumen y calificación](cap/Captura%20desde%202026-09-16%2020-00-29.png)
![Vista adicional de la app](cap/Captura%20desde%202026-09-16%2020-16-59.png)

## Resultado

Se desarrolló un prototipo completo de una aplicación urbana de mensajería con foco en logística sostenible, experiencia móvil y flujo funcional para clientes y repartidores. El proyecto quedó listo para demostración, pruebas visuales y evolución hacia integración real con backend, autenticación y servicios de ubicación.

