import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  GeographyProps,
} from "react-simple-maps";
import worldMapData from "../../public/json/world-110m.json";

interface Country {
  name: string;
  code: string;
}

interface MapChartProps {
  onCountrySelect: (country: Country) => void;
}

const MapChart: React.FC<MapChartProps> = ({ onCountrySelect }) => {
  const handleCountryClick = (geo: GeographyProps["geography"]) => {
    const { NAME, ISO_A3 } = geo.properties;
    const selectedCountry = { name: NAME, code: ISO_A3 };
    console.log("Selected Country:", selectedCountry); // Agregar este console.log
    onCountrySelect(selectedCountry);
  };

  return (
    <div>
      <ComposableMap>
        <Geographies geography={worldMapData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleCountryClick(geo)}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
