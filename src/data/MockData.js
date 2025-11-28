export const data = {
  mockClientData: {
    nombre: 'Omar Cuamatzi Copalcua',
    fechaFolio: new Date().toISOString().split('T')[0],
    folioSAC: '251-661-5362',
    folioMV: '12345678',
    registrado: 'No'
  },
  mockExpedientes:
    [
      { id: 'credito', nombre: 'Expediente Crédito' },
      { id: 'captacion', nombre: 'Expediente Captación' }
    ]
  ,
  mockRespuestas: [
    { id: 'noaplica', nombre: 'No aplica'},
    { id: 'aprobada', nombre: 'Aprobada' },
    { id: 'rechazada', nombre: 'Rechazada' }
  ],
  mockMotivos: [
    
    { id: 'noaplica', nombre: 'No aplica'},
    { id: 'no-coincide', nombre: 'Fotografía del Cliente no Coincide' },
    { id: 'borrosa', nombre: 'Fotografía Borrosa o manipulada' },
    { id: 'no-visible', nombre: 'Fotografía no visible' }
  ],
  mockAgente: {
    nombre: "Yurizty Perez",
    tipoAgente: "Agente Mesa",
    avatar: "👤"
  }

}


export const mockImages = {
  identificacion: [
    'https://via.placeholder.com/200x150/3498db/ffffff?text=Imagen+1',
    'https://via.placeholder.com/200x150/e74c3c/ffffff?text=Imagen+2',
    'https://via.placeholder.com/200x150/2ecc71/ffffff?text=Imagen+3'
  ],
  comprobante: [
    'https://via.placeholder.com/200x150/9b59b6/ffffff?text=Comprobante+1',
    'https://via.placeholder.com/200x150/f39c12/ffffff?text=Comprobante+2',
    'https://via.placeholder.com/200x150/1abc9c/ffffff?text=Comprobante+3'
  ],
  propiedad: [
    'https://via.placeholder.com/200x150/34495e/ffffff?text=Propiedad+1',
    'https://via.placeholder.com/200x150/e67e22/ffffff?text=Propiedad+2',
    'https://via.placeholder.com/200x150/95a5a6/ffffff?text=Propiedad+3'
  ],
  contrato: [
    'https://via.placeholder.com/200x150/16a085/ffffff?text=Contrato+1',
    'https://via.placeholder.com/200x150/27ae60/ffffff?text=Contrato+2',
    'https://via.placeholder.com/200x150/2980b9/ffffff?text=Contrato+3'
  ],
  contacto: [
    'https://via.placeholder.com/200x150/8e44ad/ffffff?text=Contacto+1',
    'https://via.placeholder.com/200x150/c0392b/ffffff?text=Contacto+2',
    'https://via.placeholder.com/200x150/d35400/ffffff?text=Contacto+3'
  ],
  fotografia: [
    'https://via.placeholder.com/200x150/7f8c8d/ffffff?text=Fotografia+1',
    'https://via.placeholder.com/200x150/bdc3c7/ffffff?text=Fotografia+2',
    'https://via.placeholder.com/200x150/ecf0f1/000000?text=Fotografia+3'
  ]
};


export default {
  data,
  mockImages
};
