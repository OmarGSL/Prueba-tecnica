import identificacion_frente from "../assets/img-identificaciones/Credencial-frente.webp"
import identificacion_reverso from "../assets/img-identificaciones/Credencial_reverso.webp"
import comprobante from "../assets/img-comprobantes/comprobante.webp"

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
    { id: 'Aprobada', nombre: 'Aprobada' },
    { id: 'Rechazada', nombre: 'Rechazada' }
  ],
  mockMotivos: [
  
    { id: 'Fotografía del Cliente no Coincide', nombre: 'Fotografía del Cliente no Coincide' },
    { id: 'Fotografía Borrosa o manipulada', nombre: 'Fotografía Borrosa o manipulada' },
    { id: 'Fotografía no visible', nombre: 'Fotografía no visible' }
  ],
  mockAgente: {
    nombre: "Yurizty Perez",
    tipoAgente: "Agente Mesa",
    avatar: "👤"
  }

}


export const mockImages = {
  identificacion: [
    identificacion_frente,
    identificacion_reverso,
  ],
  comprobante: [
    comprobante
  ],
  propiedad: [
    ''
  ],
  contrato: [
    ''
  ],
  contacto: [
    ''
  ],
  fotografia: [
    ''
  ]
};


export default {
  data,
  mockImages
};
