export const deliveries = [
  { id: 'UC-2841', title: 'Documentos legales', from: 'Chapinero', to: 'La Candelaria', date: 'Hoy, 10:42', status: 'En camino', statusColor: '#2D6653', price: '$12.500', icon: 'briefcase-outline' },
  { id: 'UC-2836', title: 'Kit de café artesanal', from: 'Usaquén', to: 'Teusaquillo', date: 'Ayer, 16:20', status: 'Entregado', statusColor: '#55B77A', price: '$9.800', icon: 'cafe-outline' },
  { id: 'UC-2819', title: 'Mercado semanal', from: 'Palermo', to: 'Cedritos', date: '12 jun, 09:15', status: 'Entregado', statusColor: '#55B77A', price: '$15.200', icon: 'basket-outline' },
];

export const trackingSteps = [
  { title: 'Pedido recibido', detail: '16:42 · Confirmado por UrbaCargo', done: true },
  { title: 'Repartidor en camino al origen', detail: '16:48 · Llegará en 4 min', done: true },
  { title: 'Paquete recogido', detail: '17:02 · Todo listo para viajar', done: true },
  { title: 'En camino a tu destino', detail: '17:08 · ETA 17:22', done: false, active: true },
  { title: 'Entrega completada', detail: 'Pendiente', done: false },
];