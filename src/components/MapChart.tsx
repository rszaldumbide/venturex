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
}

interface MapChartProps {
  onCountrySelect: (country: Country) => void;
}

const MapChart: React.FC<MapChartProps> = ({ onCountrySelect }) => {
  const handleCountryClick = (
    geo: GeographyProps & { properties: 
      { name: string }
     },
  ) => {
    onCountrySelect(
      {
        name: geo.properties.name,
      },
    );
    // Ver en consola log
    console.log(geo.properties);
  };

  return (
    <div className="flex justify-center">
      <ComposableMap className="w-full h-full">
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
