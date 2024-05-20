import React from 'react';

const CopiarTexto = ({ texto }) => {
    const copiarTexto = () => {
        navigator.clipboard.writeText(texto);
        alert(`"${texto}" copiado al portapapeles`);
    };

    return (
        <span onClick={copiarTexto} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
      {texto}
    </span>
    );
};

export default CopiarTexto;
