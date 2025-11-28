import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, formData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Resumen de Solicitud</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        
        <div className="modal-body">
          <div className="result-section">
            <h3>Respuestas de Fotografías</h3>
            <div className="result-item">
              <span className="label">¿La digitalización de la ID para este folio está a color?</span>
              <span className="value">{formData.digitalizacionColor || 'No seleccionado'}</span>
            </div>
            <div className="result-item">
              <span className="label">¿Los datos en ambas ID, expediente y digitalizada coinciden?</span>
              <span className="value">{formData.datosCoinciden || 'No seleccionado'}</span>
            </div>
          </div>

          <div className="result-section">
            <h3>Respuestas de Búsqueda</h3>
            <div className="result-item">
              <span className="label">¿La información devuelta por tus consultas es vigente?</span>
              <span className="value">{formData.informacionVigente || 'No seleccionado'}</span>
            </div>
            <div className="result-item">
              <span className="label">¿La información devuelta por las consultas coincide con la identificación del cliente?</span>
              <span className="value">{formData.informacionCoincide || 'No seleccionado'}</span>
            </div>
          </div>

          <div className="result-section">
            <h3>Respuesta de Solicitud</h3>
            <div className="result-item">
              <span className="label">Respuesta:</span>
              <span className="value">{formData.respuesta || 'No seleccionado'}</span>
            </div>
            <div className="result-item">
              <span className="label">Motivo:</span>
              <span className="value">{formData.motivo || 'No seleccionado'}</span>
            </div>
            <div className="result-item">
              <span className="label">Observaciones:</span>
              <span className="value observation">{formData.observaciones || 'Sin observaciones'}</span>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn-close" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;