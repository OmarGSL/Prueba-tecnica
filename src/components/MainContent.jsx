import { mockImages } from "../data/MockData";
import { useState } from "react";
import { getData } from "../services/service";
import Modal from "./Modal"
import '../styles/MainContent.css';

const MainContent = () => {
  const { mockClientData, mockExpedientes, mockRespuestas, mockMotivos } = getData();
  const [activeTab, setActiveTab] = useState('identificacion');
  const [currentImages, setCurrentImages] = useState(mockImages.identificacion);
  const [expedienteType, setExpedienteType] = useState('credito');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [formData, setFormData] = useState({
    digitalizacionColor: '',
    datosCoinciden: '',
    informacionVigente: '',
    informacionCoincide: '',
    respuesta: '',
    motivo: '',
    observaciones: ''
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentImages(mockImages[tab] || mockImages.identificacion);
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSelectChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTextareaChange = (value) => {
    setFormData(prev => ({
      ...prev,
      observaciones: value
    }));
  };

  const handleFinalizar = () => {
    if (!formData.respuesta) {
      alert('Por favor selecciona una respuesta');
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <div className="main-content">
      <div className="content-header">
        <div className="client-info">
          <div className="info-row">

            <div className="info-item">
              <span className="info-label">Nombre</span>
              <span className="info-value">{mockClientData.nombre}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Fecha de Folio</span>
              <span className="info-value">{mockClientData.fechaFolio}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Folio SAC</span>
              <span className="info-value">{mockClientData.folioSAC}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Folio MV</span>
              <span className="info-value">{mockClientData.folioMV}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Registrado</span>
              <span className="info-value">{mockClientData.registrado}</span>
            </div>
            <div className="info-actions">
              <button className="btn-action">Opciones</button>
              <button className="btn-action">Detalles</button>
            </div>
          </div>
        </div>
      </div>

      <div className="expediente-selector">
        <select
          value={expedienteType}
          onChange={(e) => setExpedienteType(e.target.value)}
          className="expediente-select"
        >
          <option value="">Select</option>
          {mockExpedientes?.map((item) => (
            <option key={item.id} value={item.id}>{item.nombre}</option>
          ))}
        </select>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'identificacion' ? 'active' : ''}`}
            onClick={() => handleTabChange('identificacion')}
          >
            Identificación
          </button>
          <button
            className={`tab ${activeTab === 'comprobante' ? 'active' : ''}`}
            onClick={() => handleTabChange('comprobante')}
          >
            Comprobante
          </button>
          <button
            className={`tab ${activeTab === 'propiedad' ? 'active' : ''}`}
            onClick={() => handleTabChange('propiedad')}
          >
            Propiedad
          </button>
          <button
            className={`tab ${activeTab === 'contrato' ? 'active' : ''}`}
            onClick={() => handleTabChange('contrato')}
          >
            Contrato
          </button>
          <button
            className={`tab ${activeTab === 'contacto' ? 'active' : ''}`}
            onClick={() => handleTabChange('contacto')}
          >
            Contacto
          </button>
          <button
            className={`tab ${activeTab === 'fotografia' ? 'active' : ''}`}
            onClick={() => handleTabChange('fotografia')}
          >
            Fotografía
          </button>
        </div>

        <div className="tab-content">
          <h3>Tab Identificación</h3>
          <div className="images-grid">
            {currentImages.map((img, index) => (
              <div key={index} className="image-card">
                <img src={img} alt={`Imagen ${index + 1}`} />
                <p>Imagen {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="form-sections">
        <div className="form-section">
          <h3>Selecciona tu respuesta de acuerdo a lo que visualizas en las fotografías</h3>
          <div className="checkbox-group">
            <div className="checkbox-question">
              <span>¿La digitalización de la ID para este folio está a color?</span>
              <div className="checkbox-options">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.digitalizacionColor === 'SI'}
                    onChange={(e) => handleCheckboxChange('digitalizacionColor', e.target.checked ? 'SI' : '')}
                  />
                  SI
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.digitalizacionColor === 'NO'}
                    onChange={(e) => handleCheckboxChange('digitalizacionColor', e.target.checked ? 'NO' : '')}
                  />
                  NO
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.digitalizacionColor === 'No Aplica'}
                    onChange={(e) => handleCheckboxChange('digitalizacionColor', e.target.checked ? 'No Aplica' : '')}
                  />
                  No Aplica
                </label>
              </div>
            </div>
            <div className="checkbox-question">
              <span>¿Los datos en ambas ID, expediente y digitalizada coinciden?</span>
              <div className="checkbox-options">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.datosCoinciden === 'SI'}
                    onChange={(e) => handleCheckboxChange('datosCoinciden', e.target.checked ? 'SI' : '')}
                  />
                  SI
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.datosCoinciden === 'NO'}
                    onChange={(e) => handleCheckboxChange('datosCoinciden', e.target.checked ? 'NO' : '')}
                  />
                  NO
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.datosCoinciden === 'No Aplica'}
                    onChange={(e) => handleCheckboxChange('datosCoinciden', e.target.checked ? 'No Aplica' : '')}
                  />
                  No Aplica
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Links Externos */}
        <div className="external-links">
          <span className="links-label">Links Externos</span>
          <div className="links-buttons">
            <button className="link-btn">INE</button>
            <button className="link-btn">CURP</button>
            <button className="link-btn">SEPOMEX</button>
            <button className="link-btn">Otros</button>
          </div>
        </div>

        <div className="form-section">
          <h3>Selecciona tu respuesta de acuerdo al resultado de la búsqueda</h3>
          <div className="checkbox-group">
            <div className="checkbox-question">
              <span>¿La información devuelta por tus consultas es vigente?</span>
              <div className="checkbox-options">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.informacionVigente === 'SI'}
                    onChange={(e) => handleCheckboxChange('informacionVigente', e.target.checked ? 'SI' : '')}
                  />
                  SI
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.informacionVigente === 'NO'}
                    onChange={(e) => handleCheckboxChange('informacionVigente', e.target.checked ? 'NO' : '')}
                  />
                  NO
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.informacionVigente === 'No Aplica'}
                    onChange={(e) => handleCheckboxChange('informacionVigente', e.target.checked ? 'No Aplica' : '')}
                  />
                  No Aplica
                </label>
              </div>
            </div>
            <div className="checkbox-question">
              <span>¿La información devuelta por las consultas coincide con la identificación del cliente?</span>
              <div className="checkbox-options">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.informacionCoincide === 'SI'}
                    onChange={(e) => handleCheckboxChange('informacionCoincide', e.target.checked ? 'SI' : '')}
                  />
                  SI
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.informacionCoincide === 'NO'}
                    onChange={(e) => handleCheckboxChange('informacionCoincide', e.target.checked ? 'NO' : '')}
                  />
                  NO
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.informacionCoincide === 'No Aplica'}
                    onChange={(e) => handleCheckboxChange('informacionCoincide', e.target.checked ? 'No Aplica' : '')}
                  />
                  No Aplica
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="form-section response-section">
          <h3>RESPUESTA DE SOLICITUD</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Respuesta</label>
              <select
                value={formData.respuesta}
                onChange={(e) => handleSelectChange('respuesta', e.target.value)}
              >
                {mockRespuestas?.map((item) => (
                  <option key={item.id} value={item.id}>{item.nombre}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Motivo</label>
              <select
                value={formData.motivo}
                onChange={(e) => handleSelectChange('motivo', e.target.value)}
              >
                {mockMotivos?.map((item) => (
                  <option key={item.id} value={item.id}>{item.nombre}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Observaciones</label>
            <textarea
              placeholder="Observaciones..."
              value={formData.observaciones}
              onChange={(e) => handleTextareaChange(e.target.value)}
              rows="4"
            />
          </div>
          <div className="form-actions">
            <button className="btn-finalizar" onClick={handleFinalizar}>
              Finalizar
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
      />
    </div>
  );
};

export default MainContent;
