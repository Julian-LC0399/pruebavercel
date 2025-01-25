import React, { useState } from 'react';
import PhoneCatalog from './components/PhoneCatalog';
import LeadForm from './components/LeadForm';
import Chatbot from './components/Chatbot';
import PhoneDetails from './components/PhoneDetails'; 
import camon19Image from './images/camon19.png'; // Importa la imagen
import spark8Image from './images/spark8.jpg'; // Importa la imagen
import './style.css';

// Definición de la lista de teléfonos
const phones = [
    {
        model: 'Tecno Camon 19',
        image: camon19Image,
        description: (
            <div>
                <p><strong>Cámara:</strong> Alta resolución con IA para fotos de calidad.</p>
                <p><strong>Pantalla:</strong> 6.8 pulgadas, ideal para multimedia.</p>
                <p><strong>Batería:</strong> Duradera, perfecta para uso diario.</p>
            </div>
        ),
        price: 199.99,
    },
    {
        model: 'Tecno Spark 8',
        image: spark8Image,
        description: (
            <div>
                <p><strong>Cámara:</strong> Doble cámara para capturar momentos.</p>
                <p><strong>Pantalla:</strong> 6.5 pulgadas, buena para juegos y videos.</p>
                <p><strong>Batería:</strong> Duradera, perfecta para uso diario.</p>
            </div>
        ),
        price: 149.99,
    },
];

const App = () => {
    const [selectedPhone, setSelectedPhone] = useState(null);

    const handleSelectPhone = (phone) => {
        setSelectedPhone(phone);
    };

    const handleCloseDetails = () => {
        setSelectedPhone(null);
    };

    return (
        <div className="landing-page">
            <h1>Catálogo de Teléfonos Tecno</h1>
            <PhoneCatalog phones={phones} onSelect={handleSelectPhone} />
            <LeadForm />
            <Chatbot />
            {selectedPhone && (
                <PhoneDetails phone={selectedPhone} onClose={handleCloseDetails} />
            )}
        </div>
    );
};

export default App;