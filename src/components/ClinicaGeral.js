import React from 'react';

import './ClinicaGeral.css';

const ClinicaGeral = () => {
    return (
        <div className='wrapper-clinica-geral-container'>
            <h3>Consultas</h3>
            <p>Aqui estão as consultas do seu animal.</p>
            <div className='container-consultas'>
                <iframe className='iframe-consultas' src="https://mivet.com/hospital-veterinario-animalia-barcelona/" frameborder="0" title="MIVET"></iframe>
            </div>
        </div>
    );
};

export default ClinicaGeral;
