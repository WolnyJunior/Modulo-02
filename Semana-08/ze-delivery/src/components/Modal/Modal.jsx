import { useState } from "react";
import './modal.css'

function AgeVerificationModal({ onConfirm }) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    function handleConfirm(confirmed) {
        setIsConfirmed(confirmed);
        onConfirm(confirmed);
    }

    return (
        <>
            {!isConfirmed && (
                <div className="modal-overlay">
                    <div className="modal">
                        <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Logo Zé Delivery" />
                        <p>Você tem 18 anos ou mais?</p>
                        <button className="button-nao" onClick={() => handleConfirm(false)}>Não</button>
                        <button className="button-sim" onClick={() => handleConfirm(true)}>Sim</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default AgeVerificationModal;
