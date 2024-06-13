import React, { useEffect, useState } from "react";

const MarketStats = () => {
  const [marketData, setMarketData] = useState<any>(null); // Cambia 'any' por el tipo de datos que esperas recibir

  useEffect(() => {
    // Aquí puedes hacer una llamada a tu API o servicio para obtener los datos del mercado en tiempo real
    // Ejemplo:
    // const fetchData = async () => {
    //   const response = await fetch("URL_DE_TU_API");
    //   const data = await response.json();
    //   setMarketData(data);
    // };
    // fetchData();

    // Como es un ejemplo, inicializamos con datos ficticios
    const mockData = {
      precioBitcoin: 45000,
      precioEthereum: 3000,
      volumenTransacciones: 1000000,
    };
    setMarketData(mockData);
  }, []);

  return (
    <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
      <h2 className="mb-4 text-xl font-semibold">Estadísticas del Mercado</h2>
      {marketData ? (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Precio de Bitcoin:</h3>
            <p>{marketData.precioBitcoin} USD</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Precio de Ethereum:</h3>
            <p>{marketData.precioEthereum} USD</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Volumen de Transacciones:</h3>
            <p>{marketData.volumenTransacciones} transacciones</p>
          </div>
          {/* Agrega más datos según tus necesidades */}
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default MarketStats;
